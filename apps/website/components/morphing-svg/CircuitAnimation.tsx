"use client";

import React from "react";
import MorphingSvg from "./MorphingSvg";
import { circuitPatterns, circuitColorThemes, circuitGradients } from "./CircuitPatterns";
import { cn } from "@/lib/utils";

export type CircuitType = "aiNodes" | "neuralPaths" | "dataFlows" | "binaryPaths" | "brainPaths";
export type ColorTheme = "blue" | "grayscale" | "gradient";

interface CircuitAnimationProps {
  className?: string;
  type?: CircuitType;
  colorTheme?: ColorTheme;
  width?: string | number;
  height?: string | number;
  duration?: number;
  interactive?: boolean;
  strokeWidth?: number;
  useGradient?: boolean;
}

/**
 * CircuitAnimation - Specialized component for AI-related circuit animations
 * Represents connections between AI agents, data flows, and neural networks
 */
const CircuitAnimation: React.FC<CircuitAnimationProps> = ({
  className,
  type = "neuralPaths",
  colorTheme = "blue",
  width = 200,
  height = 200,
  duration = 3,
  interactive = true,
  strokeWidth = 2,
  useGradient = false,
}) => {
  // Get paths and colors based on type and theme
  const paths = circuitPatterns[type];
  const colors = useGradient 
    ? circuitColorThemes.gradient 
    : circuitColorThemes[colorTheme];

  return (
    <div className={cn("relative", className)}>
      {useGradient && (
        <svg width="0" height="0" className="absolute">
          <defs>
            {circuitGradients.map((gradient) => (
              <linearGradient
                key={gradient.id}
                id={gradient.id}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                {gradient.colors.map((stop, index) => (
                  <stop
                    key={index}
                    offset={stop.offset}
                    stopColor={stop.color}
                  />
                ))}
              </linearGradient>
            ))}
          </defs>
        </svg>
      )}
      
      <MorphingSvg
        paths={paths}
        colors={colors}
        width={width}
        height={height}
        duration={duration}
        strokeWidth={strokeWidth}
        hoverEffect={interactive}
        pauseOnHover={interactive}
        fill="none"
      />
    </div>
  );
};

export default CircuitAnimation;
