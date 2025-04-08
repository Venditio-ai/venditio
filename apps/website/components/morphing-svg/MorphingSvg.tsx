"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MorphingSvgProps {
  className?: string;
  paths: string[];
  colors?: string[];
  width?: string | number;
  height?: string | number;
  duration?: number;
  viewBox?: string;
  loop?: boolean;
  strokeWidth?: number;
  fill?: string;
  isomorphic?: boolean; // Whether paths should have the same number of points
  onClick?: () => void;
  hoverEffect?: boolean;
  pauseOnHover?: boolean;
}

/**
 * MorphingSvg - A component that morphs between different SVG paths
 * 
 * @param className - Optional className for styling
 * @param paths - Array of SVG path strings to morph between
 * @param colors - Array of colors for each path (optional)
 * @param width - SVG width (default: 100%)
 * @param height - SVG height (default: 100%)
 * @param duration - Animation duration in seconds (default: 2)
 * @param viewBox - SVG viewBox (default: "0 0 100 100")
 * @param loop - Whether to loop through paths (default: true)
 * @param strokeWidth - Width of the SVG stroke (default: 1)
 * @param fill - Fill color (default: "none")
 * @param isomorphic - If paths have same number of points (default: false)
 * @param onClick - Click handler
 * @param hoverEffect - Whether to add hover effect (default: false)
 * @param pauseOnHover - Pause animation on hover (default: false)
 */
const MorphingSvg: React.FC<MorphingSvgProps> = ({
  className,
  paths,
  colors,
  width = "100%",
  height = "100%",
  duration = 2,
  viewBox = "0 0 100 100",
  loop = true,
  strokeWidth = 1,
  fill = "none",
  isomorphic = false,
  onClick,
  hoverEffect = false,
  pauseOnHover = false,
}) => {
  const [pathIndex, setPathIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Automatic path cycling (if not paused on hover)
  useEffect(() => {
    if (loop && (!pauseOnHover || !isHovering)) {
      const interval = setInterval(() => {
        setPathIndex((prevIndex) => (prevIndex + 1) % paths.length);
      }, duration * 1000);
      
      return () => clearInterval(interval);
    }
  }, [loop, paths.length, duration, pauseOnHover, isHovering]);
  
  const currentPath = paths[pathIndex];
  const nextPathIndex = (pathIndex + 1) % paths.length;
  const currentColor = colors ? colors[pathIndex] : undefined;
  
  // Handle hover events for pause and hover effects
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={cn("transition-all", 
        hoverEffect && "cursor-pointer hover:scale-105",
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={false}
    >
      <motion.path
        d={currentPath}
        stroke={currentColor || "currentColor"}
        strokeWidth={strokeWidth}
        fill={fill}
        animate={{ 
          d: isHovering && pauseOnHover ? currentPath : paths[nextPathIndex],
          // Subtle animations while morphing
          strokeWidth: isHovering && hoverEffect ? strokeWidth * 1.5 : strokeWidth,
          strokeDashoffset: [0, 10, 0],
        }}
        transition={{
          d: { 
            duration: isHovering && pauseOnHover ? 0 : duration, 
            ease: "easeInOut" 
          },
          strokeWidth: { duration: 0.3 },
          strokeDashoffset: { duration: duration, repeat: Infinity, ease: "linear" }
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
      />
    </motion.svg>
  );
};

export default MorphingSvg;
