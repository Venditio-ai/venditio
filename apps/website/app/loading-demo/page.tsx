"use client";

import React, { useState } from 'react';
import AILoading from '@/components/AILoading';
import LoadingDots from '@/components/LoadingDots';
import CodeLoader from '@/components/CodeLoader';
import { brandColors } from '@/config/content';

export default function LoadingDemo() {
  const [selectedColor, setSelectedColor] = useState<string>(brandColors.navyBlue);
  
  // Color options for demo
  const colorOptions = [
    { name: 'Navy Blue', value: brandColors.navyBlue },
    { name: 'Light Navy', value: brandColors.lightNavy },
    { name: 'Black', value: brandColors.black },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">AI-Themed Loading Components</h1>
      
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-xl font-medium mb-6">Simple Loading Dots</h2>
          <div className="bg-gray-50 rounded-lg p-8 w-full flex justify-center">
            <LoadingDots color={selectedColor} />
          </div>
          <p className="text-sm opacity-70 mt-4 text-center">
            Basic loading dots with pulsing animation - perfect for inline loading states.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-xl font-medium mb-6">Code Processing</h2>
          <div className="bg-gray-50 rounded-lg p-8 w-full flex justify-center">
            <CodeLoader color={selectedColor} />
          </div>
          <p className="text-sm opacity-70 mt-4 text-center">
            Code-like skeleton loader that mimics AI processing data.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Combined AI Loading Variants</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-xl font-medium mb-6">"Thinking" Variant</h2>
          <div className="bg-gray-50 rounded-lg p-8 w-full flex justify-center">
            <AILoading variant="thinking" color={selectedColor} />
          </div>
          <p className="text-sm opacity-70 mt-4 text-center">
            Pulsing animation that suggests an AI "thinking" or processing information.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-xl font-medium mb-6">"Processing" Variant</h2>
          <div className="bg-gray-50 rounded-lg p-8 w-full flex justify-center">
            <AILoading variant="processing" color={selectedColor} />
          </div>
          <p className="text-sm opacity-70 mt-4 text-center">
            Advanced loading state that combines code processing with pulsing animation.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-xl font-medium mb-6 text-center">Different Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-4">Small</h3>
            <div className="bg-gray-50 rounded-lg p-6 w-full flex justify-center">
              <AILoading variant="thinking" color={selectedColor} size="sm" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-4">Medium (Default)</h3>
            <div className="bg-gray-50 rounded-lg p-6 w-full flex justify-center">
              <AILoading variant="thinking" color={selectedColor} size="md" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium mb-4">Large</h3>
            <div className="bg-gray-50 rounded-lg p-6 w-full flex justify-center">
              <AILoading variant="thinking" color={selectedColor} size="lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Usage Examples</h2>
        <div className="bg-gray-100 p-6 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`// Import the AILoading component
import AILoading from '@/components/AILoading';

// Basic usage
<AILoading />  // Uses "thinking" variant by default

// Other variants
<AILoading variant="dots" />
<AILoading variant="code" />
<AILoading variant="thinking" />
<AILoading variant="processing" />

// Custom text
<AILoading text="Generating response..." />

// Custom color and size
<AILoading 
  variant="processing" 
  color="#1E40AF" 
  size="lg" 
/>

// You can also use the base components directly
import LoadingDots from '@/components/LoadingDots';
import CodeLoader from '@/components/CodeLoader';

<LoadingDots />
<CodeLoader lines={8} width="300px" />`}
          </pre>
        </div>
      </div>
    </div>
  );
}
