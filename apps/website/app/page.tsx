"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import Features from "../components/Features";
import Waitlist from "../components/Waitlist";
import FAQ from "../components/FAQ";
import AboutUs from "../components/AboutUs";
import Investment from "../components/Investment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionCard from "../components/SectionCard";
import { useLayoutStore } from "../stores/layoutStore";

// Debug layout indicator component
function LayoutModeIndicator() {
  // Get layout mode from store
  const { useStackedLayout, version } = useLayoutStore();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial dimensions
    updateDimensions();

    // Listen for resize
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-black/70 text-white rounded-lg p-2 text-xs pointer-events-none">
      <div>
        Mode:{" "}
        <span className="font-bold">
          {useStackedLayout ? "Stacked" : "Flat"}
        </span>
      </div>
      <div>Width: {dimensions.width}px</div>
      <div>Height: {dimensions.height}px</div>
      <div className="text-xs opacity-60">(v{version})</div>
    </div>
  );
}

export default function Home() {
  // Debug state for layout indicator
  const [showDebug, setShowDebug] = useState(false);

  // No need to set card count anymore - we're using sectionConfig length directly
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Debug indicator */}
      {showDebug && <LayoutModeIndicator />}

      {/* Navbar is outside the stacking context */}
      <Navbar />

      {/* Main content with all stacked sections */}
      <main
        className="flex flex-col w-full relative z-30 bg-gradient-to-b from-white to-venditio-navy/5 overflow-visible flex-grow"
        style={{
          paddingBottom: useLayoutStore.getState().useStackedLayout
            ? "40vh"
            : "1rem",
        }}
      >
        {/* Fixed background pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>

        {/* Hero section */}
        <SectionCard id="hero" index={0}>
          <Hero />
        </SectionCard>

        {/* Problem/Solution section */}
        <SectionCard id="problem-solution" index={1}>
          <ProblemSolution />
        </SectionCard>

        {/* Features section */}
        <SectionCard id="features" index={2}>
          <Features />
        </SectionCard>

        {/* Waitlist Form section */}
        <SectionCard id="waitlist" index={3}>
          <Waitlist />
        </SectionCard>

        {/* FAQ section */}
        <SectionCard id="faq" index={4}>
          <FAQ />
        </SectionCard>

        {/* About Us section */}
        <SectionCard id="about" index={5}>
          <AboutUs />
        </SectionCard>

        {/* Investment section */}
        <SectionCard id="investment" index={6}>
          <Investment />
        </SectionCard>
      </main>

      {/* Footer - outside the main content */}
      <div className="relative z-20 bg-venditio-navy mt-32">
        <Footer />
      </div>
    </div>
  );
}
