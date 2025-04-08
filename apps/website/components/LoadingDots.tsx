"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandColors } from "@/config/content";

interface LoadingDotsProps {
  className?: string;
  color?: string;
  size?: number;
  count?: number;
  speed?: number;
}

const LoadingDots: React.FC<LoadingDotsProps> = ({
  className,
  color = brandColors.navyBlue,
  size = 8,
  count = 3,
  speed = 0.7,
}) => {
  // Create an array based on the count
  const dots = Array.from({ length: count }, (_, i) => i);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {dots.map((i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            backgroundColor: color,
            width: `${size}px`,
            height: `${size}px`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: i * (speed / 3), // Stagger the animation
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
