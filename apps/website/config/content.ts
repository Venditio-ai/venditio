// /home/baran/Desktop/venditio_ai/apps/website/config/content.ts

export const navbarContent = {
  logoText: "Venditio AI",
  navLinks: [
    { name: "Problem & Solution", href: "#problem-solution" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
    { name: "About", href: "#about" },
    { name: "Investment", href: "#investment" },
  ],
  ctaButtonText: "Join the Waitlist",
  ctaButtonLink: "#waitlist",
  mobileMenuButtonText: "Menu",
};

// Add configurations for other components here later
export const heroContent = {
  // First line alternating headlines for typing animation cycle
  alternateHeadlines: [
    "Customer workflows",
    "Sales pipelines",
    "Outreach activities",
  ],
  headlinePrefix: "with AI, ",
  headlineHighlight: "unified.",
  subheadline:
    "Unify sales, marketing, and support with real-time, data-powered insights that transform every customer interaction into opportunity.",
  ctaButtonText: "Join the Waitlist",
  ctaButtonLink: "#waitlist",
  visualAltText: "Venditio AI Product Mockup", // Added alt text for placeholder
};

// Configuration for the Problem/Solution section
export const problemSolutionContent = {
  problem: {
    title: "The Problem",
    description:
      "Businesses today struggle with disconnected multi-channel communication and fragmented customer data. Teams waste time switching between tools, losing valuable context and insights.",
    points: [
      {
        title: "Disconnected Systems",
        description:
          "Sales, marketing, and support teams operate in silos with separate tools and data sources. This leads to fragmented customer data and a lack of context awareness.",
      },
      {
        title: "Lost Context",
        description:
          "Customer interactions across channels lack unified history, leading to repetitive conversations.",
      },
      {
        title: "Manual Processes",
        description:
          "Teams spend hours on repetitive tasks instead of building meaningful customer relationships.",
      },
      {
        title: "Disconnected Channels",
        description:
          "Customer interactions across channels lack unified history, leading to repetitive conversations without automation.",
      },
    ],
  },
  solution: {
    title: "Our Solution",
    description:
      "Venditio AI unifies customer workflows across sales, marketing, and support with intelligent agents that understand context, automate repetitive tasks, and provide actionable insights.",
    points: [
      {
        title: "Merged Pipelines",
        description:
          "Merges sales, marketing, and support pipelines into a single, unified workflow that streamlines customer interactions and provides consistent insights.",
      },
      {
        title: "Unified Knowledge Base",
        description:
          "Centralize all customer data and interactions for complete context awareness.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks and processes to free up your team's valuable time.",
      },
      {
        title: "Omnichannel AI Agents",
        description:
          "Seamlessly handle customer interactions across all communication channels using our multi-lingual AI agents.",
      },
    ],
  },
};

// Configuration for the Features section
export const featuresContent = {
  title: "Key Features",
  subtitle: "Everything you need to streamline customer interactions with AI",
  features: [
    {
      title: "Omnichannel AI Agents",
      description:
        "Intelligent agents that handle customer conversations across email, chat, phone call, social media, and more with context-awareness and personalization.",
      icon: "🤖",
    },
    {
      title: "Persistent Memory",
      description:
        "Never lose context with a unified customer history that remembers all interactions regardless of pipeline, channel or time passed.",
      icon: "🧠",
    },
    {
      title: "Centralized Knowledge Base",
      description:
        "A single source of truth for all your product, customer, and company information, automatically referenced during conversations.",
      icon: "📚",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and processes across your customer journey with customizable workflows and triggers.",
      icon: "⚙️",
    },
    {
      title: "AI Insights",
      description:
        "Get actionable intelligence from customer interactions, including sentiment analysis, campaign insights, and intent detection.",
      icon: "📊",
    },
    {
      title: "Seamless Integrations",
      description:
        "Connect with your existing tools including CRM (Salesforce, HubSpot, etc.), marketing platforms, support systems, and communication channels.",
      icon: "🔄",
    },
  ],
};

// Waitlist form content
export const waitlistContent = {
  title: "Join Our Waitlist",
  subtitle:
    "Be among the first to experience Venditio AI and revolutionize your customer pipelines.",
  buttonText: "Join Waitlist",
  processingText: "Processing your request...",
  successTitle: "Thank You for joining our waitlist!",
  successMessage:
    "You've been added to our waitlist. We'll notify you when we're ready to onboard new users.",
  privacyNotice:
    "We respect your privacy and will never share your information.",
};

// FAQ content
export const faqContent = {
  title: "Frequently Asked Questions",
  subtitle:
    "Find answers to common questions about Venditio AI and how it can transform your customer workflows.",
  items: [
    {
      question: "What is Venditio AI?",
      answer:
        "Venditio AI is a cloud platform that uses AI agents to unify and automate customer workflows across sales, marketing, and support. Our platform helps businesses create seamless customer experiences by connecting communication channels and providing unified insights.",
    },
    {
      question: "How does the AI agent technology work?",
      answer:
        "Our AI agents use natural language processing and machine learning to understand customer queries across multiple channels. They maintain context through persistent memory, can use multiple tools, access a centralized knowledge base for consistent information, and can perform automated workflows to resolve issues or escalate to human agents when necessary.",
    },
    {
      question: "What channels does Venditio support?",
      answer:
        "Venditio supports email, chat, social media messaging, voice, and SMS. Our omnichannel approach ensures that customers receive consistent experiences regardless of how they choose to interact with your business.",
    },
    {
      question: "How can Venditio improve my sales and marketing efforts?",
      answer:
        "Venditio streamlines lead generation, qualification, and nurturing through automated workflows. The platform provides AI-powered insights from customer interactions to optimize campaigns and sales strategies using automated pipelines. Plus, our persistent memory ensures no customer context is lost between touchpoints.",
    },
    {
      question: "Can Venditio integrate with my existing tools?",
      answer:
        "Yes, Venditio is designed to integrate with your existing CRM (Salesforce, HubSpot, etc.), support desk, marketing tools, and other systems. We offer a range of pre-built integrations and APIs for custom connections to create a unified workflow ecosystem.",
    },
    {
      question: "When will Venditio be available?",
      answer:
        "Venditio is currently in development and will be available to early access users soon. Join our waitlist to be among the first to experience Venditio AI and revolutionize your customer workflows.",
    },
  ],
};

// About Us content
export const aboutUsContent = {
  title: "Meet Our Team",
  subtitle:
    "A passionate group of AI and customer experience experts on a mission to transform how businesses engage with customers.",
  teamMembers: [
    {
      name: "Andreas Andersen",
      title: "Co-Founder & CEO",
      bio: "Background in Sales, Marketing & AI automation",
      imgSrc: "/images/team/andreas_andersen.webp",
      linkedIn: "https://www.linkedin.com/in/anders-andersen-28925833b",
    },
    {
      name: "Baran Nama",
      title: "Co-Founder & CTO",
      bio: "Ex-Apple engineer, background as Software and AI engineer",
      imgSrc: "/images/team/baran_nama.webp",
      linkedIn: "https://www.linkedin.com/in/baran-nama",
    },
  ],
};

// Investment content
export const investmentContent = {
  title: "Investment",
  subtitle:
    "We are actively looking for investors to support our growth and development. Currently, we are seeking for seed funding.",
  investments: [],
  resources: [
    {
      name: "Seed Pitch Deck (EN)",
      link: "https://drive.google.com/file/d/1bnCk9N2I6zRJ7ehYGX6lQxi0JhKxsCmq/view?usp=drive_link",
    },
    {
      name: "Seed Pitch Deck (ES)",
      link: "https://drive.google.com/file/d/13KI59Wa2fWcFEkw4y-0subAitg35ctr-/view?usp=sharing",
    },
  ],
};

// Footer content
export const footerContent = {
  companyInfo: {
    name: "Venditio AI",
    tagline: "Transforming customer workflows with AI",
    description:
      "Unifying sales, marketing, and support into a seamless customer experience platform powered by artificial intelligence.",
    copyright: ` ${new Date().getFullYear()} Venditio AI. All rights reserved.`,
  },
  links: [
    {
      title: "Product",
      items: [
        { name: "Features", href: "#features" },
        { name: "Use Cases", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", href: "#" },
        { name: "Support", href: "#" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "GitHub", href: "#", icon: "github" },
    { name: "Instagram", href: "#", icon: "instagram" },
  ],
  legalLinks: [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

// Venditio brand colors - centralized color palette
export const brandColors = {
  white: "#FFFFFF",
  navyBlue: "#0A1F44",
  lightNavy: "#1E3A8A",
  gray: "#EEEEEE",
  lightGray: "#F9FAFB",
  black: "#000000",
  transparent: "transparent",
};

// Particle background configuration - optimized for performance
export const particleConfig = {
  id: "tsparticles",
  enabled: true,
  interactive: true, // Disable interactivity to improve performance
  backgroundColor: "transparent",
  zIndex: -1000, // Very low z-index to ensure it's behind everything

  // Particle appearance - reduced count and simplified
  particleColor: `${brandColors.navyBlue}40`, // Lower opacity
  lineColor: `${brandColors.lightNavy}30`, // Lower opacity
  particleCount: 50, // Significantly reduced particle count
  particleOpacity: {
    value: 1,
    random: true,
    min: 0.5,
    anim: {
      enable: false, // Disable animation to improve performance
      speed: 0,
    },
  },
  particleSize: {
    value: 2, // Smaller particles
    random: true,
    min: 0.5,
    anim: {
      enable: true, // Disable animation to improve performance
      speed: 0,
    },
  },

  // Line connections - simplified
  lineLinked: {
    enable: true,
    distance: 100, // Increased distance means fewer connections
    opacity: 0.5, // Lower opacity
    width: 1, // Thinner lines
  },

  // Movement - slowed down
  moveSpeed: 0.5, // Slower movement
  moveDirection: "none",
  moveRandom: true,

  // Interactivity - disabled by default but kept in config
  hoverMode: "grab",
  hoverDistance: 6.25, // 100px converted to em (100px ≈ 6.25em)
  clickMode: "push",
  clickParticles: 2, // Reduced particles added on click
};

// Shadow and border settings - consistent styling across components
export const styleSettings = {
  // Shadows
  defaultShadow: "0 0.25em 0.375em rgba(0, 0, 0, 0.1)",
  hoverShadow: "0 0.5em 0.75em -0.25em rgba(0, 0, 0, 0.15)",
  deepShadow:
    "0 0.625em 0.938em -0.188em rgba(0, 0, 0, 0.1), 0 0.25em 0.375em -0.125em rgba(0, 0, 0, 0.05)",

  // Borders
  borderWidth: "1px",
  borderRadius: "rounded-xl",

  // Animations
  transitionSpeed: "0.2s",
  hoverScale: 1.01,
  heroHoverScale: 1.005,

  // Card dimensions
  cardWidth: "85vw", // Width of cards using viewport width
  maxCardWidth: "110vw", // Maximum width for cards also using viewport width

  // Spacing
  sectionSpacing: "h-[5vh]", // Space after last section
  cardSpacing: 2, // Spacing between stacked cards in em

  // Stack behavior
  navbarOffset: 5, // Offset from top in em for the first card (below navbar)

  // Responsive layout settings
  responsive: {
    navbarHeightOffset: 6.25, // Height offset for navbar in em (100px ≈ 6.25em)
    safetyMarginFactor: 1.5, // Extra height margin to prevent content trimming (50%)
    mobileBreakpoint: 75, // Width breakpoint in em (768px ≈ 48em)
    resizeThrottleMs: 150, // Throttle time in ms for resize events
    initialLayoutCheckDelayMs: 200, // Delay before initial layout check
  },

  // Footer
  footerHeight: "2rem", // Footer height in rem
};

// Tailwind class mappings
export const twClasses = {
  borderWhite: "border-white",
  shadowBlack: "bg-black/5",
};

// Centralized section configuration with white backgrounds and consistent styling
export const sectionConfig = [
  {
    id: "hero",
    index: 0,
    name: "Hero",
    cardHeight: 56.25, // Height in em (1000px ≈ 62.5em)
    borderColor: twClasses.borderWhite,
    hoverBorderColorHex: brandColors.navyBlue,
    shadowColor: twClasses.shadowBlack,
    bgColorHex: brandColors.white,
    isLastSection: false,
  },
  {
    id: "problem-solution",
    index: 1,
    name: "Problem & Solution",
    cardHeight: 56.25, // Height in em (800px ≈ 50em)
    borderColor: twClasses.borderWhite,
    hoverBorderColorHex: brandColors.navyBlue,
    shadowColor: twClasses.shadowBlack,
    bgColorHex: brandColors.white,
    isLastSection: false,
  },
  {
    id: "features",
    index: 2,
    name: "Features",
    cardHeight: 56.25, // Height in em (900px ≈ 56.25em)
    borderColor: twClasses.borderWhite,
    hoverBorderColorHex: brandColors.navyBlue,
    shadowColor: twClasses.shadowBlack,
    bgColorHex: brandColors.white,
    isLastSection: false,
  },
  {
    id: "waitlist",
    index: 3,
    name: "Waitlist",
    cardHeight: 56.25, // Height in em (900px ≈ 56.25em)
    borderColor: twClasses.borderWhite,
    hoverBorderColorHex: brandColors.navyBlue,
    shadowColor: twClasses.shadowBlack,
    bgColorHex: brandColors.white,
    isLastSection: false,
  },
  {
    id: "faq",
    index: 4,
    name: "FAQ",
    cardHeight: 50, // Height in em (800px ≈ 50em)
    borderColor: twClasses.borderWhite,
    hoverBorderColorHex: brandColors.navyBlue,
    shadowColor: twClasses.shadowBlack,
    bgColorHex: brandColors.white,
    isLastSection: false,
  },
  {
    id: "about",
    index: 5,
    name: "About",
    cardHeight: 56.25, // Height in em (900px ≈ 56.25em)
    borderColor: twClasses.borderWhite,
    hoverBorderColorHex: brandColors.navyBlue,
    shadowColor: twClasses.shadowBlack,
    bgColorHex: brandColors.white,
    isLastSection: false,
  },
  {
    id: "investment",
    index: 6,
    name: "Investment",
    cardHeight: 25, // Height in em (400px ≈ 25em)
    borderColor: twClasses.borderWhite,
    hoverBorderColorHex: brandColors.navyBlue,
    shadowColor: twClasses.shadowBlack,
    bgColorHex: brandColors.white,
    isLastSection: true,
  },
];

// Utility functions for accessing section configuration
export const getColorHexForSection = (sectionId: string): string => {
  const section = sectionConfig.find((s) => s.id === sectionId);
  return section?.bgColorHex || brandColors.white;
};

export const getHoverColorForSection = (sectionId: string): string => {
  const section = sectionConfig.find((s) => s.id === sectionId);
  return section?.hoverBorderColorHex || brandColors.navyBlue;
};

export const isSectionLast = (sectionId: string): boolean => {
  const section = sectionConfig.find((s) => s.id === sectionId);
  return section?.isLastSection || false;
};
