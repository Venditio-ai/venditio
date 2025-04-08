"use client";

import React, { useState } from 'react';
import MorphingSvg from '@/components/morphing-svg/MorphingSvg';
import CircuitAnimation from '@/components/morphing-svg/CircuitAnimation';
import DataFlowAnimation from '@/components/morphing-svg/DataFlowAnimation';
import AIWorkflowAnimation from '@/components/morphing-svg/AIWorkflowAnimation';
import { circuitPatterns, circuitColorThemes } from '@/components/morphing-svg/CircuitPatterns';
import { brandColors } from '@/config/content';

export default function SvgDemo() {
  const [selectedColor, setSelectedColor] = useState<string>(brandColors.navyBlue);
  
  // Color options for demo
  const colorOptions = [
    { name: 'Navy Blue', value: brandColors.navyBlue },
    { name: 'Light Navy', value: brandColors.lightNavy },
    { name: 'Black', value: brandColors.black },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Morphing SVG Animations</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Select Color:</h2>
        <div className="flex gap-4 mb-6">
          {colorOptions.map((option) => (
            <button
              key={option.name}
              className={`px-4 py-2 rounded-lg ${
                selectedColor === option.value
                  ? 'bg-gray-200 font-bold'
                  : 'bg-gray-100'
              }`}
              onClick={() => setSelectedColor(option.value)}
              style={{ borderColor: option.value, borderWidth: '1px' }}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-xl font-medium mb-6">AI Workflow Animation</h2>
          <div className="bg-gray-50 rounded-lg p-8 w-full flex justify-center">
            <AIWorkflowAnimation 
              primaryColor={selectedColor} 
              secondaryColor={brandColors.lightNavy}
              width={300}
              height={200} 
            />
          </div>
          <p className="text-sm opacity-70 mt-4 text-center">
            Interactive SVG that morphs between different AI workflow states.
            Click to cycle through Email, Chat, Social, and Support workflows.
            <br />
            <span className="font-medium mt-2 block">Perfect for Feature Sections</span>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-xl font-medium mb-6">Data Flow Animation</h2>
          <div className="bg-gray-50 rounded-lg p-8 w-full flex justify-center">
            <DataFlowAnimation 
              primaryColor={selectedColor}
              secondaryColor={brandColors.lightNavy}
              width={300}
              height={200}
            />
          </div>
          <p className="text-sm opacity-70 mt-4 text-center">
            Animated data flow visualization showing how Venditio connects 
            sales, marketing, and support systems into a unified workflow.
            <br />
            <span className="font-medium mt-2 block">Ideal for Problem/Solution Section</span>
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Circuit Pattern Animations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">AI Nodes</h3>
          <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center h-48">
            <CircuitAnimation
              type="aiNodes"
              colorTheme="blue"
              width={180}
              height={180}
            />
          </div>
          <p className="text-sm opacity-70 mt-3 text-center">
            Morphing polygons representing AI nodes and processors
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">Neural Paths</h3>
          <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center h-48">
            <CircuitAnimation
              type="neuralPaths"
              colorTheme="blue"
              width={180}
              height={180}
            />
          </div>
          <p className="text-sm opacity-70 mt-3 text-center">
            Neural network-like patterns that transform between states
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">Data Flows</h3>
          <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center h-48">
            <CircuitAnimation
              type="dataFlows"
              colorTheme="blue"
              width={180}
              height={180}
            />
          </div>
          <p className="text-sm opacity-70 mt-3 text-center">
            Patterns showing how data moves through unified systems
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">Binary Patterns</h3>
          <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center h-48">
            <CircuitAnimation
              type="binaryPaths"
              colorTheme="blue"
              width={180}
              height={180}
            />
          </div>
          <p className="text-sm opacity-70 mt-3 text-center">
            Code-like patterns suggesting data processing
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">Brain Patterns</h3>
          <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center h-48">
            <CircuitAnimation
              type="brainPaths"
              colorTheme="blue"
              width={180}
              height={180}
            />
          </div>
          <p className="text-sm opacity-70 mt-3 text-center">
            Brain-like shapes representing AI thinking and memory
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-lg font-medium mb-4">With Gradient</h3>
          <div className="bg-gray-50 rounded-lg p-4 w-full flex justify-center h-48">
            <CircuitAnimation
              type="brainPaths"
              useGradient={true}
              width={180}
              height={180}
            />
          </div>
          <p className="text-sm opacity-70 mt-3 text-center">
            Same animations with gradient color effects
          </p>
        </div>
      </div>

      <div className="mt-16 p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Usage Examples</h2>
        <div className="bg-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`// Import the components
import CircuitAnimation from '@/components/morphing-svg/CircuitAnimation';
import DataFlowAnimation from '@/components/morphing-svg/DataFlowAnimation';
import AIWorkflowAnimation from '@/components/morphing-svg/AIWorkflowAnimation';

// Basic usage
<CircuitAnimation />  // Default neural paths animation

// Types of circuit animations
<CircuitAnimation type="aiNodes" />
<CircuitAnimation type="neuralPaths" />
<CircuitAnimation type="dataFlows" />
<CircuitAnimation type="binaryPaths" />
<CircuitAnimation type="brainPaths" />

// Data flow between channels
<DataFlowAnimation 
  width={300}
  height={200}
  primaryColor="#0A1F44"
  secondaryColor="#1E3A8A"
/>

// AI workflow animation (clicks to change state)
<AIWorkflowAnimation 
  width={300}
  height={200}
/>

// You can also use the base component for custom SVG paths:
import MorphingSvg from '@/components/morphing-svg/MorphingSvg';

<MorphingSvg
  paths={[
    "M10,10 L90,10 L90,90 L10,90 Z", // Square
    "M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10" // Circle
  ]}
  colors={["#0A1F44", "#1E3A8A"]}
  duration={2}
/>`}
          </pre>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Recommended Use Cases for Venditio AI Website</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium text-lg">Hero Section</h3>
            <p className="opacity-80 text-sm">
              Use the <code>AIWorkflowAnimation</code> as a visual element next to the typing animation
              to show how Venditio adapts to different workflow needs.
            </p>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium text-lg">Problem/Solution Section</h3>
            <p className="opacity-80 text-sm">
              Use the <code>DataFlowAnimation</code> to visually represent how Venditio connects
              disjointed systems and creates a unified workflow.
            </p>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium text-lg">Features Section</h3>
            <p className="opacity-80 text-sm">
              Use different <code>CircuitAnimation</code> types as icons for each feature card.
              For example, use "brainPaths" for AI Insights, "dataFlows" for Workflow Automation, etc.
            </p>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium text-lg">Loading States</h3>
            <p className="opacity-80 text-sm">
              Combine these morphing SVGs with the AI-themed loading components to create
              cohesive loading experiences throughout the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
