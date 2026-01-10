# Premium App Studio Website — Development Specification

> A comprehensive guide to building a world-class, premium website using Astro for an innovative app development company.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Brand Identity](#2-brand-identity)
3. [Technical Stack](#3-technical-stack)
4. [Typography System](#4-typography-system)
5. [Animation Philosophy](#5-animation-philosophy)
6. [Page Structure](#6-page-structure)
7. [Component Specifications](#7-component-specifications)
8. [Content Strategy](#8-content-strategy)
9. [Performance Requirements](#9-performance-requirements)
10. [Deployment](#10-deployment)

---

## 1. Project Overview

### Company Profile

**Company Name:** [Your Company Name]  
**Industry:** Mobile Application Development  
**Tagline:** _"Crafting Digital Experiences That Matter"_

**Contact Information:**

- **Address:** 2858 Lemon Twist Ave, Sacramento, CA 95833
- **Phone:** (530) 517-3365
- **Email:** smit@ssmit.com

### Product Portfolio

#### Flagship Product: Cyclia

Cyclia is our debut application — a revolutionary tool designed to [describe Cyclia's purpose]. This app represents our commitment to thoughtful design and user-centric development.

#### Upcoming: AI-Powered Photo Enhancement Suite

Following Cyclia, we're developing an advanced AI Face & Selfie Editor that leverages cutting-edge machine learning to deliver professional-grade photo enhancements directly on mobile devices.

### Website Goals

1. Establish premium brand presence in the app development space
2. Generate excitement and waitlist signups for Cyclia
3. Attract potential clients for custom app development services
4. Build trust through sophisticated design and clear communication

---

## 2. Brand Identity

### Visual Philosophy

The website should communicate: **Innovation • Precision • Premium Quality • Approachability**

Think: Apple meets Linear meets Stripe — clean, sophisticated, with moments of delight.

### Color Palette

```css
:root {
  /* Primary */
  --color-black: #0a0a0b;
  --color-white: #fafafa;

  /* Accent — Choose ONE direction */

  /* Option A: Electric Violet (Modern/Tech) */
  --color-accent: #7c3aed;
  --color-accent-light: #a78bfa;
  --color-accent-glow: rgba(124, 58, 237, 0.4);

  /* Option B: Warm Coral (Friendly/Creative) */
  --color-accent: #f97316;
  --color-accent-light: #fb923c;
  --color-accent-glow: rgba(249, 115, 22, 0.4);

  /* Option C: Cyan Blue (Trust/Professional) */
  --color-accent: #06b6d4;
  --color-accent-light: #22d3ee;
  --color-accent-glow: rgba(6, 182, 212, 0.4);

  /* Neutrals */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* Semantic */
  --color-success: #10b981;
  --color-error: #ef4444;
}
```

### Design Principles

1. **Generous Whitespace:** Let content breathe. Minimum 80px vertical spacing between sections.
2. **Subtle Gradients:** Use gradients sparingly for depth, never garish.
3. **Micro-interactions:** Every interactive element should respond with purposeful animation.
4. **Dark Mode First:** Design for dark mode as the default, with an elegant light mode option.

---

## 3. Technical Stack

### Core Framework

```bash
# Initialize Astro project
npm create astro@latest cyclia-studio -- --template minimal

# Navigate to project
cd cyclia-studio

# Install dependencies
npm install
```

### Required Dependencies

```bash
# Animation libraries
npm install gsap @gsap/react
npm install framer-motion
npm install @studio-freight/lenis  # Smooth scrolling

# React integration (for interactive components)
npx astro add react

# Styling
npm install tailwindcss @tailwindcss/typography
npx astro add tailwind

# Icons
npm install lucide-react

# Optional: 3D elements
npm install three @react-three/fiber @react-three/drei
```

### Project Structure

```
/
├── public/
│   ├── fonts/
│   │   ├── GeneralSans-Variable.woff2
│   │   ├── GeneralSans-Variable.woff
│   │   ├── Satoshi-Variable.woff2
│   │   └── Satoshi-Variable.woff
│   ├── images/
│   │   ├── cyclia/
│   │   ├── team/
│   │   └── og-image.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Button.astro
│   │   │   ├── Container.astro
│   │   │   └── SmoothScroll.tsx
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── Features.astro
│   │   │   ├── About.astro
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.astro
│   │   ├── animations/
│   │   │   ├── FadeIn.tsx
│   │   │   ├── TextReveal.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── ParallaxImage.tsx
│   │   │   └── GradientBlob.tsx
│   │   └── ui/
│   │       ├── Card.astro
│   │       ├── Badge.astro
│   │       ├── Input.astro
│   │       └── PhoneMockup.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── cyclia.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── fonts.css
│   └── lib/
│       ├── animations.ts
│       └── utils.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 4. Typography System

### Font Selection (Premium, Free Options)

**Primary Font — Headlines:**  
**General Sans** (from fontshare.com — FREE for commercial use)

- Modern geometric sans-serif
- Excellent for large display text
- Variable font for performance

**Secondary Font — Body:**  
**Satoshi** (from fontshare.com — FREE for commercial use)

- Highly readable at small sizes
- Pairs beautifully with General Sans
- Variable font for performance

**Alternative Premium Options (if budget allows):**

- **Söhne** (Klim Type Foundry) — Used by OpenAI
- **Neue Montreal** (Pangram Pangram) — Modern, geometric
- **GT Walsheim** — Friendly, approachable

### Font Implementation

Create `src/styles/fonts.css`:

```css
/* General Sans - Headlines */
@font-face {
  font-family: "General Sans";
  src: url("/fonts/GeneralSans-Variable.woff2") format("woff2"), url("/fonts/GeneralSans-Variable.woff")
      format("woff");
  font-weight: 200 700;
  font-display: swap;
  font-style: normal;
}

/* Satoshi - Body */
@font-face {
  font-family: "Satoshi";
  src: url("/fonts/Satoshi-Variable.woff2") format("woff2"), url("/fonts/Satoshi-Variable.woff")
      format("woff");
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}
```

### Typography Scale

```css
/* Type Scale - Based on 1.25 ratio */
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem); /* 12-14px */
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem); /* 14-16px */
  --text-base: clamp(1rem, 0.925rem + 0.375vw, 1.125rem); /* 16-18px */
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.375rem); /* 18-22px */
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem); /* 20-26px */
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem); /* 24-36px */
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 3rem); /* 30-48px */
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 4rem); /* 36-64px */
  --text-5xl: clamp(3rem, 2rem + 5vw, 6rem); /* 48-96px */
  --text-6xl: clamp(3.75rem, 2.5rem + 6.25vw, 8rem); /* 60-128px */
}

/* Heading Styles */
h1,
.h1 {
  font-family: "General Sans", sans-serif;
  font-size: var(--text-5xl);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

h2,
.h2 {
  font-family: "General Sans", sans-serif;
  font-size: var(--text-4xl);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h3,
.h3 {
  font-family: "General Sans", sans-serif;
  font-size: var(--text-3xl);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

/* Body Styles */
body {
  font-family: "Satoshi", sans-serif;
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.01em;
}

.lead {
  font-size: var(--text-xl);
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-gray-400);
}
```

---

## 5. Animation Philosophy

### Core Principles

1. **Purpose Over Polish:** Every animation should serve a purpose — guide attention, provide feedback, or enhance understanding.
2. **Subtlety:** Animations should feel natural, almost unnoticeable. Users should feel the quality without being distracted.
3. **Performance:** 60fps minimum. Use `transform` and `opacity` only. Avoid layout-triggering properties.
4. **Accessibility:** Respect `prefers-reduced-motion`. Provide instant alternatives.

### Animation Timing Standards

```css
:root {
  /* Durations */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
  --duration-slowest: 1200ms;

  /* Easings */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
  --ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Spring-like (for interactive elements) */
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### Required Animations

#### 1. Smooth Scroll (Lenis)

```tsx
// src/components/animations/SmoothScroll.tsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

#### 2. Text Reveal Animation

```tsx
// src/components/animations/TextReveal.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll(".word");

    gsap.fromTo(
      words,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, [delay]);

  const words = children.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden">
      <span className="word inline-block">{word}&nbsp;</span>
    </span>
  ));

  return (
    <div ref={containerRef} className={className}>
      {words}
    </div>
  );
}
```

#### 3. Fade In on Scroll

```tsx
// src/components/animations/FadeIn.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const directionOffset = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { y: 0, x: 40 },
      right: { y: 0, x: -40 },
      none: { y: 0, x: 0 },
    };

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [delay, direction, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

#### 4. Magnetic Button Effect

```tsx
// src/components/animations/MagneticButton.tsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * strength;
    const y = (clientY - top - height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

#### 5. Gradient Blob Background

```tsx
// src/components/animations/GradientBlob.tsx
import { useEffect, useRef } from "react";

export default function GradientBlob() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      const time = Date.now() * 0.001;

      if (blob1.current) {
        blob1.current.style.transform = `
          translate(${Math.sin(time * 0.5) * 50}px, ${
          Math.cos(time * 0.3) * 30
        }px)
          scale(${1 + Math.sin(time * 0.2) * 0.1})
        `;
      }

      if (blob2.current) {
        blob2.current.style.transform = `
          translate(${Math.cos(time * 0.4) * 40}px, ${
          Math.sin(time * 0.5) * 40
        }px)
          scale(${1 + Math.cos(time * 0.3) * 0.1})
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={blob1}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-600/30 to-indigo-600/30 blur-[100px]"
      />
      <div
        ref={blob2}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-[100px]"
      />
    </div>
  );
}
```

#### 6. Phone Mockup with Scroll Animation

```tsx
// src/components/ui/PhoneMockup.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
}

export default function PhoneMockup({ imageSrc, alt }: PhoneMockupProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateY: rotate }}
      className="relative mx-auto w-[280px] md:w-[320px]"
    >
      {/* Phone Frame */}
      <div className="relative rounded-[3rem] bg-gray-900 p-3 shadow-2xl ring-1 ring-white/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[9/19.5]">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Reflection */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}
```

---

## 6. Page Structure

### Home Page (`index.astro`)

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER                                                      │
│  Logo          Nav Links                    CTA Button       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  HERO SECTION                                                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Badge: "Introducing Cyclia"                         │    │
│  │                                                      │    │
│  │  We Build Apps                                       │    │
│  │  That People Love                                    │    │
│  │                                                      │    │
│  │  [Subtext describing the company mission]            │    │
│  │                                                      │    │
│  │  [Primary CTA]        [Secondary CTA]                │    │
│  │                                                      │    │
│  │  ┌────────────────────────────────────────┐         │    │
│  │  │     Animated Phone Mockup / 3D         │         │    │
│  │  │     showing Cyclia app                 │         │    │
│  │  └────────────────────────────────────────┘         │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  LOGOS / TRUST BAR (optional)                               │
│  "Trusted by..." or "Featured in..."                        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  PRODUCT SHOWCASE: CYCLIA                                   │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  [Phone Mockup]          [Feature Description]       │    │
│  │                          • Feature 1                 │    │
│  │                          • Feature 2                 │    │
│  │                          • Feature 3                 │    │
│  │                                                      │    │
│  │                          [Download / Waitlist CTA]   │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  FEATURES GRID                                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │ Icon    │  │ Icon    │  │ Icon    │                     │
│  │ Title   │  │ Title   │  │ Title   │                     │
│  │ Desc    │  │ Desc    │  │ Desc    │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │ Icon    │  │ Icon    │  │ Icon    │                     │
│  │ Title   │  │ Title   │  │ Title   │                     │
│  │ Desc    │  │ Desc    │  │ Desc    │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  COMING SOON: AI PHOTO EDITOR                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Teaser section with:                                │    │
│  │  • Blurred/gradient preview image                    │    │
│  │  • "Coming 2025" badge                               │    │
│  │  • Brief description                                 │    │
│  │  • Email signup for updates                          │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ABOUT / PHILOSOPHY SECTION                                 │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  "We believe great apps start with                   │    │
│  │   understanding people, not just problems."          │    │
│  │                                                      │    │
│  │  [2-3 paragraphs about company philosophy]           │    │
│  │                                                      │    │
│  │  Located in Sacramento, California                   │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  CALL TO ACTION                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  Ready to build something amazing?                   │    │
│  │                                                      │    │
│  │  [Contact Us]                                        │    │
│  │                                                      │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
│  Logo    Links    Social    Contact Info                    │
│  © 2025                                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Component Specifications

### Header Component

```astro
---
// src/components/common/Header.astro
---

<header class="fixed top-0 left-0 right-0 z-50">
  <div class="absolute inset-0 bg-black/50 backdrop-blur-xl border-b border-white/5"></div>

  <nav class="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-xl font-semibold tracking-tight">
      YourCompany
    </a>

    <!-- Navigation Links -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#products" class="text-sm text-gray-400 hover:text-white transition-colors">
        Products
      </a>
      <a href="#about" class="text-sm text-gray-400 hover:text-white transition-colors">
        About
      </a>
      <a href="/contact" class="text-sm text-gray-400 hover:text-white transition-colors">
        Contact
      </a>
    </div>

    <!-- CTA Button -->
    <a
      href="#waitlist"
      class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
    >
      Join Waitlist
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>

    <!-- Mobile Menu Button -->
    <button class="md:hidden p-2" aria-label="Menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>
</header>
```

### Hero Section

```astro
---
// src/components/home/Hero.astro
import FadeIn from '../animations/FadeIn';
import TextReveal from '../animations/TextReveal';
import GradientBlob from '../animations/GradientBlob';
import PhoneMockup from '../ui/PhoneMockup';
---

<section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
  <!-- Background -->
  <GradientBlob client:load />
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]"></div>

  <!-- Grid Pattern -->
  <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

  <div class="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
    <div class="grid lg:grid-cols-2 gap-16 items-center">

      <!-- Content -->
      <div class="text-center lg:text-left">
        <!-- Badge -->
        <FadeIn client:visible delay={0}>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span class="text-sm text-gray-300">Introducing Cyclia</span>
          </div>
        </FadeIn>

        <!-- Headline -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
          <TextReveal client:visible>
            We Build Apps
          </TextReveal>
          <TextReveal client:visible delay={0.1}>
            <span class="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              That People Love
            </span>
          </TextReveal>
        </h1>

        <!-- Subtext -->
        <FadeIn client:visible delay={0.3}>
          <p class="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10">
            We craft thoughtful mobile experiences that solve real problems.
            Our debut app Cyclia is launching soon — join the waitlist to be first in line.
          </p>
        </FadeIn>

        <!-- CTAs -->
        <FadeIn client:visible delay={0.4}>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#waitlist"
              class="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all"
            >
              Join the Waitlist
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#learn-more"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-medium rounded-full border border-white/20 hover:bg-white/5 transition-all"
            >
              Learn More
            </a>
          </div>
        </FadeIn>
      </div>

      <!-- Phone Mockup -->
      <FadeIn client:visible delay={0.2} direction="right">
        <PhoneMockup
          client:visible
          imageSrc="/images/cyclia/app-screenshot.jpg"
          alt="Cyclia app interface"
        />
      </FadeIn>

    </div>
  </div>
</section>
```

### Feature Card Component

```astro
---
// src/components/ui/Card.astro
interface Props {
  icon: string;
  title: string;
  description: string;
}

const { icon, title, description } = Astro.props;
---

<div class="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all duration-500">
  <!-- Hover Glow Effect -->
  <div class="absolute inset-0 rounded-3xl bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <div class="relative">
    <!-- Icon -->
    <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-6">
      <span class="text-2xl">{icon}</span>
    </div>

    <!-- Title -->
    <h3 class="text-xl font-semibold mb-3 group-hover:text-violet-300 transition-colors">
      {title}
    </h3>

    <!-- Description -->
    <p class="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
</div>
```

### Footer Component

```astro
---
// src/components/common/Footer.astro
const currentYear = new Date().getFullYear();
---

<footer class="relative border-t border-white/5">
  <div class="max-w-7xl mx-auto px-6 py-16">

    <div class="grid md:grid-cols-4 gap-12 mb-16">

      <!-- Brand -->
      <div class="md:col-span-2">
        <a href="/" class="text-2xl font-semibold tracking-tight mb-4 block">
          YourCompany
        </a>
        <p class="text-gray-400 max-w-sm mb-6">
          Crafting digital experiences that matter. Based in Sacramento, California.
        </p>
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><!-- X/Twitter icon --></svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><!-- LinkedIn icon --></svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><!-- Instagram icon --></svg>
          </a>
        </div>
      </div>

      <!-- Products -->
      <div>
        <h4 class="font-semibold mb-4">Products</h4>
        <ul class="space-y-3">
          <li><a href="/cyclia" class="text-gray-400 hover:text-white transition-colors">Cyclia</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">AI Photo Editor <span class="text-xs text-violet-400">Coming Soon</span></a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-semibold mb-4">Contact</h4>
        <ul class="space-y-3 text-gray-400">
          <li>
            <a href="tel:+15305173365" class="hover:text-white transition-colors">
              (530) 517-3365
            </a>
          </li>
          <li>
            <a href="mailto:hello@yourcompany.com" class="hover:text-white transition-colors">
              hello@yourcompany.com
            </a>
          </li>
          <li class="text-sm leading-relaxed">
            2858 Lemon Twist Ave<br />
            Sacramento, CA 95833
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-sm text-gray-500">
        © {currentYear} YourCompany. All rights reserved.
      </p>
      <div class="flex gap-6 text-sm text-gray-500">
        <a href="/privacy" class="hover:text-white transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-white transition-colors">Terms</a>
      </div>
    </div>

  </div>
</footer>
```

---

## 8. Content Strategy

### Voice & Tone

**Voice Attributes:**

- **Confident** — We know our craft
- **Approachable** — No jargon or pretension
- **Forward-thinking** — Innovation-focused
- **Human** — We build for people, not metrics

**Writing Guidelines:**

- Use active voice
- Keep sentences short and punchy
- Lead with benefits, not features
- Avoid buzzwords: "leverage," "synergy," "disruptive"

### Hero Headlines (Options)

**Option A — Mission-focused:**

> "We Build Apps That People Love"

**Option B — Product-focused:**

> "Meet Cyclia. Your [benefit] Companion."

**Option C — Benefit-focused:**

> "Mobile Experiences Worth Opening"

**Option D — Bold statement:**

> "Apps That Actually Get Used"

### Section Copy

#### About Section

```
We're not just another app studio.

We believe the best apps emerge from deep understanding —
of the problem, the people, and the moment they'll reach for your product.

Based in Sacramento, California, we combine thoughtful design with
technical excellence to create mobile experiences that earn their place
on your home screen.

Cyclia is our first step. It won't be our last.
```

#### Cyclia Product Description

```
Cyclia

[Tagline that captures the app's essence in 5-7 words]

[One paragraph describing what Cyclia does and why it matters —
focus on the transformation or benefit for the user, not the features]

Key features:
• Feature 1 — Brief benefit-focused description
• Feature 2 — Brief benefit-focused description
• Feature 3 — Brief benefit-focused description

[CTA: Join the Waitlist / Download Now]
```

#### AI Photo Editor Teaser

```
Coming Soon

AI-Powered Photo Enhancement

Professional-grade photo editing powered by cutting-edge AI.
Transform your selfies and portraits with a single tap.

[Email input: "Enter your email"]
[Button: "Notify Me"]
```

#### Call-to-Action Section

```
Let's Build Something Together

Whether you have an idea that needs bringing to life,
or you want to join the Cyclia community — we'd love to hear from you.

[Primary CTA: Get in Touch]
```

### SEO Metadata

```astro
---
// In Layout.astro or individual pages
const seo = {
  title: "YourCompany — Mobile App Development Studio",
  description: "We build thoughtful mobile experiences that people love. Creators of Cyclia. Based in Sacramento, California.",
  image: "/og-image.jpg",
  url: "https://yourcompany.com",
};
---

<head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={seo.url} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content={seo.image} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.description} />
  <meta name="twitter:image" content={seo.image} />
</head>
```

---

## 9. Performance Requirements

### Core Web Vitals Targets

| Metric                         | Target  | Notes                            |
| ------------------------------ | ------- | -------------------------------- |
| LCP (Largest Contentful Paint) | < 2.5s  | Hero image/text should load fast |
| FID (First Input Delay)        | < 100ms | Minimize JS blocking             |
| CLS (Cumulative Layout Shift)  | < 0.1   | Reserve space for images         |
| TTFB (Time to First Byte)      | < 200ms | Benefit of static hosting        |

### Optimization Checklist

**Images:**

- [ ] Use WebP/AVIF formats with fallbacks
- [ ] Implement responsive images with `srcset`
- [ ] Lazy load below-fold images
- [ ] Set explicit `width` and `height` attributes
- [ ] Use blur-up placeholder technique

**JavaScript:**

- [ ] Use `client:visible` directive for non-critical components
- [ ] Lazy load animation libraries
- [ ] Minimize third-party scripts
- [ ] Use dynamic imports for heavy components

**CSS:**

- [ ] Inline critical CSS
- [ ] Purge unused Tailwind classes
- [ ] Avoid layout-triggering animations

**Fonts:**

- [ ] Self-host fonts (no Google Fonts CDN)
- [ ] Use `font-display: swap`
- [ ] Subset fonts to needed characters
- [ ] Preload critical fonts

### Astro Configuration for Performance

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            gsap: ["gsap"],
            framer: ["framer-motion"],
          },
        },
      },
    },
  },
});
```

---

## 10. Deployment

### Cloudflare Pages Setup

**Step 1: Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourcompany-website.git
git push -u origin main
```

**Step 2: Connect to Cloudflare Pages**

1. Log in to Cloudflare Dashboard
2. Go to Pages → Create a project
3. Connect your GitHub repository
4. Configure build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy

**Step 3: Custom Domain**

1. In Cloudflare Pages, go to Custom Domains
2. Add your domain (e.g., `yourcompany.com`)
3. Configure DNS (Cloudflare handles this automatically if domain is on Cloudflare)

### Environment Variables (if needed)

```
# .env.example
PUBLIC_SITE_URL=https://yourcompany.com
PUBLIC_CONTACT_EMAIL=hello@yourcompany.com
```

### Continuous Deployment

Every push to `main` will trigger a new deployment. Preview deployments are created for pull requests automatically.

---

## Quick Start Commands

```bash
# 1. Create project
npm create astro@latest yourcompany -- --template minimal

# 2. Install dependencies
cd yourcompany
npm install gsap framer-motion @studio-freight/lenis lucide-react
npx astro add react tailwind

# 3. Download fonts from fontshare.com
# Place in public/fonts/

# 4. Start development
npm run dev

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
```

---

## Final Checklist Before Launch

- [ ] All placeholder content replaced with real copy
- [ ] Contact form connected to backend/email service
- [ ] Favicon and app icons configured
- [ ] Open Graph image created (1200x630px)
- [ ] Mobile navigation working
- [ ] All links functional
- [ ] 404 page created
- [ ] Analytics installed (Plausible, Fathom, or similar)
- [ ] Sitemap generated (`@astrojs/sitemap`)
- [ ] `robots.txt` configured
- [ ] Accessibility audit passed (axe DevTools)
- [ ] PageSpeed Insights score > 90
- [ ] Cross-browser testing complete
- [ ] Forms tested with real submissions

---

_Document Version: 1.0_  
_Last Updated: January 2025_
