import { type ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

/**
 * Configuration interface for section animations
 */
interface AnimationConfig {
  /** Initial animation state */
  initial?: MotionProps["initial"];
  /** Animation state when in view */
  whileInView?: MotionProps["whileInView"];
  /** Viewport configuration for triggering animation */
  viewport?: MotionProps["viewport"];
  /** Transition configuration */
  transition?: MotionProps["transition"];
}

/**
 * Props for the AnimatedSection component
 */
interface AnimatedSectionProps {
  /** Content to be animated */
  children: ReactNode;
  /** Custom animation configuration */
  animationConfig?: AnimationConfig;
}

/**
 * Default animation configuration for consistent section animations
 */
const DEFAULT_ANIMATION: AnimationConfig = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

/**
 * Reusable animated section wrapper component
 * Provides consistent scroll-triggered animations across sections
 */
export const AnimatedSection = ({
  children,
  animationConfig = DEFAULT_ANIMATION,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={animationConfig.initial}
      whileInView={animationConfig.whileInView}
      viewport={animationConfig.viewport}
      transition={animationConfig.transition}
    >
      {children}
    </motion.div>
  );
};
