/**
 * UI Constants for consistent spacing, sizing, and behavior
 * Centralized values for consistent user interface design
 */
export const UI_CONSTANTS = {
  /** Intersection Observer thresholds */
  VIEWPORT: {
    /** Standard threshold for element visibility detection */
    THRESHOLD: 0.1,
    /** Threshold for animation triggers */
    ANIMATION_THRESHOLD: 0.3,
    /** Threshold for section active detection */
    SECTION_THRESHOLD: 0.2,
  },

  /** Background animation settings */
  BACKGROUND: {
    /** Connection distance for NetworkNodes background */
    CONNECTION_DISTANCE: 150,
    /** Particle count ranges */
    PARTICLE_COUNT: {
      MIN: 20,
      MAX: 50,
    },
    /** Animation speed multipliers */
    SPEED: {
      SLOW: 0.5,
      NORMAL: 1.0,
      FAST: 2.0,
    },
  },

  /** Animation stagger settings */
  STAGGER: {
    /** Default delay between child animations */
    CHILDREN_DELAY: 0.1,
    /** Container animation delay */
    CONTAINER_DELAY: 0.05,
  },

  /** Z-index layers for consistent stacking */
  Z_INDEX: {
    /** Background elements */
    BACKGROUND: -1,
    /** Regular content */
    CONTENT: 1,
    /** Fixed navigation */
    NAVIGATION: 10,
    /** Dropdown menus */
    DROPDOWN: 100,
    /** Overlay elements */
    OVERLAY: 1000,
    /** Modal dialogs */
    MODAL: 2000,
    /** Toast notifications */
    TOAST: 3000,
  },

  /** Performance impact ratings */
  PERFORMANCE: {
    /** Low impact - simple animations */
    LOW: 2,
    /** Medium impact - moderate animations */
    MEDIUM: 4,
    /** High impact - complex animations */
    HIGH: 6,
  },

  /** Responsive breakpoint helpers */
  BREAKPOINTS: {
    /** Mobile breakpoint */
    MOBILE: 480,
    /** Tablet breakpoint */
    TABLET: 768,
    /** Desktop breakpoint */
    DESKTOP: 1024,
    /** Large desktop breakpoint */
    LARGE: 1200,
  },

  /** Color mode constants */
  COLOR_MODE: {
    LIGHT: "light",
    DARK: "dark",
    SYSTEM: "system",
  },

  /** Common size constants */
  SIZES: {
    /** Avatar sizes */
    AVATAR: {
      SMALL: "40px",
      MEDIUM: "64px",
      LARGE: "128px",
    },
    /** Icon sizes */
    ICON: {
      SMALL: "16px",
      MEDIUM: "24px",
      LARGE: "32px",
    },
  },

  /** Timing constants for user interactions */
  TIMING: {
    /** Debounce delay for search/input */
    DEBOUNCE_DELAY: 300,
    /** Throttle delay for scroll events */
    THROTTLE_DELAY: 16,
    /** Auto-hide delay for temporary elements */
    AUTO_HIDE_DELAY: 3000,
  },
};

/**
 * Performance impact type for type safety
 */
export type PerformanceImpact = keyof typeof UI_CONSTANTS.PERFORMANCE;

/**
 * Color mode type for type safety
 */
export type ColorMode =
  (typeof UI_CONSTANTS.COLOR_MODE)[keyof typeof UI_CONSTANTS.COLOR_MODE];

/**
 * Utility functions for UI constants
 */
export const uiUtils = {
  /**
   * Get performance impact rating
   */
  getPerformanceRating: (impact: PerformanceImpact): number => {
    return UI_CONSTANTS.PERFORMANCE[impact];
  },

  /**
   * Check if viewport width matches breakpoint
   */
  isBreakpoint: (
    width: number,
    breakpoint: keyof typeof UI_CONSTANTS.BREAKPOINTS
  ): boolean => {
    return width >= UI_CONSTANTS.BREAKPOINTS[breakpoint];
  },

  /**
   * Get z-index value for layer
   */
  getZIndex: (layer: keyof typeof UI_CONSTANTS.Z_INDEX): number => {
    return UI_CONSTANTS.Z_INDEX[layer];
  },
};
