I want a landing page similar to: https://www.apollo.io/
Since the product is still in development, the landing page should be a placeholder for the product. We will use this landing page to collect leads and generate leads for the product. The website will serve AI customer workflows so it should be futuristic and modern with super cool UI/UX.

# Page Structure

## Navbar

- **Logo:** A simple logo that represents the brand.
- **Navigation Links:** Links to different sections of the page.
- **CTA Button:** "Join the Waitlist"

## Hero Section

- **Headline:** A compelling statement with two lines (e.g., "Customer workflows|with AI, unified").
- **Subheadline:** Brief explanation of the upcoming product's value.
- **CTA Button:** "Join the Waitlist"
- **Visual:** Product mockup, teaser animation, or illustration.
- **Background:** A subtle, modern gradient or pattern.

### Animation

- Headline and subheadline should have a cursor typing effect. The first line should be typed and deleted back with different texts like: ["Customer workflows", "Sales pipelines", " Outreach activities"] in a loop. the second line should be typed once and cursor should bkeep blinking at the end. The text "unified" should be cool blue color.

## Problem & Solution

- **Problem:** Brief description of the problem.
- **Solution:** Brief description of the solution.

## Features

Each feature should be like card with two columns, left column should have an image and right column should have text.

- **Key Benefits:**
  - Feature 1: [Describe how it solves a pain point]
  - Feature 2: [Highlight an exclusive feature]
  - Feature 3: [Mention any unique advantage]
  - All Feature should be in the cards with cool animation.

## Waitlist Signup Form

- **Minimal Fields:** Typically just Name and Email to reduce friction.
- **Privacy Assurance:** A note on data security and privacy.

## FAQ Section

- **Common Questions:**
  - What is the expected launch date?
  - What benefits do waitlist members receive?
  - How will updates be communicated?
- **Future Steps:** Outline what users can expect next after joining.

## About Us

- **Company Overview:** Brief description of the company.
- **Team:** Key team members and their roles. This should be two cool cards for each cofounder.

## Investment

- **Investment:** Brief description of the investment text should be in the cards with cool animation.
- **Link to resources:** Provide severla links to resources like seed pitch, etc.

## Footer

- **Additional Links:** Blog, social media channels, and other resources.
- **Contact Information:** Provide a simple email or contact form link.

# Style

## Colors

Navy blue and white

## Typography

### Headings

- **Primary Headings:** H1
- **Secondary Headings:** H2
- **Tertiary Headings:** H3

### Body Text

- **Primary Body Text:** 16px
- **Secondary Body Text:** 14px

## Animations

### 1. Sliding card stack effect

- **Depth & Movement:**  
  All sections except footer should be implemented like cards with slight margin on all sides with full view. When user scrolls down, the cards slide up/stacked on top of each other. When user scrolls up, the cards slide down/unstacked. Example website: https://www.apollo.io/, https://stacked.framer.website/

### 2. CSS Animations & Transitions

- **Fade-Ins & Slide-Ins:**  
  Elements like headlines, text blocks, and images smoothly fade or slide into view as the page loads or during scrolling.  
  _Implementation:_ CSS keyframe animations and transition properties.

### 3. Scroll-Triggered Animations

- **Dynamic Entry on Scroll:**  
  Sections animate into view when the user scrolls.  
  _Implementation:_ Typically achieved using the Intersection Observer API or JavaScript libraries like GSAP (GreenSock Animation Platform) or ScrollMagic.

### 4. Hover & Interaction Effects

- **Interactive States:**  
  Buttons and icons feature subtle hover effects such as scaling or color changes to provide interactive feedback.  
  _Implementation:_ CSS transitions that animate on hover.

### 5. SVG & Vector Animations

- **Animated Illustrations:**  
  SVG elements such as icons and line art are animated to create engaging visual effects.  
  _Implementation:_ Animating SVG paths with CSS or JavaScript offers lightweight, resolution-independent animations.

### 6. Smooth Transitions

- **Consistent Movement:**  
  All animations and transitions should be smooth and consistent to provide a polished user experience.  
  _Implementation:_ Use CSS transitions and animations with appropriate timing functions (ease-in-out, cubic-bezier, etc.) to ensure smoothness.

### 7. Responsive Design

- **Responsive Layout:**  
  The landing page should be responsive and work well on all devices, including desktops, tablets, and mobile devices.  
  _Implementation:_ Use CSS media queries and flexible layouts to ensure the page looks good and functions well on all devices.
