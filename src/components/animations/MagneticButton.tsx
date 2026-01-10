/**
 * MagneticButton Component
 *
 * Creates a magnetic hover effect where the element
 * follows the cursor position within its bounds.
 *
 * Features:
 * - Smooth spring-based movement
 * - Configurable magnetic strength
 * - Disables on touch devices
 * - Respects prefers-reduced-motion
 */

import { useRef, useState, useCallback, type ReactNode, type CSSProperties } from 'react';
import { motion, useSpring } from 'framer-motion';
import { prefersReducedMotion, supportsHover } from '@lib/animations';

interface MagneticButtonProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Magnetic pull strength (0-1, default: 0.3) */
  strength?: number;
  /** Spring stiffness */
  stiffness?: number;
  /** Spring damping */
  damping?: number;
  /** Custom inline styles */
  style?: CSSProperties;
  /** Click handler */
  onClick?: () => void;
  /** HTML tag to render */
  as?: 'div' | 'button' | 'a';
  /** Link href (when as="a") */
  href?: string;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  stiffness = 150,
  damping = 15,
  style,
  onClick,
  as = 'div',
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [, setIsHovered] = useState(false);

  // Spring values for smooth animation
  const springConfig = { stiffness, damping, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Scale on hover
  const scale = useSpring(1, springConfig);

  // Check if effects should be disabled
  const isDisabled = prefersReducedMotion() || !supportsHover();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isDisabled || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      x.set(deltaX);
      y.set(deltaY);
    },
    [isDisabled, strength, x, y]
  );

  const handleMouseEnter = useCallback(() => {
    if (isDisabled) return;
    setIsHovered(true);
    scale.set(1.05);
  }, [isDisabled, scale]);

  const handleMouseLeave = useCallback(() => {
    if (isDisabled) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
    scale.set(1);
  }, [isDisabled, x, y, scale]);

  // Determine the component to render
  const MotionComponent = motion[as] as typeof motion.div;

  // Build props based on element type
  const elementProps: Record<string, unknown> = {
    ref,
    className,
    style: { ...style, x, y, scale },
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  if (as === 'button') {
    elementProps.type = 'button';
    elementProps.onClick = onClick;
  }

  if (as === 'a' && href) {
    elementProps.href = href;
  }

  return <MotionComponent {...elementProps}>{children}</MotionComponent>;
}
