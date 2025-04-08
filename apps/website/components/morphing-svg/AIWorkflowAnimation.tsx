"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { brandColors } from "@/config/content";
import { cn } from "@/lib/utils";

interface AIWorkflowAnimationProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  interactive?: boolean;
}

/**
 * AIWorkflowAnimation - Animated SVG showing how Venditio AI adapts
 * to different workflow tasks and unifies customer interactions
 */
const AIWorkflowAnimation: React.FC<AIWorkflowAnimationProps> = ({
  className,
  width = 300,
  height = 200,
  primaryColor = brandColors.navyBlue,
  secondaryColor = brandColors.lightNavy,
  backgroundColor = "transparent",
  interactive = true,
}) => {
  // State to track current workflow state (email, chat, social, etc.)
  const [workflowState, setWorkflowState] = useState<number>(0);
  const workflows = ["Email", "Chat", "Social", "Support"];
  
  // Change state on interaction if interactive mode is enabled
  const handleInteraction = () => {
    if (interactive) {
      setWorkflowState((prev) => (prev + 1) % workflows.length);
    }
  };

  // Animation variants for different workflow states
  const getIconPath = (state: number) => {
    switch (state) {
      case 0: // Email workflow
        return "M35,50 L65,30 L145,30 L175,50 L145,70 L65,70 Z";
      case 1: // Chat workflow
        return "M35,30 L175,30 L175,70 L120,70 L100,90 L100,70 L35,70 Z";
      case 2: // Social workflow
        return "M105,30 C125,30 145,40 145,60 C145,80 125,90 105,90 C85,90 65,80 65,60 C65,40 85,30 105,30 Z";
      case 3: // Support workflow
        return "M50,40 L160,40 L160,80 L50,80 Z";
      default:
        return "M35,50 L65,30 L145,30 L175,50 L145,70 L65,70 Z";
    }
  };

  // Connection patterns that morph based on the workflow state
  const getConnectionPaths = (state: number) => {
    switch (state) {
      case 0: // Email - radiating lines
        return [
          "M105,60 L105,100 L150,130", // to bottom right
          "M105,60 L105,100 L60,130",  // to bottom left
          "M105,60 L105,30 L60,10",    // to top left
          "M105,60 L105,30 L150,10",   // to top right
        ];
      case 1: // Chat - circulating paths
        return [
          "M105,60 C135,60 150,90 130,120 C110,150 90,150 70,120 C50,90 75,60 105,60",
          "M105,60 C75,60 60,30 80,10 C100,-10 120,-10 140,10 C160,30 135,60 105,60",
        ];
      case 2: // Social - network graph
        return [
          "M105,60 L130,110 L160,90 L140,40 L90,20 L60,50 L80,100 L105,60",
          "M105,60 L160,60 M105,60 L105,130 M105,60 L50,60",
        ];
      case 3: // Support - structured grid
        return [
          "M50,40 L50,150 L160,150 L160,40",
          "M70,40 L70,150 M90,40 L90,150 M110,40 L110,150 M130,40 L130,150 M140,40 L140,150",
          "M50,60 L160,60 M50,80 L160,80 M50,100 L160,100 M50,120 L160,120",
        ];
      default:
        return ["M105,60 L105,100"];
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all",
        interactive && "cursor-pointer hover:scale-105",
        className
      )}
      style={{ width, height, background: backgroundColor }}
      onClick={handleInteraction}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circuit patterns */}
        <motion.path
          d="M10,10 L10,150 M20,10 L20,150 M30,10 L30,150 M40,10 L40,150 M50,10 L50,150"
          stroke={`${primaryColor}10`}
          strokeWidth="0.5"
          strokeDasharray="3 5"
        />
        <motion.path
          d="M160,10 L160,150 M170,10 L170,150 M180,10 L180,150 M190,10 L190,150"
          stroke={`${primaryColor}10`}
          strokeWidth="0.5"
          strokeDasharray="3 5"
        />
        
        {/* Animated connections */}
        {getConnectionPaths(workflowState).map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={`${primaryColor}40`}
            strokeWidth="1"
            strokeDasharray="4 2"
            initial={false}
            animate={{
              pathLength: [0, 1],
              opacity: [0.3, 0.7],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Main workflow icon that morphs */}
        <motion.path
          fill={`${primaryColor}20`}
          stroke={primaryColor}
          strokeWidth="2"
          initial={false}
          animate={{
            d: getIconPath(workflowState),
          }}
          transition={{
            duration: 0.8,
            ease: "anticipate",
          }}
        />
        
        {/* Workflow name text */}
        <motion.text
          x="105"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={primaryColor}
          fontSize="12"
          fontWeight="bold"
          initial={false}
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {workflows[workflowState]}
        </motion.text>
        
        {/* Animated dots representing data flow */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 50 + (i % 3) * 10;
          const cx = 105 + Math.cos(angle) * radius;
          const cy = 60 + Math.sin(angle) * radius;
          
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="2"
              fill={secondaryColor}
              initial={false}
              animate={{
                opacity: [0, 0.8, 0],
                r: [1, 2, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
        
        {/* Animated label */}
        <motion.rect
          x="70"
          y="140"
          width="70"
          height="20"
          rx="5"
          fill={`${secondaryColor}20`}
          stroke={secondaryColor}
          strokeWidth="1"
        />
        <text
          x="105"
          y="150"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={secondaryColor}
          fontSize="8"
          fontWeight="medium"
        >
          VENDITIO AI
        </text>
      </svg>
    </div>
  );
};

export default AIWorkflowAnimation;
