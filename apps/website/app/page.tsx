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

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar is outside the stacking context */}
      <Navbar />

      {/* Main content with all stacked sections */}
      <main className="flex flex-col w-full relative z-30 bg-gradient-to-b from-white to-venditio-navy/5 overflow-visible flex-grow pb-[200vh]">
        {/* Fixed background pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>

        {/* Hero section */}
        <SectionCard
          id="hero"
          index={0}
          className="bg-transparent border-none shadow-none"
        >
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
      <div className="relative z-50 bg-venditio-navy mt-32">
        <Footer />
      </div>
    </div>
  );
}
