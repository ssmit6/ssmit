/**
 * ParallaxImage Component
 *
 * Creates a parallax scrolling effect on images.
 * Uses Framer Motion for smooth, performant animation.
 *
 * Features:
 * - Configurable parallax intensity
 * - Smooth scroll-linked animation
 * - Respects prefers-reduced-motion
 * - Handles image loading states
 */

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { prefersReducedMotion } from '@lib/animations';

interface ParallaxImageProps {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
  /** Additional CSS classes */
  className?: string;
  /** Container CSS classes */
  containerClassName?: string;
  /** Parallax intensity (default: 0.2, higher = more movement) */
  intensity?: number;
  /** Scroll offset range (default: ["start end", "end start"]) */
  offset?: [string, string];
  /** Image aspect ratio (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string;
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  intensity = 0.2,
  offset = ['start end', 'end start'],
  aspectRatio = '16/9',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ['start end', 'end start'],
  });

  // Calculate parallax range based on intensity
  const yRange = 100 * intensity;

  // Create smooth parallax effect
  const rawY = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);
  const y = useSpring(rawY, { stiffness: 100, damping: 30 });

  // Disable parallax for reduced motion
  const isDisabled = prefersReducedMotion();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ aspectRatio }}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}

      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        style={{
          y: isDisabled ? 0 : y,
          scale: 1.2, // Slightly larger to prevent gaps during parallax
        }}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}
