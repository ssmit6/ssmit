/**
 * Animation Utilities
 *
 * Shared utilities for animation components.
 */

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if device supports hover (not touch-only)
 */
export function supportsHover(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(hover: hover)').matches;
}

/**
 * Animation timing presets
 */
export const timing = {
  // Durations (in seconds for GSAP)
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2,

  // Easings
  easeOutExpo: 'expo.out',
  easeOutQuart: 'quart.out',
  easeInOutQuart: 'quart.inOut',
  easeOutBack: 'back.out(1.7)',
} as const;

/**
 * Default ScrollTrigger config
 */
export const scrollTriggerDefaults = {
  start: 'top 85%',
  once: true,
} as const;
