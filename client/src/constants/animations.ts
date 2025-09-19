/**
 * Animation duration constants (in seconds)
 * Centralized animation timing values for consistent motion design
 */
export const ANIMATION_DURATIONS = {
  /** Quick interactions - hover, click feedback */
  QUICK: 0.2,
  /** Fast transitions - component state changes */
  FAST: 0.3,
  /** Normal animations - page transitions */
  NORMAL: 0.4,
  /** Smooth animations - section reveals */
  SMOOTH: 0.6,
  /** Slow animations - large content changes */
  SLOW: 1.0,
  /** Background transition timing */
  BACKGROUND_TRANSITION: 0.3,
  /** Hover effect timing */
  HOVER: 0.2,
  /** Stagger delay between animated items */
  STAGGER_DELAY: 0.1,
  /** Modal and drawer animations */
  MODAL: 0.15,
};

/**
 * Animation easing constants
 * Standard easing functions for consistent motion feel
 */
export const ANIMATION_EASINGS = {
  /** Standard ease out for most animations */
  EASE_OUT: "easeOut",
  /** Smooth ease in-out for reversible animations */
  EASE_IN_OUT: "ease-in-out",
  /** Custom bezier curve for premium feel */
  CUSTOM_EASE: [0.25, 0.46, 0.45, 0.94] as const,
  /** Linear easing for continuous animations */
  LINEAR: "linear",
};

/**
 * CSS transition strings for common animations
 * Ready-to-use transition values for CSS-based animations
 */
export const CSS_TRANSITIONS = {
  /** All properties with fast timing */
  ALL_FAST: `all ${ANIMATION_DURATIONS.QUICK}s ease`,
  /** All properties with smooth timing */
  ALL_SMOOTH: `all ${ANIMATION_DURATIONS.NORMAL}s ease-out`,
  /** Opacity transitions */
  OPACITY: `opacity ${ANIMATION_DURATIONS.QUICK}s ease-in-out`,
  /** Transform transitions */
  TRANSFORM: `transform ${ANIMATION_DURATIONS.FAST}s ease-out`,
  /** Color transitions */
  COLORS: `color ${ANIMATION_DURATIONS.QUICK}s ease, background-color ${ANIMATION_DURATIONS.QUICK}s ease`,
};

/**
 * Framer Motion transition presets
 * Common transition configurations for motion components
 */
export const MOTION_TRANSITIONS = {
  smooth: {
    duration: ANIMATION_DURATIONS.SMOOTH,
    ease: ANIMATION_EASINGS.EASE_OUT,
  },
  quick: {
    duration: ANIMATION_DURATIONS.FAST,
    ease: ANIMATION_EASINGS.EASE_OUT,
  },
  slow: {
    duration: ANIMATION_DURATIONS.SLOW,
    ease: ANIMATION_EASINGS.EASE_OUT,
  },
  bounce: {
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
};

/**
 * Animation viewport settings
 * Consistent intersection observer configurations
 */
export const ANIMATION_VIEWPORT = {
  /** Standard viewport trigger */
  once: true,
  amount: 0.2,
};

/**
 * Animation timing type for consistent usage
 */
export type AnimationTiming = keyof typeof MOTION_TRANSITIONS;
