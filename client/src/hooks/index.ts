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

// Style and UI management hooks
export {
  useBackgroundManager,
  useRandomizedStyles,
} from "./useStyleManagement";

// Context hooks
export { useBackgrounds } from "./useBackgrounds";
