/**
 * TextReveal Component
 *
 * Reveals text word by word with a staggered animation.
 * Each word slides up from below with a slight delay.
 *
 * Features:
 * - Word-by-word reveal animation
 * - Configurable stagger timing
 * - Respects prefers-reduced-motion
 * - Works with plain text or React nodes
 */

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, timing, scrollTriggerDefaults } from '@lib/animations';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  /** Text content to reveal (string for word splitting, ReactNode for custom) */
  children: string | ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Stagger delay between words in seconds */
  stagger?: number;
  /** Animation duration for each word */
  duration?: number;
  /** Custom inline styles */
  style?: CSSProperties;
  /** HTML tag to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.05,
  duration = timing.slower,
  style,
  as: Tag = 'div',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated.current) return;

    const words = container.querySelectorAll<HTMLElement>('.word');
    if (words.length === 0) return;

    // If reduced motion, just show immediately
    if (prefersReducedMotion()) {
      words.forEach((word) => {
        gsap.set(word, { opacity: 1, y: 0 });
      });
      return;
    }

    // Set initial state
    gsap.set(words, {
      opacity: 0,
      y: '100%',
    });

    // Create animation
    const animation = gsap.to(words, {
      opacity: 1,
      y: '0%',
      duration,
      delay,
      ease: timing.easeOutExpo,
      stagger,
      scrollTrigger: {
        trigger: container,
        start: scrollTriggerDefaults.start,
        once: true,
        onEnter: () => {
          hasAnimated.current = true;
        },
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, stagger, duration]);

  // Process children - split string into words, or render ReactNode as-is
  const renderContent = () => {
    if (typeof children === 'string') {
      return children.split(' ').map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <span className="word inline-block">
            {word}
            {index < children.split(' ').length - 1 && '\u00A0'}
          </span>
        </span>
      ));
    }

    // For ReactNode children, wrap in overflow container
    return (
      <span className="inline-block overflow-hidden">
        <span className="word inline-block">{children}</span>
      </span>
    );
  };

  // Type assertion for dynamic tag
  const Component = Tag as React.ElementType;

  return (
    <Component ref={containerRef} className={className} style={style}>
      {renderContent()}
    </Component>
  );
}
