"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandColors } from "@/config/content";
import LoadingDots from "./LoadingDots";
import CodeLoader from "./CodeLoader";

export type AILoadingVariant = "dots" | "code" | "thinking" | "processing";

interface AILoadingProps {
  variant?: AILoadingVariant;
  className?: string;
  text?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}

const AILoading: React.FC<AILoadingProps> = ({
  variant = "thinking",
  className,
  text,
  color = brandColors.navyBlue,
  size = "md",
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      dotSize: 6,
      codeLines: 3,
      width: "200px",
      pulseSize: "40px",
    },
    md: {
      dotSize: 8,
      codeLines: 5,
      width: "320px",
      pulseSize: "60px",
    },
    lg: {
      dotSize: 10,
      codeLines: 8,
      width: "400px",
      pulseSize: "80px",
    },
  };

  // Default text based on variant
  const defaultText = {
    dots: "Loading",
    code: "Processing",
    thinking: "AI Thinking",
    processing: "Processing Request",
  };

  const displayText = text || defaultText[variant];
  const config = sizeConfig[size];

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      {/* Variant-specific loaders */}
      {variant === "dots" && (
        <LoadingDots color={color} size={config.dotSize} />
      )}

      {variant === "code" && (
        <CodeLoader 
          color={color} 
          lines={config.codeLines} 
          width={config.width} 
        />
      )}

      {variant === "thinking" && (
        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="rounded-full"
            style={{ 
              backgroundColor: `${color}30`,
              width: config.pulseSize,
              height: config.pulseSize,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="h-full w-full rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${color}10` }}
              animate={{
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LoadingDots color={color} size={config.dotSize} />
            </motion.div>
          </motion.div>
        </div>
      )}

      {variant === "processing" && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{ 
                borderWidth: "2px",
                borderColor: color,
                opacity: 0.3,
              }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <CodeLoader 
              color={color} 
              lines={config.codeLines - 2} 
              width={config.width}
              className="p-4" 
            />
          </div>
        </div>
      )}

      {/* Text label */}
      {displayText && (
        <motion.div 
          className="mt-4 font-medium text-center"
          style={{ color }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {displayText}
          <LoadingDots 
            className="inline-flex ml-1" 
            color={color} 
            size={Math.floor(config.dotSize/1.5)} 
            count={3}
          />
        </motion.div>
      )}
    </div>
  );
};

export default AILoading;
