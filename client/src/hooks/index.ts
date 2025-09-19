/**
 * Centralized exports for all custom hooks
 * Provides clean imports and better organization
 */

// Storage hooks
export { useLocalStorage } from "./useLocalStorage";

// Navigation and scroll hooks
export {
  useScrollTo,
  useScrollPosition,
  useInViewport,
  useActiveSection,
} from "./useScroll";

// Journey progress tracking
export {
  useJourneyProgress,
  useJourneyScrollProgress,
} from "./useJourneyProgress";
export type { JourneyProgress } from "./useJourneyProgress";

// Style and UI management hooks
export {
  useBackgroundManager,
  useRandomizedStyles,
} from "./useStyleManagement";

// Animation and motion hooks
export {
  useAnimationProps,
  useStaggerAnimation,
  useResponsiveAnimation,
  type MotionProps,
} from "./useAnimationProps";

// Responsive design hooks
export {
  useResponsiveValue,
  useResponsiveBoolean,
  useResponsiveNumber,
  useResponsiveString,
} from "./useResponsiveValue";

// Theme management hooks
export { useThemeManipulation } from "./useThemeManipulation";

// Background orchestration hooks
export {
  useBackgroundOrchestrator,
  type BackgroundOption,
} from "./useBackgroundOrchestrator";

// Context hooks (re-exported for convenience)
export { useBackgrounds } from "../contexts";
