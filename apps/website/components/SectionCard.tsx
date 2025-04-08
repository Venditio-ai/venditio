"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToSection } from "../utils/scrollUtils";
import { 
  sectionConfig, 
  getColorHexForSection, 
  getHoverColorForSection,
  isSectionLast,
  styleSettings, 
  brandColors, 
  twClasses 
} from "@/config/content";

interface SectionCardProps {
  id: string;
  index: number;
  className?: string;
  children: ReactNode;
  // Configurable colors - these are now optional as they will be derived from sectionConfig
  borderColor?: string; // Full class name: 'border-venditio-navy/10'
  shadowColor?: string; // Full class name: 'bg-black/5'
}

export default function SectionCard({
  id,
  index,
  className = "",
  children,
  borderColor,
  shadowColor,
}: SectionCardProps) {
  // Get section info from centralized config
  const sectionInfo = sectionConfig.find((s) => s.id === id);

  // Use provided values or fallback to the section config
  // Ensuring we always have solid background colors, not transparent ones
  const finalBorderColor =
    borderColor || sectionInfo?.borderColor || "border-venditio-navy/10";
  const finalShadowColor =
    shadowColor || sectionInfo?.shadowColor || "bg-black/5";

  // Get the color part without the 'bg-' prefix for use in other contexts if needed
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Constants - using values from centralized configuration
  const headerHeight = 270; // Further increased to prevent navbar intersection
  const cardSpacing = styleSettings.cardSpacing; // From centralized config
  const zIndex = 50 + index; // Higher index = higher z-index (on top)

  // Special card handling
  const isFirstCard = index === 0;
  const isSecondCard = index === 1;

  // State to track if component is mounted (client-side)
  const [isMounted, setIsMounted] = useState(false);

  // Initialize measurements
  useEffect(() => {
    // Set mounted state to true only on client
    setIsMounted(true);
    
    // Set initial values
    setWindowHeight(window.innerHeight);
    updateSectionTop();
    setScrollPosition(window.scrollY);

    // Add scroll and resize listeners
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      updateSectionTop();
    };

    // Update the top position of this section
    function updateSectionTop() {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate y position based on scroll
  const calculatePosition = () => {
    // Base case for server-side rendering or initial load
    if (!isMounted || !sectionRef.current) {
      return {
        top: 0,
        opacity: 1,
        scale: 1,
        isStacked: false,
        isActive: false,
        elementTopRelativeToDocument: 0,
      };
    }

    const currentScroll = window.scrollY;
    const elementRect = sectionRef.current.getBoundingClientRect();
    // Calculate the element's original top position relative to the document start
    const elementTopRelativeToDocument = elementRect.top + currentScroll;

    // Calculate how far the viewport's top has scrolled past the element's starting top position
    const scrollPastSectionStart = Math.max(
      0,
      currentScroll - (elementTopRelativeToDocument - windowHeight)
    ); // Consider when element enters viewport

    // Define the scroll distance over which the card transitions to its stacked position
    const scrollDistanceToStack = windowHeight * 0.6;

    // Calculate the progress (0 to 1) of the card moving to its stacked position
    const startStackingScrollPosition =
      elementTopRelativeToDocument - headerHeight - cardSpacing * index;
    const scrollPastStackingStart = Math.max(
      0,
      currentScroll - startStackingScrollPosition
    );
    const scrollRatio = Math.min(
      1,
      scrollPastStackingStart / scrollDistanceToStack
    );

    // Target final stacked position (top coordinate)
    let targetTopPosition;
    targetTopPosition = headerHeight + 20 + index * cardSpacing;

    // Interpolate the current top position based on scrollRatio
    const naturalTopPosition = elementTopRelativeToDocument;
    const currentTop =
      naturalTopPosition -
      scrollRatio * (naturalTopPosition - targetTopPosition);

    // Determine card state based on scrollRatio
    const isActive = scrollRatio > 0 && scrollRatio < 1;
    const isStacked = scrollRatio >= 1;

    // Apply a subtle scale effect based on stacking progress
    const scale = 1 - scrollRatio * 0.03;

    // console.log(`Card ${id}: scrollRatio=${scrollRatio.toFixed(2)}, isStacked=${isStacked}, isActive=${isActive}, currentTop=${currentTop.toFixed(0)}`);

    return {
      top: currentTop,
      opacity: 1,
      scale,
      isStacked,
      isActive,
      elementTopRelativeToDocument, // Expose this for click handler
    };
  };

  const position = calculatePosition();

  // Force the opacity to always be 1 to prevent any transparency
  position.opacity = 1;

  // Function to handle card click - using centralized scroll utility
  const handleCardClick = () => {
    // Use the centralized scroll utility with the card's ID
    scrollToSection(id);
  };

  return (
    <div
      id={id}
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center py-4"
      style={{ position: "relative" }}
    >
      {/* Add extra padding after last section to prevent footer overlap */}
      {sectionInfo?.isLastSection && <div className={styleSettings.sectionSpacing}></div>}
      {isMounted && (
        <motion.div
          initial={false}
          animate={position}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={handleCardClick}
          // Using fixed classNames without dynamic calculation to ensure consistent rendering
          className={`fixed w-screen md:w-[98vw] rounded-xl shadow-xl border ${finalBorderColor} ${className} cursor-pointer section-card-${id}`}
          style={{
            left: 0,
            right: 0,
            width: "100%",
            maxWidth: "100vw",
            zIndex,
            margin: 0,
            transformOrigin: "center center", // Crucial for centered scaling
            transition: "all 0.2s ease-in-out",
            opacity: 1, // Force full opacity
            // Use the centralized configuration for background color
            backgroundColor: sectionInfo?.bgColorHex || brandColors.white,
            // Use consistent shadow style for card differentiation
            boxShadow: styleSettings.defaultShadow,
            borderWidth: styleSettings.borderWidth,
          }}
          // Using Framer Motion's hover features for more reliable effects
          whileHover={{
            scale: index > 0 ? styleSettings.hoverScale : styleSettings.heroHoverScale,
            boxShadow: styleSettings.hoverShadow,
            // Use the navy blue border on hover from configuration
            borderColor: sectionInfo?.hoverBorderColorHex || brandColors.navyBlue,
            borderWidth: styleSettings.borderWidth,
            // Minor margins to prevent viewport overflow
            marginLeft: index > 0 ? -5 : 0,
            marginRight: index > 0 ? -5 : 0,
          }}
        >
          {/* Shadow effect */}
          <div
            className={`absolute -bottom-3 inset-x-4 h-8 ${finalShadowColor} blur-xl rounded-full z-[-1] transition-all duration-300`}
          ></div>
          {/* Content */}
          <div className="w-full h-full rounded-2xl overflow-hidden">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
}
