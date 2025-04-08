"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { brandColors } from "@/config/content";

interface HeroCircuitAnimationProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  textColor?: string;
  glowIntensity?: number;
  animationSpeed?: number;
}

/**
 * HeroCircuitAnimation - A complex data flow visualization designed specifically
 * for the hero section, showing how Venditio AI unifies multiple pipelines.
 */
const HeroCircuitAnimation: React.FC<HeroCircuitAnimationProps> = ({
  className,
  width = "100%",
  height = "100%",
  primaryColor = "#ffffff",
  secondaryColor = "#ffffff",
  accentColor = "#64b5f6",
  backgroundColor = "transparent",
  textColor = "#ffffff",
}) => {
  // Define colors for the circuit
  const customBlue = brandColors.lightNavy;
  const customGreen = "#2ecc71";

  // Define pipeline icons using Lucide SVG paths
  const iconPaths = {
    // Banknote icon
    sales:
      "M1 6V5.5A3.5 3.5 0 0 1 4.5 2h15A3.5 3.5 0 0 1 23 5.5v8a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 1 13.5V13",
    // Megaphone icon
    marketing: "M3 11l18-5v10L3 11zm3-5v10M6 6l10 5-10 5",
    // Headphones icon
    support:
      "M3 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a10 10 0 0 1 20 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2",
    // Users icon
    social:
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    // Mail icon
    email:
      "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",
  };

  // Define processing node icons using Lucide SVG paths
  const processingIconPaths = {
    // Cpu icon
    process:
      "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 0v16h12V4H6zm3 6h6m-6 4h6m-3-7v10",
    // Merge icon
    merge:
      "M8 7v8a4 4 0 0 0 4 4h4M6 17l-4 4 4 4m10-4h4a4 4 0 0 0 4-4V7M22 17l4 4-4 4",
    // Combine/unify icon
    unify:
      "M8 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M2 8h8M6 5v6m7-8h5l4 4M17 3v8h-8",
    // Link/connect icon
    connect:
      "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  };

  // Data nodes representing different pipelines
  const pipelines = [
    {
      id: "sales",
      label: "SALES",
      x: 110,
      y: 70,
      size: 24,
      iconPath: iconPaths.sales,
    },
    {
      id: "marketing",
      label: "MARKETING",
      x: 140,
      y: 150,
      size: 24,
      iconPath: iconPaths.marketing,
    },
    {
      id: "support",
      label: "SUPPORT",
      x: 100,
      y: 320,
      size: 24,
      iconPath: iconPaths.support,
    },
    {
      id: "social",
      label: "SOCIAL",
      x: 40,
      y: 260,
      size: 20,
      iconPath: iconPaths.social,
    },
    {
      id: "email",
      label: "EMAIL",
      x: 40,
      y: 180,
      size: 20,
      iconPath: iconPaths.email,
    },
  ];

  // Processing nodes in the circuit
  const processingNodes = [
    {
      id: "process",
      label: "PROCESS",
      x: 200,
      y: 100,
      size: 32,
      iconPath: processingIconPaths.process,
    },
    {
      id: "merge",
      label: "MERGE",
      x: 220,
      y: 260,
      size: 32,
      iconPath: processingIconPaths.merge,
    },
    {
      id: "unify",
      label: "UNIFY",
      x: 280,
      y: 180,
      size: 35,
      iconPath: processingIconPaths.unify,
    },
    {
      id: "connect",
      label: "CONNECT",
      x: 160,
      y: 220,
      size: 30,
      iconPath: processingIconPaths.connect,
    },
  ];

  // Define the central hub - Venditio
  const centralHub = {
    x: 370, // Adjusted position for better connection
    y: 180,
    size: 40,
    label: "VENDITIO",
    sublabel: "UNIFIED WORKFLOW", // Descriptive sublabel
  };

  // All animations now use direct animate and transition props
  // No need for useEffect or animation controls

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ width, height, background: backgroundColor }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 30 450 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit board background pattern */}
        <g className="circuit-background">
          {/* Horizontal circuit lines */}
          {[60, 120, 180, 240, 300].map((y, i) => (
            <motion.path
              key={`h-line-${i}`}
              d={`M50 ${y} H400`}
              stroke={`${primaryColor}15`}
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Vertical circuit lines */}
          {[80, 160, 240, 320, 400].map((x, i) => (
            <motion.path
              key={`v-line-${i}`}
              d={`M${x} 50 V340`}
              stroke={`${primaryColor}15`}
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.1 + i * 0.2,
              }}
            />
          ))}

          {/* Connection points */}
          {[
            { x: 80, y: 60 },
            { x: 80, y: 120 },
            { x: 80, y: 180 },
            { x: 80, y: 240 },
            { x: 80, y: 300 },
            { x: 160, y: 60 },
            { x: 160, y: 120 },
            { x: 160, y: 180 },
            { x: 160, y: 240 },
            { x: 160, y: 300 },
            { x: 240, y: 60 },
            { x: 240, y: 120 },
            { x: 240, y: 180 },
            { x: 240, y: 240 },
            { x: 240, y: 300 },
            { x: 320, y: 60 },
            { x: 320, y: 120 },
            { x: 320, y: 180 },
            { x: 320, y: 240 },
            { x: 320, y: 300 },
          ].map((point, i) => (
            <motion.circle
              key={`connection-${i}`}
              cx={point.x}
              cy={point.y}
              r={2}
              fill={`${primaryColor}30`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1 + i * 0.05,
              }}
            />
          ))}
        </g>

        {/* Data pipelines - Nodes */}
        {pipelines.map((node, index) => (
          <g key={`pipeline-${node.id}`} className="pipeline-node">
            {/* Glow effect */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size + 10}
              fill={`${accentColor}20`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
              }}
            />

            {/* Icon for pipeline nodes */}
            <motion.g
              transform={`translate(${node.x}, ${node.y})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
            >
              <g transform={`translate(-12, -12) scale(1)`}>
                <path
                  d={node.iconPath}
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </motion.g>

            {/* Node label with enhanced contrast and positioning */}
            <motion.text
              x={node.x || 0}
              y={node.y + 35 || 0}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ffffff"
              fontSize={node?.size && node.size > 25 ? "10" : "9"}
              fontWeight="bold"
              style={{
                filter: "drop-shadow(0px 0px 4px rgba(0,0,0,1))",
                textShadow: "0px 0px 3px rgba(0,0,0,1)",
                letterSpacing: "0.8px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {node.label || ""}
            </motion.text>
          </g>
        ))}

        {/* Define glowing path gradients for edges */}
        <defs>
          <linearGradient
            id="pipelineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.4" />
            <stop offset="50%" stopColor={secondaryColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="mergeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
            <stop offset="50%" stopColor={accentColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="finalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.6" />
            <stop offset="50%" stopColor={accentColor} stopOpacity="1" />
            <stop offset="100%" stopColor={customBlue} stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={customBlue} stopOpacity="0.7" />
            <stop offset="50%" stopColor={customGreen} stopOpacity="1" />
            <stop offset="100%" stopColor={customBlue} stopOpacity="0.7" />
          </linearGradient>

          {/* Filter for the glow effect */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Enhanced glow filter for brand color edges */}
          <filter id="brandGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.2  0 1 0 0 0.2  0 0 1 0 0.8  0 0 0 1 0"
            />
          </filter>
        </defs>

        {/* Data flow paths - Primary connections from pipelines to merging nodes with flow animations */}
        <g className="pipeline-paths">
          {/* Pipeline to processing node connections */}
          {[
            // Sales -> Process
            `M${pipelines[0].x + 15} ${pipelines[0].y} C${
              pipelines[0].x + 50
            } ${pipelines[0].y - 30}, ${processingNodes[0].x - 50} ${
              processingNodes[0].y - 30
            }, ${processingNodes[0].x - 8} ${processingNodes[0].y}`,
            // Marketing -> Process
            `M${pipelines[1].x + 15} ${pipelines[1].y} C${
              pipelines[1].x + 40
            } ${pipelines[1].y - 20}, ${processingNodes[0].x - 40} ${
              processingNodes[0].y + 20
            }, ${processingNodes[0].x - 8} ${processingNodes[0].y}`,
            // Support -> Merge
            `M${pipelines[2].x + 15} ${pipelines[2].y} C${
              pipelines[2].x + 40
            } ${pipelines[2].y + 10}, ${processingNodes[1].x - 40} ${
              processingNodes[1].y - 10
            }, ${processingNodes[1].x - 8} ${processingNodes[1].y}`,
            // Social -> Connect
            `M${pipelines[3].x + 15} ${pipelines[3].y} C${
              pipelines[3].x + 30
            } ${pipelines[3].y - 40}, ${processingNodes[3].x - 30} ${
              processingNodes[3].y - 40
            }, ${processingNodes[3].x - 8} ${processingNodes[3].y}`,
            // Email -> Connect
            `M${pipelines[4].x + 15} ${pipelines[4].y} C${
              pipelines[4].x + 30
            } ${pipelines[4].y - 20}, ${processingNodes[3].x - 30} ${
              processingNodes[3].y - 20
            }, ${processingNodes[3].x - 8} ${processingNodes[3].y}`,
          ].map((path, index) => (
            <motion.path
              key={`pipeline-to-processing-${index}`}
              d={path}
              fill="none"
              stroke={accentColor}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{
                pathLength: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.5 + index * 0.1,
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.5 + index * 0.1,
                },
              }}
            />
          ))}

          {/* Processing node to central hub connections */}
          {[
            // Process -> Hub
            `M${processingNodes[0].x + 8} ${processingNodes[0].y} C${
              processingNodes[0].x + 40
            } ${processingNodes[0].y + 20}, ${centralHub.x - 50} ${
              centralHub.y - 10
            }, ${centralHub.x - 15} ${centralHub.y}`,
            // Merge -> Hub
            `M${processingNodes[1].x + 8} ${processingNodes[1].y} C${
              processingNodes[1].x + 40
            } ${processingNodes[1].y - 20}, ${centralHub.x - 50} ${
              centralHub.y + 10
            }, ${centralHub.x - 15} ${centralHub.y + 5}`,
            // Unify -> Hub
            `M${processingNodes[2].x + 8} ${processingNodes[2].y} C${
              processingNodes[2].x + 30
            } ${processingNodes[2].y}, ${centralHub.x - 50} ${
              centralHub.y - 5
            }, ${centralHub.x - 15} ${centralHub.y - 5}`,
            // Connect -> Unify
          ].map((path, index) => (
            <motion.path
              key={`processing-to-central-${index}`}
              d={path}
              fill="none"
              stroke={primaryColor}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{
                pathLength: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: 1 + index * 0.2,
                },
                opacity: {
                  duration: 0.3,
                  delay: 1 + index * 0.2,
                },
              }}
            />
          ))}
        </g>

        {/* Merger node connections with more prominent flow effects */}
        <g className="merger-paths">
          {/* Process to Unify */}
          <motion.path
            d={`M${processingNodes[0].x} ${processingNodes[0].y} Q${
              processingNodes[0].x + 30
            } ${processingNodes[0].y + 20}, ${processingNodes[2].x} ${
              processingNodes[2].y
            }`}
            stroke="url(#mergeGradient)"
            strokeWidth={2.5}
            fill="none"
            initial={{ pathLength: 0, opacity: 0.7 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2, repeat: Infinity }}
          />

          <motion.path
            d={`M${processingNodes[0].x} ${processingNodes[0].y} Q${
              processingNodes[0].x + 30
            } ${processingNodes[0].y + 20}, ${processingNodes[2].x} ${
              processingNodes[2].y
            }`}
            stroke={accentColor}
            strokeWidth={3}
            strokeLinecap="round"
            fill="none"
            strokeDasharray="3 20"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              pathLength: { duration: 1.2, delay: 2, repeat: Infinity },
              opacity: { duration: 0.5, delay: 2, repeat: Infinity },
              pathOffset: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 3.4,
              },
            }}
            style={{ opacity: 0.8 }}
          />

          {/* Merge to Unify */}
          <motion.path
            d={`M${processingNodes[1].x} ${processingNodes[1].y} Q${
              processingNodes[1].x + 30
            } ${processingNodes[1].y - 20}, ${processingNodes[2].x} ${
              processingNodes[2].y
            }`}
            stroke="url(#mergeGradient)"
            strokeWidth={2.5}
            fill="none"
            initial={{ pathLength: 0, opacity: 0.7 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.2, repeat: Infinity }}
          />

          <motion.path
            d={`M${processingNodes[1].x} ${processingNodes[1].y} Q${
              processingNodes[1].x + 30
            } ${processingNodes[1].y - 20}, ${processingNodes[2].x} ${
              processingNodes[2].y
            }`}
            stroke={accentColor}
            strokeWidth={3}
            strokeLinecap="round"
            fill="none"
            strokeDasharray="3 20"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              pathLength: { duration: 1.2, delay: 2.2, repeat: Infinity },
              pathOffset: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 3.6,
              },
            }}
            style={{ opacity: 0.8 }}
          />

          {/* Connect to Unify */}
          <motion.path
            d={`M${processingNodes[3].x} ${processingNodes[3].y} C${
              processingNodes[3].x + 40
            } ${processingNodes[3].y}, ${processingNodes[3].x + 60} ${
              processingNodes[3].y - 20
            }, ${processingNodes[2].x} ${processingNodes[2].y}`}
            stroke="url(#mergeGradient)"
            strokeWidth={2.5}
            fill="none"
            initial={{ pathLength: 0, opacity: 0.7 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.4, repeat: Infinity }}
          />

          <motion.path
            d={`M${processingNodes[3].x} ${processingNodes[3].y} C${
              processingNodes[3].x + 40
            } ${processingNodes[3].y}, ${processingNodes[3].x + 60} ${
              processingNodes[3].y - 20
            }, ${processingNodes[2].x} ${processingNodes[2].y}`}
            stroke={accentColor}
            strokeWidth={3}
            strokeLinecap="round"
            fill="none"
            strokeDasharray="3 20"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              pathLength: { duration: 1.2, delay: 2.4, repeat: Infinity },
              pathOffset: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 3.8,
              },
            }}
            style={{ opacity: 0.8 }}
          />

          {/* Final connection to Venditio hub with special glow and animation - adjusted endpoint */}
          <motion.path
            d={`M${processingNodes[2]?.x || 250} ${
              processingNodes[2]?.y || 180
            } C${(processingNodes[2]?.x || 250) + 20} ${
              processingNodes[2]?.y || 180
            }, ${(centralHub.x || 300) - 20} ${(centralHub.y || 180) - 5}, ${
              (centralHub.x || 300) - 5
            } ${centralHub.y || 180}`}
            stroke="url(#finalGradient)"
            strokeWidth={3.5}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 3, repeat: Infinity }}
          />

          <motion.path
            d={`M${processingNodes[2]?.x || 250} ${
              processingNodes[2]?.y || 180
            } C${(processingNodes[2]?.x || 250) + 20} ${
              processingNodes[2]?.y || 180
            }, ${(centralHub.x || 300) - 20} ${(centralHub.y || 180) - 5}, ${
              (centralHub.x || 300) - 5
            } ${centralHub.y || 180}`}
            stroke={customBlue}
            strokeWidth={4}
            strokeLinecap="round"
            fill="none"
            strokeDasharray="4 10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              pathOffset: 1,
            }}
            transition={{
              opacity: { duration: 1.5, delay: 3, repeat: Infinity },
              pathOffset: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 3.2,
              },
            }}
            style={{ opacity: 0.8 }}
          />
        </g>

        {/* Processing/merge nodes */}
        {processingNodes.map((node, index) => (
          <g key={`processing-${node.id}`} className="processing-node">
            {/* Glow effect behind processing nodes */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={`${primaryColor}15`}
              initial={{ scale: 1, opacity: 0.1 }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2,
                times: [0, 0.5, 1],
                delay: index * 0.3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />

            {/* Icon for the processing node */}
            <motion.g
              transform={`translate(${node.x}, ${node.y})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <g transform={`translate(-12, -12) scale(1)`}>
                <path
                  d={node.iconPath}
                  fill="none"
                  stroke={`${primaryColor}`}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </motion.g>

            {/* Node label in center with enhanced contrast */}
            <motion.text
              x={node.x}
              y={node.y + 25}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#ffffff"
              fontSize="10"
              fontWeight="bold"
              style={{
                filter: "drop-shadow(0px 0px 4px rgba(0,0,0,1))",
                textShadow: "0px 0px 3px rgba(0,0,0,1)",
                letterSpacing: "0.8px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        {/* Data flow particles - Email */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${pipelines[4].x + 8} ${pipelines[4].y} C${
              pipelines[4].x + 30
            } ${pipelines[4].y - 20}, ${processingNodes[3].x - 30} ${
              processingNodes[3].y - 20
            }, ${processingNodes[3].x - 8} ${processingNodes[3].y}`}
            dur="2.5s"
            begin="0.4s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Unify to Hub flow */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${processingNodes[2].x + 8} ${processingNodes[2].y} C${
              processingNodes[2].x + 30
            } ${processingNodes[2].y}, ${centralHub.x - 50} ${
              centralHub.y - 5
            }, ${centralHub.x - 15} ${centralHub.y - 5}`}
            dur="2.5s"
            begin="1.2s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Data flow particles - Sales */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${pipelines[0].x + 8} ${pipelines[0].y} C${
              pipelines[0].x + 50
            } ${pipelines[0].y - 30}, ${processingNodes[0].x - 50} ${
              processingNodes[0].y - 30
            }, ${processingNodes[0].x - 8} ${processingNodes[0].y}`}
            dur="2.5s"
            begin="0.2s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Data flow particles - Marketing */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${pipelines[1].x + 8} ${pipelines[1].y} C${
              pipelines[1].x + 40
            } ${pipelines[1].y - 20}, ${processingNodes[0].x - 40} ${
              processingNodes[0].y + 20
            }, ${processingNodes[0].x - 8} ${processingNodes[0].y}`}
            dur="2.5s"
            begin="0.5s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Second flow - Marketing to Hub */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${processingNodes[0].x + 8} ${processingNodes[0].y} C${
              processingNodes[0].x + 40
            } ${processingNodes[0].y + 20}, ${centralHub.x - 50} ${
              centralHub.y - 10
            }, ${centralHub.x - 15} ${centralHub.y}`}
            dur="2.5s"
            begin="0.8s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Data flow particles - Support */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${pipelines[2].x + 8} ${pipelines[2].y} C${
              pipelines[2].x + 40
            } ${pipelines[2].y + 10}, ${processingNodes[1].x - 40} ${
              processingNodes[1].y - 10
            }, ${processingNodes[1].x - 8} ${processingNodes[1].y}`}
            dur="2.5s"
            begin="0.6s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Second flow - Support to Hub */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${processingNodes[1].x + 8} ${processingNodes[1].y} C${
              processingNodes[1].x + 40
            } ${processingNodes[1].y - 20}, ${centralHub.x - 50} ${
              centralHub.y + 10
            }, ${centralHub.x - 15} ${centralHub.y + 5}`}
            dur="2.5s"
            begin="1.1s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Data flow particles - Social */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${pipelines[3].x + 8} ${pipelines[3].y} C${
              pipelines[3].x + 30
            } ${pipelines[3].y - 40}, ${processingNodes[3].x - 30} ${
              processingNodes[3].y - 40
            }, ${processingNodes[3].x - 8} ${processingNodes[3].y}`}
            dur="2.5s"
            begin="0.3s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Connect to Unify flow */}
        <motion.circle
          cx="0"
          cy="0"
          r={4}
          fill={accentColor}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.6, 1, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <animateMotion
            path={`M${processingNodes[3].x + 8} ${processingNodes[3].y} C${
              processingNodes[3].x + 40
            } ${processingNodes[3].y - 10}, ${processingNodes[2].x - 40} ${
              processingNodes[2].y + 10
            }, ${processingNodes[2].x - 8} ${processingNodes[2].y}`}
            dur="2.5s"
            begin="0.9s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="linear"
          />
        </motion.circle>

        {/* Glowing effect around central hub */}
        <motion.circle
          cx={centralHub.x}
          cy={centralHub.y}
          r={centralHub.size + 15}
          fill={`${accentColor}40`}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />

        {/* Central Venditio Hub with gradient fill */}
        <defs>
          <radialGradient
            id="venditioGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor={`${primaryColor}40`} />
            <stop offset="90%" stopColor={`${primaryColor}15`} />
          </radialGradient>
        </defs>

        <motion.circle
          cx={centralHub.x}
          cy={centralHub.y}
          r={centralHub.size}
          fill="url(#venditioGradient)"
          stroke={primaryColor}
          strokeWidth={2.5}
          animate={{
            scale: [1, 1.05, 1],
            strokeWidth: [2.5, 3.5, 2.5],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />

        {/* Central hub VENDITIO label */}
        <motion.text
          x={centralHub.x}
          y={centralHub.y + 80}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={customBlue}
          fontSize="14"
          fontWeight="bold"
          style={{ filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.8))" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          {centralHub.sublabel}
        </motion.text>

        <motion.path
          d="M180 30 V70 M220 30 V70 M260 30 V70"
          stroke={`${primaryColor}30`}
          strokeWidth={1.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.6 }}
        />

        <motion.path
          d="M180 350 V310 M220 350 V310 M260 350 V310"
          stroke={`${primaryColor}30`}
          strokeWidth={1.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.7 }}
        />

        {/* Venditio Logo in center */}
        <motion.image
          x={centralHub.x - 30}
          y={centralHub.y - 28}
          width="60"
          height="56"
          href="/logo/logo_no_background.png"
          preserveAspectRatio="xMidYMid meet"
          style={{ filter: "drop-shadow(0px 0px 5px rgba(255,255,255,0.5))" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        />
      </svg>
    </div>
  );
};

export default HeroCircuitAnimation;
