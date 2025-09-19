/**
 * User interface configuration
 * Consolidates navigation, controls, and other UI-related configurations
 */

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================

/**
 * Interface for navigation section
 */
export interface NavigationSection {
  /** Unique identifier for the section */
  id: string;
  /** Display name of the section */
  name: string;
  /** Icon name for the section (will be mapped to component) */
  iconName: string;
  /** Brief description of the section */
  description: string;
  /** Whether this section is external */
  isExternal?: boolean;
  /** External URL if applicable */
  href?: string;
}

/**
 * Portfolio sections configuration for navigation
 * Defines the main sections of the portfolio with their metadata
 * Ordered: intro, projects, journey
 */
export const navigationSections: readonly NavigationSection[] = [
  {
    id: "hero",
    name: "Intro",
    iconName: "LuUser",
    description: "Introduction & overview",
  },
  {
    id: "projects",
    name: "Projects",
    iconName: "LuCode",
    description: "Featured work & case studies",
  },
  {
    id: "journey",
    name: "Journey",
    iconName: "LuMap",
    description: "Education & experience timeline",
  },
];

// ============================================================================
// GLOBAL CONTROLS CONFIGURATION
// ============================================================================

/**
 * Interface for control action
 */
export interface ControlAction {
  /** Unique identifier for the action */
  id: string;
  /** Display name of the action */
  name: string;
  /** Icon name for the action */
  iconName: string;
  /** Description of what the action does */
  description: string;
  /** Type of action to perform */
  actionType: "modal" | "toggle" | "function";
  /** Action-specific metadata */
  metadata?: Record<string, unknown>;
}

/**
 * Global control actions configuration
 * Defines the available control actions in the global controls menu
 */
export const controlActionsConfig: readonly ControlAction[] = [
  {
    id: "theme",
    name: "Toggle Theme",
    iconName: "theme", // Special case - dynamic based on current theme
    description: "Switch between light and dark mode",
    actionType: "toggle",
    metadata: {
      lightIcon: "LuSun",
      darkIcon: "LuMoon",
    },
  },
  {
    id: "palette",
    name: "Color Palette",
    iconName: "LuPalette",
    description: "Change the color scheme",
    actionType: "modal",
    metadata: {
      modalId: "color-palette",
    },
  },
  {
    id: "background",
    name: "Background",
    iconName: "LuLayers",
    description: "Switch background patterns",
    actionType: "modal",
    metadata: {
      modalId: "background-selector",
    },
  },
  {
    id: "settings",
    name: "Settings",
    iconName: "LuSettings",
    description: "Personalize your experience",
    actionType: "modal",
    metadata: {
      modalId: "personalize-drawer",
    },
  },
  {
    id: "info",
    name: "About",
    iconName: "LuInfo",
    description: "About this portfolio",
    actionType: "modal",
    metadata: {
      modalId: "about-modal",
    },
  },
];

// ============================================================================
// BACKGROUND SELECTOR UI CONFIGURATION
// ============================================================================

/**
 * Interface for background selector option metadata
 */
export interface BackgroundSelectorOption {
  /** Background type identifier */
  type: string;
  /** Display name for the background */
  name: string;
  /** Description of the background effect */
  description: string;
  /** Icon name to represent the background */
  iconName: string;
  /** Preview color or theme for the option */
  previewColor?: string;
}

/**
 * Available background selector options configuration
 * Defines the UI metadata for background selection
 */
export const backgroundSelectorOptions: readonly BackgroundSelectorOption[] = [
  {
    type: "grid",
    name: "Subtle Grid",
    description: "Clean geometric grid pattern",
    iconName: "LuGrid3x3",
    previewColor: "gray.200",
  },
  {
    type: "dots",
    name: "Dot Pattern",
    description: "Minimalist dotted background",
    iconName: "LuCircle",
    previewColor: "blue.200",
  },
  {
    type: "orbs",
    name: "Gradient Orbs",
    description: "Floating gradient spheres",
    iconName: "LuCircleDot",
    previewColor: "purple.200",
  },
  {
    type: "particles",
    name: "Floating Particles",
    description: "Dynamic particle animation",
    iconName: "LuSparkles",
    previewColor: "green.200",
  },
  {
    type: "geometric",
    name: "Geometric Shapes",
    description: "Abstract geometric forms",
    iconName: "LuShapes",
    previewColor: "orange.200",
  },
  {
    type: "network",
    name: "Network Nodes",
    description: "Connected node visualization",
    iconName: "LuNetwork",
    previewColor: "cyan.200",
  },
];
