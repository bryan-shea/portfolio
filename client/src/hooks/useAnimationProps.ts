import { useMemo } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import type {
  TargetAndTransition,
  VariantLabels,
  ViewportOptions,
  Transition,
} from "framer-motion";
import { animationVariants, transitions } from "../utils/animations";
import { ANIMATION_VIEWPORT, type AnimationTiming } from "../constants";
import { type ResponsiveValue } from "../utils/types";

/**
 * Props for motion components
 */
export interface MotionProps {
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  viewport?: ViewportOptions;
  transition?: Transition;
  whileHover?: TargetAndTransition | VariantLabels;
  whileTap?: TargetAndTransition | VariantLabels;
}

/**
 * Hook for generating consistent animation props for motion components
 * Provides a centralized way to create animation configurations
 *
 * @param variant - Animation variant key from animationVariants
 * @param timing - Animation timing configuration
 * @param options - Additional motion props to override defaults
 * @returns Complete motion props object
 */
export function useAnimationProps(
  variant: keyof typeof animationVariants = "fadeIn",
  timing: AnimationTiming = "smooth",
  options?: Partial<MotionProps>
): MotionProps {
  return useMemo(
    () => ({
      ...animationVariants[variant],
      transition: {
        ...transitions[timing],
        ...options?.transition,
      } as Transition,
      viewport: {
        ...ANIMATION_VIEWPORT,
        ...options?.viewport,
      },
      ...options,
    }),
    [variant, timing, options]
  );
}

/**
 * Hook for creating staggered animations
 * Useful for animating lists or grids of items
 *
 * @param itemVariant - Animation variant for individual items
 * @param staggerDelay - Delay between item animations
 * @param timing - Animation timing configuration
 * @returns Container and item animation props
 */
export function useStaggerAnimation(
  itemVariant: keyof typeof animationVariants = "fadeIn",
  staggerDelay = 0.1,
  timing: AnimationTiming = "smooth"
) {
  const itemProps = useAnimationProps(itemVariant, timing);

  return useMemo(
    () => ({
      container: {
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            ...transitions[timing],
          } as Transition,
        },
      },
      item: itemProps,
    }),
    [itemProps, staggerDelay, timing]
  );
}

/**
 * Hook for responsive animation values
 * Allows different animation configurations based on screen size
 *
 * @param values - Responsive animation configuration
 * @param timing - Animation timing configuration
 * @returns Responsive motion props
 */
export function useResponsiveAnimation<
  T extends keyof typeof animationVariants,
>(values: ResponsiveValue<T>, timing: AnimationTiming = "smooth"): MotionProps {
  const variant = useBreakpointValue(
    typeof values === "object" && values !== null ? values : { base: values }
  ) as T;

  return useAnimationProps(variant, timing);
}
