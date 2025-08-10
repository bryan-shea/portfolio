import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { animationVariants, transitions, type AnimationTiming } from "../utils";

/**
 * Props for the MotionWrapper component
 */
interface MotionWrapperProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "exit"> {
  /** Animation variant to use */
  variant?: keyof typeof animationVariants;
  /** Transition timing to use */
  timing?: AnimationTiming;
  /** Whether to animate on mount */
  animateOnMount?: boolean;
  /** Custom animation props (overrides variant) */
  animation?: {
    initial?: any;
    animate?: any;
    exit?: any;
  };
}

/**
 * Reusable motion wrapper component for consistent animations
 * Provides common animation patterns with customizable timing
 */
export const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  (
    {
      variant = "fadeIn",
      timing = "smooth",
      animateOnMount = true,
      animation,
      children,
      ...props
    },
    ref
  ) => {
    // Use custom animation if provided, otherwise use variant
    const selectedVariant = animationVariants[variant];
    const motionProps = animation || selectedVariant;

    // Handle stagger variant differently as it doesn't have initial/exit
    const isStaggerVariant = variant === "stagger";

    return (
      <motion.div
        ref={ref}
        initial={
          !isStaggerVariant && animateOnMount
            ? (motionProps as any).initial
            : false
        }
        animate={(motionProps as any).animate}
        exit={!isStaggerVariant ? (motionProps as any).exit : undefined}
        transition={transitions[timing]}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";
