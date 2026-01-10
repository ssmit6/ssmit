/**
 * PhoneMockup Component
 *
 * Realistic phone frame with scroll-linked animation.
 * Used to showcase app screenshots with premium feel.
 *
 * Features:
 * - Realistic iPhone-style frame
 * - Dynamic Island notch
 * - Scroll-linked parallax and rotation
 * - Reflection/glass effect
 * - Respects reduced motion
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { prefersReducedMotion } from '@lib/animations';

interface PhoneMockupProps {
  /** Image source URL */
  imageSrc: string;
  /** Image alt text */
  alt: string;
  /** Additional CSS classes */
  className?: string;
  /** Enable scroll animation */
  animated?: boolean;
  /** Parallax intensity */
  parallaxIntensity?: number;
}

export default function PhoneMockup({
  imageSrc,
  alt,
  className = '',
  animated = true,
  parallaxIntensity = 0.3,
}: PhoneMockupProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Scroll-linked transforms
  const y = useTransform(scrollYProgress, [0, 1], [100 * parallaxIntensity, -100 * parallaxIntensity]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // Smooth spring animation
  const springConfig = { stiffness: 100, damping: 30 };
  const smoothY = useSpring(y, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  // Check for reduced motion
  const isDisabled = prefersReducedMotion();
  const shouldAnimate = animated && !isDisabled;

  return (
    <motion.div
      ref={ref}
      className={`relative mx-auto ${className}`}
      style={
        shouldAnimate
          ? {
              y: smoothY,
              rotateY: smoothRotateY,
              scale: smoothScale,
              transformPerspective: 1000,
            }
          : {}
      }
    >
      {/* Phone Frame */}
      <div className="relative rounded-[3rem] bg-gray-900 p-3 shadow-2xl ring-1 ring-white/10">
        {/* Dynamic Island (notch) */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />

        {/* Side buttons - left (silent switch + volume) */}
        <div className="absolute left-[-3px] top-[100px] w-[3px] h-[25px] bg-gray-800 rounded-l-sm" />
        <div className="absolute left-[-3px] top-[140px] w-[3px] h-[50px] bg-gray-800 rounded-l-sm" />
        <div className="absolute left-[-3px] top-[200px] w-[3px] h-[50px] bg-gray-800 rounded-l-sm" />

        {/* Side buttons - right (power) */}
        <div className="absolute right-[-3px] top-[160px] w-[3px] h-[70px] bg-gray-800 rounded-r-sm" />

        {/* Screen */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[9/19.5]">
          {/* Status bar area (subtle) */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 pointer-events-none" />

          {/* App screenshot */}
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            /* Placeholder gradient when no image */
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  className="w-12 h-12 mx-auto mb-2 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs">App Screenshot</span>
              </div>
            </div>
          )}

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/30 rounded-full" />
        </div>
      </div>

      {/* Reflection overlay */}
      <div
        className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.08] pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom shadow/glow */}
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-accent/20 blur-2xl rounded-full opacity-50"
        aria-hidden="true"
      />
    </motion.div>
  );
}
