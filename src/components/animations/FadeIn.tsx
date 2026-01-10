/**
 * FadeIn Component
 *
 * Fades in children when they enter the viewport.
 * Uses GSAP ScrollTrigger for performance.
 *
 * Features:
 * - Directional fade (up, down, left, right, none)
 * - Configurable delay and duration
 * - Respects prefers-reduced-motion
 * - Triggers once by default
 */

import React, { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, timing, scrollTriggerDefaults } from '@lib/animations';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Direction to fade from */
  direction?: Direction;
  /** Distance to travel (in pixels) */
  distance?: number;
  /** Custom inline styles */
  style?: CSSProperties;
  /** HTML tag to render */
  as?: keyof React.JSX.IntrinsicElements;
  /** ScrollTrigger start position */
  start?: string;
  /** Whether to trigger only once */
  once?: boolean;
}

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = timing.slower,
  direction = 'up',
  distance = 40,
  style,
  as: Tag = 'div',
  start = scrollTriggerDefaults.start,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If reduced motion, just show immediately
    if (prefersReducedMotion()) {
      gsap.set(element, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const offset = directionOffsets[direction];

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      x: offset.x * distance,
      y: offset.y * distance,
    });

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: timing.easeOutExpo,
      scrollTrigger: {
        trigger: element,
        start,
        once,
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, direction, distance, start, once]);

  // Type assertion needed for dynamic tag
  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
