import { brandColors } from "@/config/content";

// These are predefined SVG path strings for different circuit patterns
// They are designed to morph smoothly between each other

export const circuitPatterns = {
  // Basic AI node patterns
  aiNodes: [
    "M20,50 L40,30 L60,30 L80,50 L60,70 L40,70 Z", // Hexagon
    "M20,50 L50,20 L80,50 L50,80 Z", // Diamond
    "M30,30 Q50,10 70,30 Q90,50 70,70 Q50,90 30,70 Q10,50 30,30 Z", // Rounded square
    "M25,50 C25,30 45,20 50,20 C55,20 75,30 75,50 C75,70 55,80 50,80 C45,80 25,70 25,50 Z" // Pill shape
  ],
  
  // Neural network patterns
  neuralPaths: [
    "M10,30 L30,30 L30,10 L50,10 L50,30 L70,30 L70,10 L90,10 L90,50 L70,50 L70,70 L50,70 L50,50 L30,50 L30,70 L10,70 Z", // Neural network
    "M10,10 L90,10 L90,30 L70,30 L70,50 L90,50 L90,70 L70,70 L70,90 L50,90 L50,70 L30,70 L30,90 L10,90 L10,70 L30,70 L30,50 L10,50 L10,30 L30,30 L30,10 Z", // Complex circuit
    "M10,20 Q50,10 90,20 Q80,50 90,80 Q50,90 10,80 Q20,50 10,20 Z", // Organic circuit
    "M20,20 C40,5 60,5 80,20 C95,40 95,60 80,80 C60,95 40,95 20,80 C5,60 5,40 20,20 Z" // Circular flow
  ],
  
  // Data flow patterns
  dataFlows: [
    "M10,50 L20,30 L40,30 L50,10 L60,30 L80,30 L90,50 L80,70 L60,70 L50,90 L40,70 L20,70 Z", // Data node
    "M10,50 Q30,30 50,30 Q70,30 90,50 Q70,70 50,70 Q30,70 10,50 Z", // Wave form
    "M10,50 C20,20 40,20 50,50 C60,80 80,80 90,50 C80,20 60,20 50,50 C40,80 20,80 10,50 Z", // Infinity-like
    "M10,40 L30,40 Q50,20 70,40 L90,40 L90,60 L70,60 Q50,80 30,60 L10,60 Z" // Circuit flow
  ],
  
  // Binary/code patterns
  binaryPaths: [
    "M10,20 L10,80 L90,80 L90,20 M20,20 L20,70 M40,30 L40,80 M60,20 L60,60 M80,40 L80,80", // Binary-like pattern
    "M10,50 L90,50 M20,30 L20,70 M40,20 L40,80 M60,30 L60,70 M80,20 L80,80", // Code lines
    "M10,20 L90,20 M10,40 L60,40 M30,40 L30,60 M10,60 L90,60 M10,80 L70,80", // Code blocks
    "M10,20 L50,20 L50,40 L30,40 L30,60 L70,60 L70,40 L50,40 L50,80 L90,80 L90,20" // Logic circuit
  ],
  
  // AI brain patterns
  brainPaths: [
    "M20,80 C20,40 40,20 50,20 C60,20 80,40 80,50 C80,60 70,70 60,70 C50,70 45,65 40,65 C30,65 20,80 20,80 Z", // Brain-like
    "M30,20 C40,10 60,10 70,20 C85,30 90,50 80,70 C70,85 50,90 30,80 C15,70 10,50 20,30 C25,20 35,15 30,20 Z", // Brain outline
    "M25,25 C35,15 65,15 75,25 C85,35 85,65 75,75 C65,85 35,85 25,75 C15,65 15,35 25,25 Z M25,50 L75,50 M50,25 L50,75", // Brain with connections
    "M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 M25,40 L45,40 M55,40 L75,40 M25,60 L45,60 M55,60 L75,60" // Neural brain
  ]
};

// Color themes for the circuit patterns
export const circuitColorThemes = {
  blue: [
    brandColors.navyBlue,
    brandColors.lightNavy,
    `${brandColors.navyBlue}90`,
    `${brandColors.lightNavy}90`,
  ],
  grayscale: [
    "#333333",
    "#666666",
    "#999999",
    "#CCCCCC",
  ],
  gradient: [
    "url(#blueGradient)",
    "url(#purpleGradient)",
    "url(#cyanGradient)",
    "url(#navyGradient)",
  ]
};

// Gradient definitions for use with the patterns
export const circuitGradients = [
  {
    id: "blueGradient",
    colors: [
      { offset: "0%", color: brandColors.navyBlue },
      { offset: "100%", color: brandColors.lightNavy },
    ],
  },
  {
    id: "purpleGradient",
    colors: [
      { offset: "0%", color: "#4A2B87" },
      { offset: "100%", color: "#6D48D7" },
    ],
  },
  {
    id: "cyanGradient",
    colors: [
      { offset: "0%", color: "#00BFFF" },
      { offset: "100%", color: "#0080FF" },
    ],
  },
  {
    id: "navyGradient",
    colors: [
      { offset: "0%", color: "#0A1F44" },
      { offset: "100%", color: "#1E3A8A" },
    ],
  },
];
