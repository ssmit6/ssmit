/**
 * GradientBlob Component
 *
 * Animated gradient blobs for premium background effects.
 * Uses requestAnimationFrame for smooth, performant animation.
 *
 * Features:
 * - Floating, morphing blob animation
 * - Customizable colors and size
 * - GPU-accelerated (transform only)
 * - Respects prefers-reduced-motion
 */

import { useEffect, useRef, type CSSProperties } from 'react';
import { prefersReducedMotion } from '@lib/animations';

interface BlobConfig {
  /** Blob color (CSS gradient or color) */
  color: string;
  /** Size in pixels */
  size: number;
  /** Position (percentage from top-left) */
  position: { x: number; y: number };
  /** Animation speed multiplier */
  speed: number;
  /** Blur amount in pixels */
  blur: number;
}

interface GradientBlobProps {
  /** Custom blob configurations */
  blobs?: BlobConfig[];
  /** Additional CSS classes for container */
  className?: string;
  /** Container styles */
  style?: CSSProperties;
}

const defaultBlobs: BlobConfig[] = [
  {
    color: 'linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(99, 102, 241, 0.3))',
    size: 600,
    position: { x: 25, y: 25 },
    speed: 1,
    blur: 100,
  },
  {
    color: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(59, 130, 246, 0.2))',
    size: 500,
    position: { x: 75, y: 75 },
    speed: 0.8,
    blur: 100,
  },
];

export default function GradientBlob({
  blobs = defaultBlobs,
  className = '',
  style,
}: GradientBlobProps) {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Skip animation if reduced motion preferred
    if (prefersReducedMotion()) {
      return;
    }

    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) * 0.001; // Convert to seconds

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;

        const config = blobs[index];
        if (!config) return;

        const speed = config.speed;

        // Create organic floating motion using sine waves
        const xOffset = Math.sin(elapsed * 0.5 * speed) * 50;
        const yOffset = Math.cos(elapsed * 0.3 * speed) * 30;
        const scaleOffset = 1 + Math.sin(elapsed * 0.2 * speed) * 0.1;

        // Apply transform (GPU accelerated)
        blob.style.transform = `
          translate(${xOffset}px, ${yOffset}px)
          scale(${scaleOffset})
        `;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [blobs]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      {blobs.map((blob, index) => (
        <div
          key={index}
          ref={(el) => {
            blobRefs.current[index] = el;
          }}
          className="absolute rounded-full will-change-transform"
          style={{
            background: blob.color,
            width: blob.size,
            height: blob.size,
            left: `${blob.position.x}%`,
            top: `${blob.position.y}%`,
            filter: `blur(${blob.blur}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
