"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { brandColors, footerContent, navbarContent, styleSettings } from "@/config/content";
import { Mail, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { scrollToSection } from "../utils/scrollUtils";
import { fadeIn, slideInFromBottom, staggerContainer } from "../lib/animations";

// Icon components for social media
const SocialIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "email":
      return <Mail className={className || "w-full h-full"} />;
    case "twitter":
      return <Twitter className={className || "w-full h-full"} />;
    case "linkedin":
      return <Linkedin className={className || "w-full h-full"} />;
    case "github":
      return <Github className={className || "w-full h-full"} />;
    case "instagram":
      return <Instagram className={className || "w-full h-full"} />;
    default:
      return null;
  }
};

const Footer = () => {
  const { companyInfo, socialLinks, legalLinks } = footerContent;
  const { navLinks, ctaButtonLink, ctaButtonText } = navbarContent;

  // Handler for internal link clicks using the centralized scroll utility
  const handleSectionClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    scrollToSection(targetId);
  };

  return (
    <motion.footer
      className="text-white w-full mt-0 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      style={{
        backgroundColor: brandColors.navyBlue,
        minHeight: styleSettings.footerHeight,
      }}
    >
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 py-4">
          {/* Left: Logo and tagline */}
          <div className="flex-shrink-0 flex flex-col items-center lg:items-start mb-4 lg:mb-0 max-w-[240px] mx-auto lg:mx-0">
            <a href="#" onClick={(e) => handleSectionClick("hero", e)} className="mb-2">
              <Image
                src="/logo/logo_text_no_background.svg"
                alt="Venditio AI Logo"
                width={130}
                height={35}
                className="h-auto"
              />
            </a>
            <p className="text-xs text-center lg:text-left" style={{ color: `${brandColors.white}99` }}>
              {footerContent.companyInfo.tagline}
            </p>
          </div>

          {/* Middle: Navigation links */}
          <div className="hidden lg:flex justify-center items-center mb-4 lg:mb-0">
            <ul className="flex flex-wrap justify-center gap-x-8">
              {navLinks.map((link: { name: string; href: string }, index: number) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSectionClick(link.href, e)}
                    className="relative text-sm group overflow-hidden py-2 px-1 inline-block"
                    style={{
                      color: `${brandColors.white}cc`,
                      transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                    }}
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-white opacity-70 group-hover:w-full transition-all duration-300 ease-in-out"
                      style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)' }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social links and CTA */}
          <div className="flex flex-col items-center lg:items-end mb-4 lg:mb-0">
            <div className="flex items-center space-x-4 mb-3">
              {footerContent.socialLinks.map((link: { name: string; href: string; icon: string }, index: number) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-white transition-colors"
                  style={{
                    color: `${brandColors.white}99`,
                    transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  }}
                >
                  <span className="w-5 h-5 inline-flex">
                    <SocialIcon name={link.icon} />
                  </span>
                </Link>
              ))}
            </div>
            <Button
              asChild
              className="text-white text-xs px-4 py-1.5 font-medium hover:bg-white transition-all duration-300"
              style={{
                backgroundColor: brandColors.lightNavy,
                boxShadow: styleSettings.defaultShadow,
                transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
              }}
            >
              <a
                href={ctaButtonLink}
                onClick={(e) => handleSectionClick(ctaButtonLink, e)}
                className="block w-full whitespace-nowrap"
              >
                {ctaButtonText}
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile navigation - Only visible on small screens */}
        <div className="lg:hidden px-4 sm:px-6 mb-4">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {navLinks.map((link: { name: string; href: string }, index: number) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleSectionClick(link.href, e)}
                className="relative text-xs group overflow-hidden py-1.5 px-2 inline-block"
                style={{
                  color: `${brandColors.white}cc`,
                  transition: `all ${styleSettings.transitionSpeed} ease-in-out`,
                  background: `${brandColors.white}10`,
                  borderRadius: '4px',
                }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-full bg-white opacity-10 group-hover:w-full transition-all duration-300 ease-in-out"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div
          className="border-t border-white/20 mx-4 sm:mx-6 pt-3 pb-3 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-[10px] mb-1 sm:mb-0" style={{ color: `${brandColors.white}66` }}>
            {companyInfo.copyright}
          </p>
          <p className="text-[10px]" style={{ color: `${brandColors.white}66` }}>
            Made with ❤️ in Barcelona
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
