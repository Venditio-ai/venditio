// Animation variants for framer-motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInFromBottom = {
  hidden: { 
    y: 50, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      duration: 0.6 
    }
  }
};

export const slideInFromLeft = {
  hidden: { 
    x: -50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      duration: 0.6 
    }
  }
};

export const slideInFromRight = {
  hidden: { 
    x: 50, 
    opacity: 0 
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      duration: 0.6 
    }
  }
};

// Staggered animation for lists
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale effect for hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { 
    type: "spring", 
    stiffness: 300 
  }
};

// Subtle hover animation for cards
export const cardHover = {
  rest: { 
    scale: 1, 
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" 
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

// Path animation for SVGs
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { 
        type: "spring", 
        duration: 1.5, 
        bounce: 0 
      },
      opacity: { duration: 0.3 }
    }
  }
};
