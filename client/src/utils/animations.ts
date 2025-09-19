/**
 * Animation configuration and utilities
 */

import { MOTION_TRANSITIONS } from "../constants";

/**
 * Common animation variants for framer-motion
 */
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

/**
 * Common transition configurations
 */
export const transitions = MOTION_TRANSITIONS;

/**
 * Utility function to create consistent animation props
 * @param variant - Animation variant key
 * @param transition - Transition configuration key
 * @returns Motion props object
 */
export const createAnimationProps = (
  variant: keyof typeof animationVariants,
  transition: keyof typeof transitions = "smooth"
) => ({
  ...animationVariants[variant],
  transition: transitions[transition],
});

/**
 * Utility function to create staggered animation for lists
 * @param itemVariant - Animation variant for individual items
 * @param staggerDelay - Delay between item animations
 * @returns Container and item animation props
 */
export const createStaggerAnimation = (
  itemVariant: keyof typeof animationVariants = "fadeIn",
  staggerDelay = 0.1
) => ({
  container: {
    animate: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  },
  item: animationVariants[itemVariant],
});
