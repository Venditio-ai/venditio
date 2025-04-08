"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { heroContent, brandColors, styleSettings, twClasses } from "@/config/content";
import { scrollToSection } from "../utils/scrollUtils";
import HeroCircuitAnimation from "./morphing-svg/HeroCircuitAnimation";

function Hero() {
  // Use configuration for content
  const {
    headlineHighlight,
    headlinePrefix,
    subheadline,
    ctaButtonText,
    ctaButtonLink,
    visualAltText,
    alternateHeadlines,
  } = heroContent;

  // State for cycling headlines
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Handle the typing animation for the first line
  useEffect(() => {
    // If we're typing
    if (isTyping && !isDeleting) {
      const currentHeadline = alternateHeadlines[headlineIndex];

      if (displayedText.length < currentHeadline.length) {
        // Continue typing
        const timeoutId = setTimeout(() => {
          setDisplayedText(currentHeadline.slice(0, displayedText.length + 1));
          setTypingSpeed(Math.random() * 50 + 80); // Slight random variation in typing speed
        }, typingSpeed);
        return () => clearTimeout(timeoutId);
      } else {
        // Finished typing, pause before deleting
        const timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    }

    // If we're deleting
    if (isDeleting) {
      if (displayedText.length > 0) {
        // Continue deleting
        const timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
          setTypingSpeed(50); // Deleting is faster than typing
        }, typingSpeed / 2);
        return () => clearTimeout(timeoutId);
      } else {
        // Finished deleting, move to next headline
        setIsDeleting(false);
        setHeadlineIndex((headlineIndex + 1) % alternateHeadlines.length);
      }
    }
  }, [
    isTyping,
    isDeleting,
    displayedText,
    headlineIndex,
    alternateHeadlines,
    typingSpeed,
  ]);

  // Setup the static typing animation for the second line
  useEffect(() => {
    const secondLine = document.querySelector(".headline-line2");
    const secondLineText = document.querySelector(".second-line-text");

    if (secondLine && secondLineText) {
      // Reset any existing animation classes
      secondLine.classList.remove("typing-animation-static");

      // Add with slight delay to ensure DOM is ready
      setTimeout(() => {
        secondLine.classList.add("typing-animation-static");
      }, 100);
    }
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${brandColors.white}, ${brandColors.lightGray}90)`
        }}
      >
        {/* Additional subtle pattern layer for texture */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.5))] opacity-20 z-[-5]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Headline with typing animation */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 fade-in" style={{ color: brandColors.navyBlue }}>
            <span className="headline-line1 typing-wrapper cursor-typing">
              {displayedText}
            </span>
            <br />
            <span className="headline-line2 typing-wrapper">
              <span className="second-line-text">
                <span style={{ color: brandColors.navyBlue }}>{headlinePrefix}</span>
                <span style={{ color: brandColors.lightNavy }}>{headlineHighlight}</span>
              </span>
            </span>
          </h1>

          {/* Subheadline with fade-in effect */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 slide-up"
            style={{ 
              color: `${brandColors.navyBlue}cc`,
              animationDelay: "1s" 
            }}
          >
            {subheadline}
          </p>

          {/* CTA Button with slide-up animation */}
          <Button
            size="lg"
            className="text-white slide-up"
            style={{ 
              backgroundColor: brandColors.navyBlue,
              transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
              boxShadow: styleSettings.defaultShadow,
              animationDelay: "1.5s"
            }}
            onClick={() => scrollToSection("waitlist")}
          >
            <span>{ctaButtonText}</span>
          </Button>

          {/* Visual with Advanced Circuit Animation */}
          <div className="mt-12 fade-in relative" style={{ animationDelay: "2s" }}>
            <div 
              className="aspect-video border rounded-lg shadow-lg flex items-center justify-center hover:shadow-xl transition-all overflow-hidden group" 
              style={{ 
                backgroundColor: `${brandColors.navyBlue}0a`,
                borderColor: `${brandColors.navyBlue}1a`,
                borderWidth: styleSettings.borderWidth,
                transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                boxShadow: styleSettings.defaultShadow
              }}
            >
              {/* Specialized Venditio Circuit Animation showing unified pipelines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <HeroCircuitAnimation 
                  primaryColor={brandColors.navyBlue}
                  secondaryColor={brandColors.lightNavy}
                  accentColor="#4A9DFF"
                  width="100%"
                  height="100%"
                  className="transform scale-95 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
              
              {/* Visual container hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-in-out z-0 bg-gradient-to-br from-transparent to-blue-100"></div>
            </div>
          </div>
        </div>
      </section>
    </>  
  );
};

export default Hero;
