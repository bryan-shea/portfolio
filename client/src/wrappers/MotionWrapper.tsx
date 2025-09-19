import {
  motion,
  type HTMLMotionProps,
  type TargetAndTransition,
  type VariantLabels,
} from "framer-motion";
import { forwardRef } from "react";
import { animationVariants, type AnimationTiming } from "../utils";
import { useAnimationProps } from "../hooks";

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
    initial?: TargetAndTransition | VariantLabels | boolean;
    animate?: TargetAndTransition | VariantLabels | boolean;
    exit?: TargetAndTransition | VariantLabels;
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
    // Use the animation props hook to get consistent transition
    const animationConfig = useAnimationProps(variant, timing);

    // Use custom animation if provided, otherwise use variant
    const selectedVariant = animationVariants[variant];
    const motionProps = animation || selectedVariant;

    // Handle stagger variant differently as it doesn't have initial/exit
    const isStaggerVariant = variant === "stagger";

    return (
      <motion.div
        ref={ref}
        initial={
          !isStaggerVariant && animateOnMount && "initial" in motionProps
            ? motionProps.initial
            : false
        }
        animate={"animate" in motionProps ? motionProps.animate : undefined}
        exit={
          !isStaggerVariant && "exit" in motionProps
            ? motionProps.exit
            : undefined
        }
        transition={animationConfig.transition}
        viewport={animationConfig.viewport}
        whileInView={animationConfig.whileInView}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";
