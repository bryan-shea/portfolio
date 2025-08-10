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
  actionType: 'modal' | 'toggle' | 'function';
  /** Action-specific metadata */
  metadata?: Record<string, any>;
}

/**
 * Global control actions configuration
 * Defines the available control actions in the global controls menu
 */
export const controlActionsConfig: ControlAction[] = [
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
    id: "background",
    name: "Background",
    iconName: "LuImage",
    description: "Choose background style",
    actionType: "modal",
    metadata: {
      modalType: "background-selector",
    },
  },
  {
    id: "personalize",
    name: "Personalize",
    iconName: "LuPalette",
    description: "Customize colors",
    actionType: "modal",
    metadata: {
      modalType: "personalize",
    },
  },
];

/**
 * Default control action configuration
 */
export const defaultControlAction: ControlAction = {
  id: "settings",
  name: "Settings",
  iconName: "LuSettings",
  description: "Global controls",
  actionType: "function",
};

/**
 * Global controls UI configuration
 */
export const globalControlsConfig = {
  /** Position of the controls */
  position: {
    top: "4",
    right: "4",
    zIndex: "1000",
  },
  /** Animation configuration */
  animation: {
    initial: { opacity: 0, scale: 0.8, y: -20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  /** Responsive configuration */
  responsive: {
    mobileBreakpoint: "md",
    mobile: {
      showFullButton: false,
      iconSize: "5",
      menuMinWidth: "260px",
    },
    desktop: {
      showFullButton: true,
      iconSize: "4",
      menuMinWidth: "300px",
    },
  },
  /** Styling configuration */
  styling: {
    backdrop: {
      light: "white/95",
      dark: "gray.900/95",
    },
    border: {
      light: "gray.200",
      dark: "gray.700",
    },
    background: {
      light: "white/90",
      dark: "gray.900/90",
    },
    hover: {
      light: "white",
      dark: "gray.900",
    },
  },
} as const;
