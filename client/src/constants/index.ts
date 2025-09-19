/**
 * Constants Module
 * Centralized constants for the portfolio application
 *
 * This module provides type-safe access to all application constants
 * including animations, storage keys, UI values, and utility functions.
 */

// Animation constants
export {
  ANIMATION_DURATIONS,
  ANIMATION_EASINGS,
  CSS_TRANSITIONS,
  MOTION_TRANSITIONS,
  ANIMATION_VIEWPORT,
  type AnimationTiming,
} from "./animations";

// Storage constants
export { STORAGE_KEYS, storageUtils, type StorageKey } from "./storage";

// UI constants
export {
  UI_CONSTANTS,
  uiUtils,
  type PerformanceImpact,
  type ColorMode,
} from "./ui";

/**
 * Commonly used constants for quick access
 */
export const COMMON = {
  // Animation shortcuts
  DURATION: {
    QUICK: 0.2,
    SMOOTH: 0.6,
    SLOW: 1.0,
  },

  // Storage shortcuts
  STORAGE: {
    BACKGROUND: "portfolio-background",
    COLORS: "portfolio-color-scheme",
  },

  // UI shortcuts
  THRESHOLD: 0.1,
  Z_MODAL: 2000,
} as const;
