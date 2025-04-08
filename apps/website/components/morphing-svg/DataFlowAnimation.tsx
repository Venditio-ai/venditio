"use client";

import React from "react";
import { motion } from "framer-motion";
import { brandColors } from "@/config/content";
import { cn } from "@/lib/utils";

interface DataFlowAnimationProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  speed?: number;
  pulseEffect?: boolean;
  interactive?: boolean;
}

/**
 * DataFlowAnimation - Animated SVG showing data flowing through Venditio's
 * unified workflow system. Visualizes how information moves between
 * sales, marketing, and support channels.
 */
const DataFlowAnimation: React.FC<DataFlowAnimationProps> = ({
  className,
  width = 300,
  height = 200,
  primaryColor = brandColors.navyBlue,
  secondaryColor = brandColors.lightNavy,
  backgroundColor = "transparent",
  speed = 1,
  pulseEffect = true,
  interactive = true,
}) => {
  // Animation settings
  const flowDuration = 3 / speed;
  const pulseDuration = 2 / speed;

  return (
    <div
      className={cn("relative overflow-hidden", 
        interactive && "cursor-pointer hover:scale-105 transition-transform duration-300",
        className
      )}
      style={{ width, height, background: backgroundColor }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central Hub (representing Venditio AI) */}
        <motion.circle
          cx="150"
          cy="100"
          r="25"
          fill={`${primaryColor}30`}
          stroke={primaryColor}
          strokeWidth="2"
          animate={pulseEffect ? {
            r: [25, 28, 25],
            fill: [`${primaryColor}30`, `${primaryColor}40`, `${primaryColor}30`],
          } : {}}
          transition={{
            duration: pulseDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* "Venditio" text in center */}
        <text
          x="150"
          y="104"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={primaryColor}
          fontSize="10"
          fontWeight="bold"
        >
          VENDITIO
        </text>
        
        {/* Sales Node */}
        <motion.circle
          cx="60"
          cy="60"
          r="20"
          fill={`${secondaryColor}20`}
          stroke={secondaryColor}
          strokeWidth="1.5"
          animate={pulseEffect ? {
            r: [20, 22, 20],
          } : {}}
          transition={{
            duration: pulseDuration * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <text
          x="60"
          y="64"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={secondaryColor}
          fontSize="9"
        >
          SALES
        </text>
        
        {/* Marketing Node */}
        <motion.circle
          cx="60"
          cy="140"
          r="20"
          fill={`${secondaryColor}20`}
          stroke={secondaryColor}
          strokeWidth="1.5"
          animate={pulseEffect ? {
            r: [20, 22, 20],
          } : {}}
          transition={{
            duration: pulseDuration * 1.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <text
          x="60"
          y="144"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={secondaryColor}
          fontSize="9"
        >
          MARKETING
        </text>
        
        {/* Support Node */}
        <motion.circle
          cx="240"
          cy="100"
          r="20"
          fill={`${secondaryColor}20`}
          stroke={secondaryColor}
          strokeWidth="1.5"
          animate={pulseEffect ? {
            r: [20, 22, 20],
          } : {}}
          transition={{
            duration: pulseDuration * 1.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        <text
          x="240"
          y="104"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={secondaryColor}
          fontSize="9"
        >
          SUPPORT
        </text>
        
        {/* Connection Lines */}
        <path
          d="M80 60 L125 85"
          stroke={secondaryColor}
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <path
          d="M80 140 L125 115"
          stroke={secondaryColor}
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <path
          d="M175 100 L220 100"
          stroke={secondaryColor}
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        
        {/* Data Flow Animations - Sales to Center */}
        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill={primaryColor}
          animate={{
            cx: [80, 125],
            cy: [60, 85],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: flowDuration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.8, 1],
          }}
        />
        
        {/* Data Flow Animations - Marketing to Center */}
        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill={primaryColor}
          animate={{
            cx: [80, 125],
            cy: [140, 115],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: flowDuration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.8, 1],
            delay: flowDuration / 3,
          }}
        />
        
        {/* Data Flow Animations - Center to Support */}
        <motion.circle
          cx="0"
          cy="0"
          r="3"
          fill={primaryColor}
          animate={{
            cx: [175, 220],
            cy: [100, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: flowDuration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.8, 1],
            delay: (flowDuration / 3) * 2,
          }}
        />
        
        {/* Additional Data Particles */}
        <motion.circle
          cx="0"
          cy="0"
          r="2"
          fill={secondaryColor}
          animate={{
            cx: [80, 125],
            cy: [60, 85],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: flowDuration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.8, 1],
            delay: flowDuration / 2,
          }}
        />
        
        <motion.circle
          cx="0"
          cy="0"
          r="2"
          fill={secondaryColor}
          animate={{
            cx: [80, 125],
            cy: [140, 115],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: flowDuration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.8, 1],
            delay: flowDuration / 6,
          }}
        />
        
        <motion.circle
          cx="0"
          cy="0"
          r="2"
          fill={secondaryColor}
          animate={{
            cx: [175, 220],
            cy: [100, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: flowDuration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.8, 1],
            delay: flowDuration / 4,
          }}
        />
      </svg>
    </div>
  );
};

export default DataFlowAnimation;
