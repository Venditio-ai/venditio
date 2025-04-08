// Centralized scroll utilities for consistent scrolling across components
import { sectionConfig } from "@/config/content";
import { useLayoutStore } from "@/stores/layoutStore";

/**
 * Scroll to a specific section using the stacked card layout approach
 * @param targetId - The ID of the section to scroll to
 */
export const scrollToSection = (targetId: string) => {
  try {
    // Find the target section
    const targetSection = sectionConfig.find(
      (section) => section.id === targetId
    );
    if (!targetSection) {
      console.error(`Unknown section: ${targetId}`);
      return;
    }

    // Get the current layout mode
    // Safely access store state with try/catch to handle cases outside React context
    let isStackedLayout = false;
    try {
      const layoutStore = useLayoutStore.getState();
      isStackedLayout = layoutStore.useStackedLayout;
      console.log(
        `Scrolling to section ${targetId} in ${
          isStackedLayout ? "stacked" : "flat"
        } layout mode`
      );
    } catch (error) {
      console.log(
        `Using default flat layout mode for ${targetId} - could not access store`
      );
    }

    // For hero section, just scroll to top regardless of mode
    if (targetSection.index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Get direct reference to the target element
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      console.error(`Could not find element with ID: ${targetId}`);
      return;
    }

    // FLAT LAYOUT MODE: Direct scroll to the element with offset for navbar
    if (!isStackedLayout) {
      const rect = targetElement.getBoundingClientRect();
      // Calculate position - use element's position relative to document
      // Use a 5em offset for navbar (consistent with navbarOffset in config)
      const navbarOffset = 5 * 16; // Convert em to pixels
      const scrollTo = window.scrollY + rect.top - navbarOffset;

      console.log(
        `Flat layout: Scrolling directly to ${targetId}. Target: ${scrollTo}`
      );

      window.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: "smooth",
      });
      return;
    }

    // STACKED LAYOUT MODE: More complex positioning strategy

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
        // Use window height divided by 3 as the offset for consistent positioning
        const scrollOffset = window.innerHeight / 3;
        const scrollTo = window.scrollY + rect.top - scrollOffset;

        console.log(
          `Stacked layout: Scrolling to show ${targetId} by positioning at ${nextSection.id}. Target: ${scrollTo}`
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

      console.log(
        `Stacked layout: Scrolling to last section ${targetId}. Target: ${scrollTo}`
      );

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
  } catch (error) {
    console.error("Error in scrollToSection:", error);

    // Ultimate fallback - direct element scroll with a small offset
    try {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80; // 80px offset for navbar
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } catch (innerError) {
      console.error("Error in fallback scroll:", innerError);
    }
  }
};
