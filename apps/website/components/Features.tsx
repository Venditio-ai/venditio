"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HelpCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  featuresContent,
  brandColors,
  styleSettings,
  twClasses,
} from "@/config/content";

const Features: React.FC = () => {
  const { title, subtitle, features } = featuresContent;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20"
      style={{
        background: `linear-gradient(to bottom, ${brandColors.white}, ${brandColors.lightGray})`,
      }}
    >
      <div className="w-full max-w-[98%] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: brandColors.navyBlue }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto"
            style={{ color: `${brandColors.navyBlue}cc` }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0 max-w-full overflow-hidden">
          {/* Feature Cards - 3 per row on large screens */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature type definition
type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  learnMoreUrl?: string;
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isInView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index,
  isInView,
}) => {
  // Calculate staggered animation delay based on index
  const delay = 0.1 + index * 0.08; // Slightly reduced delay for more cards

  // Determine animation direction based on position in grid
  // For 3-column layout, use different directions
  const getAnimationDirection = () => {
    const col = index % 3; // 3 columns
    if (col === 0) return -30; // Left column comes from left
    if (col === 2) return 30; // Right column comes from right
    return 0; // Middle column comes from bottom only
  };

  // Card variants with slide-in effect
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: getAnimationDirection(),
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const IconComponent = feature.icon || HelpCircle;

  return (
    <motion.div
      className="group relative rounded-xl shadow-xl border overflow-hidden"
      style={{
        backgroundColor: brandColors.white,
        borderColor: `${brandColors.navyBlue}0a`,
        borderWidth: styleSettings.borderWidth,
        boxShadow: styleSettings.defaultShadow,
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{
        y: -8,
        boxShadow: styleSettings.deepShadow,
        borderColor: brandColors.navyBlue,
        transition: { duration: 0.3 },
      }}
    >
      <div className="p-6">
        {/* Icon container */}
        <div className="flex justify-center items-center w-full mb-6">
          <div className="w-16 h-16 rounded-full bg-venditio-navy/10 flex items-center justify-center">
            <IconComponent
              className="w-8 h-8 text-venditio-navy"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-venditio-navy">
            {feature.title}
          </h3>
          <p className="text-venditio-navy/80">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
