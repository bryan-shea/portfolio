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
 */
export const navigationSections: NavigationSection[] = [
  {
    id: "hero",
    name: "Intro",
    iconName: "LuUser",
    description: "Introduction & overview",
  },
  {
    id: "projects",
    name: "Projects",
    iconName: "LuFolderOpen",
    description: "Featured work",
  },
  {
    id: "journey",
    name: "Journey",
    iconName: "LuMapPin",
    description: "Professional timeline",
  },
];

/**
 * Navigation behavior configuration
 */
export const navigationConfig = {
  /** Default section to highlight on page load */
  defaultSection: navigationSections[0].id,
  /** Scroll behavior when navigating */
  scrollBehavior: "smooth" as const,
  /** Scroll alignment when navigating to sections */
  scrollBlock: "start" as const,
  /** Animation configuration for navigation menu */
  animation: {
    initial: { opacity: 0, scale: 0.8, y: -20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
} as const;

/**
 * Responsive configuration for navigation
 */
export const navigationResponsiveConfig = {
  /** Breakpoint for mobile/desktop navigation */
  mobileBreakpoint: "md",
  /** Mobile menu configuration */
  mobile: {
    showFullButton: false,
    iconSize: "5",
    menuMinWidth: "260px",
  },
  /** Desktop menu configuration */
  desktop: {
    showFullButton: true,
    iconSize: "4",
    menuMinWidth: "300px",
  },
} as const;
