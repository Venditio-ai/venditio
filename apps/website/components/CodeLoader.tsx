"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandColors } from "@/config/content";

interface CodeLoaderProps {
  className?: string;
  lines?: number;
  width?: string;
  color?: string;
  textColor?: string;
  speed?: number;
}

const CodeLoader: React.FC<CodeLoaderProps> = ({
  className,
  lines = 5,
  width = "100%",
  color = brandColors.navyBlue,
  textColor = brandColors.lightNavy,
  speed = 0.8,
}) => {
  // Create varying line lengths for more realistic code appearance
  const generateLineLength = (index: number): string => {
    const variations = ["60%", "80%", "75%", "90%", "65%", "85%", "70%"];
    return variations[index % variations.length];
  };

  return (
    <div className={cn("space-y-2 font-mono text-sm", className)} style={{ width }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="flex items-center">
          {/* Line number */}
          <div 
            className="mr-4 text-xs opacity-50" 
            style={{ color: textColor }}
          >
            {(i + 1).toString().padStart(2, "0")}
          </div>
          
          {/* Indentation with varying levels */}
          <div 
            className="opacity-40"
            style={{ 
              marginLeft: `${Math.floor(i % 3) * 12}px`,
              color: textColor 
            }}
          >
            {i % 4 === 0 && <span>{"function "}</span>}
            {i % 4 === 1 && <span>{"  if ("}</span>}
            {i % 4 === 2 && <span>{"    return "}</span>}
            {i % 4 === 3 && <span>{"  }"}</span>}
          </div>
          
          {/* Animated code line */}
          <motion.div
            className="ml-2 h-3 rounded"
            style={{ 
              width: generateLineLength(i),
              backgroundColor: `${color}20` // Using 20% opacity for the background
            }}
            initial={{ width: 0 }}
            animate={{ 
              width: generateLineLength(i),
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.1 // Stagger the animation
            }}
          >
            {/* Cursor animation */}
            <motion.div
              className="h-full w-2 rounded"
              style={{ backgroundColor: color }}
              animate={{
                x: [0, generateLineLength(i) === "60%" ? "60%" : "100%", 0],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: speed * 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default CodeLoader;
