"use client";

import { ReactNode, useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollUtils";
import { sectionConfig, styleSettings, brandColors } from "@/config/content";
import { useLayoutStore } from "../stores/layoutStore";

interface SectionCardProps {
  id: string;
  index: number;
  className?: string;
  children: ReactNode;
  borderColor?: string;
  shadowColor?: string;
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
  const finalBorderColor =
    borderColor || sectionInfo?.borderColor || "border-venditio-navy/10";
  const finalShadowColor =
    shadowColor || sectionInfo?.shadowColor || "bg-black/5";

  // Constants for layout calculations
  const headerHeight = 6.25; // Height in em units for consistent scaling
  const cardSpacing = styleSettings.cardSpacing; // From centralized config
  const zIndex = 50 + index; // Higher index = higher z-index (on top)

  // Refs for DOM elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Component state
  const [isMounted, setIsMounted] = useState(false);
  const [sectionTop, setSectionTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  // Layout state from store - include version to ensure re-renders on changes
  const { useStackedLayout, setUseStackedLayout, version, bumpVersion } =
    useLayoutStore();

  // Update section top position
  const updateSectionTop = useCallback(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setSectionTop(rect.top + window.scrollY);
    }
  }, []);

  // Update card height
  const updateCardHeight = useCallback(() => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      setCardHeight(rect.height);
      console.log(`Card ${id} height updated to: ${rect.height}px`);
    }
  }, [id]);

  // Check layout mode based on viewport and content size
  const checkLayoutMode = useCallback(() => {
    if (!isMounted) return;

    console.log("Checking layout mode...");

    // Check if screen is narrow (mobile) - mobileBreakpoint is now in em
    const isNarrowScreen =
      window.innerWidth <= styleSettings.responsive.mobileBreakpoint * 16; // Convert em to pixels for comparison

    // For stacked layout, we only need to consider the tallest card, not the sum of all cards
    // This is because in stacked mode, only one card is fully visible at a time
    const tallestCardHeight = Math.max(
      ...sectionConfig.map((section) => section.cardHeight || 0)
    );

    // We need a small amount of extra space for the stacked UI to work properly
    // This accounts for the portion of the next card peeking from bottom
    const extraSpaceForStackedUI = cardSpacing * 16 * 2; // 2 rem of extra space

    // Calculate estimated height needed for stacked layout
    // This is just the tallest card + header + some extra for UI
    const estimatedMaxHeight =
      tallestCardHeight * 16 + headerHeight * 16 + extraSpaceForStackedUI; // Convert tallestCardHeight from em to pixels

    // Get available viewport height (subtract navbar height and add footer height)
    const footerHeight = styleSettings.footerHeight;
    const availableHeight =
      window.innerHeight -
      styleSettings.responsive.navbarHeightOffset * 16 -
      parseFloat(footerHeight) * 16; // Convert em to pixels for calculation

    // Determine if we should use flat layout based on estimated height and screen width
    const shouldUseFlatLayout =
      estimatedMaxHeight > availableHeight || isNarrowScreen;

    console.log(
      `Layout check: estimatedHeight=${estimatedMaxHeight}, availableHeight=${availableHeight}, ` +
        `tallestCardHeight=${tallestCardHeight}, extraSpace=${extraSpaceForStackedUI}, ` +
        `cardCount=${sectionConfig.length}, isNarrowScreen=${isNarrowScreen}, shouldUseFlatLayout=${shouldUseFlatLayout}`
    );

    // Only update if the layout needs to change
    if (useStackedLayout !== !shouldUseFlatLayout) {
      console.log(
        `Changing layout to: ${!shouldUseFlatLayout ? "stacked" : "flat"}`
      );
      setUseStackedLayout(!shouldUseFlatLayout);
      bumpVersion();
    }
  }, [
    isMounted,
    headerHeight,
    cardSpacing,
    useStackedLayout,
    setUseStackedLayout,
    bumpVersion,
  ]);

  // Calculate position for stacked layout
  const calculatePosition = useCallback(() => {
    // Get this section's height from the config - already in em
    const sectionHeight = sectionInfo?.cardHeight || cardHeight;
    const sectionHeightPx = sectionHeight * 16; // Convert to pixels for position calculations

    // For the first card (hero), position it below the navbar instead of center
    if (index === 0) {
      // Use the navbarOffset from config - already in em
      const navbarOffset = styleSettings.navbarOffset * 16; // Convert em to pixels for positioning
      return {
        top: navbarOffset,
        opacity: 1,
      };
    }

    // Ensure sectionTop is valid before calculations
    if (sectionTop <= 0) {
      // If sectionTop hasn't been calculated yet, position cards below viewport
      return {
        top: windowHeight + cardSpacing * 16 * index, // Position each card below the previous with cardSpacing
        opacity: 0.9,
      };
    }

    // For regular cards, calculate their position based on scroll
    // Use the card index to determine where it should stop in the stack
    // Higher index cards should stop sooner in the scroll process
    const scrollThreshold = sectionTop - windowHeight / 2;

    // All cards should move at the same rate for consistent spacing
    // This creates a uniform stacked effect where all cards move together
    const maxProgress = 1; // All cards move at the same rate

    // Calculate scroll progress, but limit it based on the card's index
    const rawProgress = (scrollPosition - scrollThreshold) / windowHeight;
    const scrollProgress = Math.max(0, Math.min(maxProgress, rawProgress));

    // When not scrolled to this section yet, cards should be positioned below the viewport
    if (scrollProgress <= 0) {
      // Position cards below each other with consistent spacing
      const offsetForIndex = index * cardSpacing * 16; // Use cardSpacing for consistent staggering
      return {
        top: windowHeight + offsetForIndex,
        opacity: 0.9 - index * 0.05, // Decreasing opacity for cards further down
      };
    }

    // When scrolled past this section, position the card at its final stacked position
    if (scrollProgress >= 1) {
      // For the first card, use navbarOffset, for others calculate stacked position
      if (index === 0) {
        const navbarOffset = styleSettings.navbarOffset * 16;
        return {
          top: navbarOffset,
          opacity: 1,
        };
      } else {
        // Calculated based on the position of the first card plus spacing
        const navbarOffset = styleSettings.navbarOffset * 16; // Convert em to pixels
        const baseOffset = cardSpacing * 16; // Base card spacing converted to pixels
        const stackOffset = index * baseOffset; // Each card stops baseOffset pixels below the previous one
        return {
          top: navbarOffset + stackOffset,
          opacity: 1,
        };
      }
    }

    // Calculate vertical stacking position based on index
    // First card is positioned below navbar, subsequent cards are stacked below with spacing

    // Calculate where this card should stop in the stack
    const baseOffset = cardSpacing * 16; // Base card spacing converted to pixels
    const stackOffset = index * baseOffset; // Each card stops baseOffset pixels below the previous one
    const navbarOffset = styleSettings.navbarOffset * 16; // Convert em to pixels
    const finalStackPosition = navbarOffset + stackOffset;

    // During transition, interpolate between the initial and final positions
    const startPosition = windowHeight + cardSpacing * 16 * index; // Position each card below the previous with cardSpacing
    const endPosition = finalStackPosition;

    // Apply easing for smoother motion
    const scrollProgressEased =
      scrollProgress < 0.5
        ? 2 * scrollProgress * scrollProgress // Ease in
        : 1 - Math.pow(-2 * scrollProgress + 2, 2) / 2; // Ease out

    // Calculate current position - move from startPosition toward endPosition
    const currentY =
      startPosition - scrollProgressEased * (startPosition - endPosition);

    return {
      top: currentY,
      opacity: 0.95 + scrollProgress * 0.05, // Subtle opacity change during transition
    };
  }, [
    index,
    windowHeight,
    cardSpacing,
    sectionTop,
    scrollPosition,
    sectionInfo,
    cardHeight,
  ]);

  // Set initial mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Cleanup
    };
  }, []);

  // Set initial values after mounting
  useEffect(() => {
    if (!isMounted) return;

    setWindowHeight(window.innerHeight);
    updateSectionTop();
    setScrollPosition(window.scrollY);

    // Set initial positions for cards
    const sectionHeight = (sectionInfo?.cardHeight || cardHeight) * 16; // Convert em to px
    const navbarOffset = styleSettings.navbarOffset * 16; // Convert em to px

    // Initial position - below navbar for hero card, below viewport for others
    const initialPosition =
      index === 0
        ? {
            top: navbarOffset,
            opacity: 1,
          }
        : {
            top: window.innerHeight + cardSpacing * 16 + index * 3 * 16, // Use 3em staggering in pixels
            opacity: 0.9 - index * 0.05,
          };

    // Calculate initial position and update layout as needed
    // Position will be updated through the normal render cycle

    // Ensure all cards are properly positioned on initial render
    setTimeout(() => {
      updateSectionTop();

      // For first card (hero), also check layout mode
      if (index === 0) {
        console.log("Running initial layout check");
        checkLayoutMode();
      }
    }, styleSettings.responsive.initialLayoutCheckDelayMs);
  }, [isMounted, index, updateSectionTop, checkLayoutMode]);

  // Handle scroll events
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Force recalculation of positions when in stacked mode
      if (useStackedLayout) {
        // This ensures cards reposition correctly during scrolling
        updateSectionTop();
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial scroll position
    handleScroll();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted, useStackedLayout, updateSectionTop]);

  // Handle resize events
  useEffect(() => {
    if (!isMounted) return;

    console.log("Setting up resize listener for card", id);

    // Create a throttled resize handler to prevent excessive checks
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        console.log(`Resize check for card ${id}`);
        setWindowHeight(window.innerHeight);
        updateSectionTop();
        updateCardHeight();

        // For the first card, we need to check if the layout mode should change
        if (index === 0) {
          checkLayoutMode();
        }
      }, styleSettings.responsive.resizeThrottleMs);
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    if (index === 0) {
      handleResize();
    }

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [
    isMounted,
    index,
    id,
    updateSectionTop,
    updateCardHeight,
    checkLayoutMode,
  ]);

  // Measure card height on mount and when content changes
  useEffect(() => {
    if (!isMounted || !contentRef.current) return;

    // Initial height update
    updateCardHeight();

    // Create a ResizeObserver to track height changes
    const resizeObserver = new ResizeObserver(() => {
      updateCardHeight();
      // If this is the first card, check layout mode after height update
      if (index === 0) {
        checkLayoutMode();
      }
    });

    // Start observing
    resizeObserver.observe(contentRef.current);

    // Cleanup
    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [isMounted, updateCardHeight, index, checkLayoutMode]);

  // Handle layout mode changes
  useEffect(() => {
    if (isMounted) {
      console.log(
        `Card ${id} rendering with layout: ${
          useStackedLayout ? "stacked" : "flat"
        }, store version: ${version}`
      );

      // When layout mode changes, we need to update positions
      updateSectionTop();

      // Force immediate reposition on layout change
      if (useStackedLayout) {
        // Allow a brief moment for the DOM to update before recalculating positions
        setTimeout(() => {
          updateSectionTop();
          setScrollPosition(window.scrollY);
        }, 50);
      }
    }
  }, [useStackedLayout, version, isMounted, id, updateSectionTop]);

  // Handle card click
  const handleCardClick = () => {
    scrollToSection(id);
  };

  // Calculate current position based on scroll and layout
  const currentPosition = calculatePosition();

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`w-full relative py-4 ${
        !useStackedLayout ? "mb-8" : "min-h-screen"
      }`}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", // Helps with centering of child content
      }}
    >
      {isMounted &&
        (useStackedLayout ? (
          // Stacked layout (fixed positioning)
          <motion.div
            initial={false}
            animate={currentPosition}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={handleCardClick}
            // Using classNames without dynamic calculation for consistent rendering
            className={`fixed rounded-xl shadow-xl border ${finalBorderColor} ${className} cursor-pointer section-card-${id}`}
            style={{
              position: "fixed", // Ensure fixed positioning
              top: currentPosition.top,
              // left: "50%",
              // transform: "translateX(-50%)", // Centers the card horizontally
              width: styleSettings.cardWidth,
              maxWidth: styleSettings.maxCardWidth,
              height: `${sectionInfo?.cardHeight || 50}em`, // Use em units directly
              zIndex,
              // transformOrigin: "center center", // Crucial for centered scaling
              transition: "all 0.3s ease-out", // Smoother transition
              opacity: 1, // Force full opacity
              // Use the centralized configuration for background color
              backgroundColor: sectionInfo?.bgColorHex || brandColors.white,
              // Use consistent shadow style for card differentiation
              boxShadow: styleSettings.defaultShadow,
              borderWidth: styleSettings.borderWidth,
              margin: "0 auto", // Additional horizontal centering
              // right: "auto" // Prevent right-side positioning
            }}
            // Using Framer Motion's hover features for more reliable effects
            whileHover={{
              scale:
                index > 0
                  ? styleSettings.hoverScale
                  : styleSettings.heroHoverScale,
              boxShadow: styleSettings.hoverShadow,
              // Use the navy blue border on hover from configuration
              borderColor:
                sectionInfo?.hoverBorderColorHex || brandColors.navyBlue,
              borderWidth: styleSettings.borderWidth,
              // Minor margins to prevent viewport overflow
              marginLeft: 0,
              marginRight: 0,
            }}
          >
            {/* Shadow effect */}
            <div
              className={`absolute -bottom-3 inset-x-4 ${finalShadowColor} blur-xl rounded-full z-[-1] transition-all duration-300`}
              style={{ height: "0.5em" }}
            ></div>
            {/* Content */}
            <div
              ref={contentRef}
              className="w-full h-full rounded-2xl overflow-hidden"
            >
              {children}
            </div>
          </motion.div>
        ) : (
          // Flat layout (normal flow)
          <div
            onClick={handleCardClick} // Add click handler to flat view cards too
            className={`relative rounded-xl shadow-xl border ${finalBorderColor} ${className} section-card-${id} mx-auto mb-8 mt-8 cursor-pointer`}
            style={{
              width: styleSettings.cardWidth,
              maxWidth: styleSettings.maxCardWidth,
              backgroundColor: sectionInfo?.bgColorHex || brandColors.white,
              boxShadow: styleSettings.defaultShadow,
              borderWidth: styleSettings.borderWidth,
              transition: "all 0.2s ease-in-out",
            }}
            // Add hover effect for flat view
            onMouseOver={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1.01)";
              target.style.boxShadow = styleSettings.hoverShadow;
              target.style.borderColor =
                sectionInfo?.hoverBorderColorHex || brandColors.navyBlue;
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1)";
              target.style.boxShadow = styleSettings.defaultShadow;
              target.style.borderColor = "";
            }}
          >
            {/* Shadow effect */}
            <div
              className={`absolute -bottom-3 inset-x-4 ${finalShadowColor} blur-xl rounded-full z-[-1] transition-all duration-300`}
              style={{ height: "0.5em" }}
            ></div>
            {/* Content */}
            <div
              ref={contentRef}
              className="w-full h-full rounded-2xl overflow-hidden"
            >
              {children}
            </div>
          </div>
        ))}
    </div>
  );
}
