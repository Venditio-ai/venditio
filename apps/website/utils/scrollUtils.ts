// Centralized scroll utilities for consistent scrolling across components
import { sectionConfig } from "@/config/content";

/**
 * Scroll to a specific section using the stacked card layout approach
 * @param targetId - The ID of the section to scroll to
 */
export const scrollToSection = (targetId: string) => {
  // Find the target section
  const targetSection = sectionConfig.find(
    (section) => section.id === targetId
  );
  if (!targetSection) {
    console.error(`Unknown section: ${targetId}`);
    return;
  }

  // For hero section, just scroll to top
  if (targetSection.index === 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Strategy: scroll to the section AFTER the one we want to see
  // This forces all cards to stack properly
  const nextSectionIndex = targetSection.index + 1;
  const nextSection = sectionConfig.find(
    (section) => section.index === nextSectionIndex
  );

  if (nextSection) {
    // Get the next section's element
    const nextSectionElement = document.getElementById(nextSection.id);
    if (nextSectionElement) {
      const rect = nextSectionElement.getBoundingClientRect();
      const scrollTo = window.scrollY + rect.top - 300; // Offset to make sure we see the target section

      console.log(
        `Scrolling to show ${targetId} by positioning at ${nextSection.id}. Target: ${scrollTo}`
      );

      window.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: "smooth",
      });
      return;
    }
  }

  // Special handling for the last section
  // Check if this is the last section in our config
  const lastSection = sectionConfig[sectionConfig.length - 1];
  if (targetSection.index === lastSection.index) {
    // Scroll to the very bottom of the page to ensure all cards are fully stacked
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const scrollTo = documentHeight - window.innerHeight;

    console.log(`Scrolling to last section ${targetId}. Target: ${scrollTo}`);

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
    return;
  }

  // Fallback approach: use a fixed calculation based on section index
  const sectionHeight = window.innerHeight;
  const targetScroll = targetSection.index * sectionHeight * 0.7;

  console.log(`Fallback scroll for ${targetId}. Target: ${targetScroll}`);

  window.scrollTo({
    top: targetScroll,
    behavior: "smooth",
  });
};
