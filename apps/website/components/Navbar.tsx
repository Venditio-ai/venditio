"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navbarContent, brandColors, styleSettings, twClasses } from "@/config/content";
import { scrollToSection } from "../utils/scrollUtils";

const Navbar: React.FC = () => {
  const { logoText, navLinks, ctaButtonText, ctaButtonLink } = navbarContent;
  
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handler for internal link clicks
  const handleSectionClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    scrollToSection(targetId);
    // Close mobile menu after clicking a link
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className="backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50 border-b"
      style={{ 
        backgroundColor: `${brandColors.white}e6`, 
        borderColor: `${brandColors.gray}`,
        boxShadow: styleSettings.defaultShadow 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex-shrink-0">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
                <Image 
                  src="/logo/logo_text_no_background.svg" 
                  alt="Venditio AI Logo" 
                  width={150} 
                  height={40} 
                  className="h-auto" 
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSectionClick(link.href, e)}
                className="px-3 py-2 text-[15px] font-medium cursor-pointer relative group transition-colors"
                style={{ 
                  color: brandColors.navyBlue, 
                  transition: `all ${styleSettings.transitionSpeed} ease-in-out` 
                }}
              >
                {link.name}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all ease-in-out"
                  style={{ 
                    backgroundColor: brandColors.navyBlue, 
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out` 
                  }}
                ></span>
              </a>
            ))}
            <Button
              asChild
              className="text-white shadow-sm hover:shadow-md transition-all font-medium ml-2 px-5"
              style={{ 
                backgroundColor: brandColors.navyBlue, 
                transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                boxShadow: styleSettings.defaultShadow 
              }}
            >
              <a
                href={ctaButtonLink}
                onClick={(e) => handleSectionClick(ctaButtonLink, e)}
              >
                <span>{ctaButtonText}</span>
              </a>
            </Button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-inset transition-colors"
              style={{ 
                color: brandColors.navyBlue,
                transition: `all ${styleSettings.transitionSpeed} ease-in-out`
              }}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-2 shadow-inner border-t"
          style={{ borderColor: brandColors.gray }}
        >
          <div className="space-y-1 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSectionClick(link.href, e)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50"
                style={{ color: brandColors.navyBlue }}
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button
                asChild
                className="w-full text-white shadow-sm hover:shadow-md transition-all font-medium px-4 py-2 mt-2"
                style={{ 
                  backgroundColor: brandColors.navyBlue, 
                  transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  boxShadow: styleSettings.defaultShadow 
                }}
              >
                <a
                  href={ctaButtonLink}
                  onClick={(e) => handleSectionClick(ctaButtonLink, e)}
                >
                  <span>{ctaButtonText}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
