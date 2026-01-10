/**
 * SmoothScroll Component
 *
 * Provides buttery smooth scrolling using Lenis.
 * Wrap your entire app or specific sections.
 *
 * Features:
 * - Smooth wheel/touch scrolling
 * - Respects prefers-reduced-motion
 * - Syncs with GSAP ScrollTrigger
 * - Proper cleanup on unmount
 */

import { useEffect, useRef, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@lib/animations';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
  children: ReactNode;
  /** Scroll duration multiplier (default: 1.2) */
  duration?: number;
  /** Enable/disable smooth scroll */
  enabled?: boolean;
}

export default function SmoothScroll({
  children,
  duration = 1.2,
  enabled = true,
}: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Skip if reduced motion preferred or disabled
    if (prefersReducedMotion() || !enabled) {
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing
    gsap.ticker.lagSmoothing(0);

    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            lenis.scrollTo(targetEl as HTMLElement, {
              offset: -80, // Account for fixed header
              duration: 1.5,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [duration, enabled]);

  return <>{children}</>;
}
