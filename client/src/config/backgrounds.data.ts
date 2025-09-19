import {
  FloatingParticles,
  DotPattern,
  GeometricShapes,
  SubtleGrid,
  GradientOrbs,
  NetworkNodes,
} from "../components/backgrounds";

/**
 * Available background types
 */
export type BackgroundType =
  | "none"
  | "particles"
  | "dots"
  | "shapes"
  | "grid"
  | "orbs"
  | "network";

/**
 * Interface for background option configuration
 */
export interface BackgroundOption {
  /** Unique identifier for the background */
  type: BackgroundType;
  /** Display name for the background */
  name: string;
  /** Description of the background effect */
  description: string;
  /** React component to render */
  component: React.ComponentType;
  /** Preview image or icon name */
  preview?: string;
  /** Performance impact level (1-5, 5 being highest) */
  performanceImpact?: number;
  /** Whether background supports color theming */
  supportsTheming?: boolean;
}

/**
 * Available background options with their configurations
 * Each background provides a different visual experience
 */
export const backgroundOptions: BackgroundOption[] = [
  {
    type: "none",
    name: "None",
    description: "Clean background without animations",
    component: () => null,
    performanceImpact: 1,
    supportsTheming: false,
  },
  {
    type: "particles",
    name: "Floating Particles",
    description: "Subtle floating particles with gentle movement",
    component: FloatingParticles,
    performanceImpact: 3,
    supportsTheming: true,
  },
  {
    type: "dots",
    name: "Dot Pattern",
    description: "Simple dot pattern with varying opacity",
    component: DotPattern,
    performanceImpact: 2,
    supportsTheming: true,
  },
  {
    type: "shapes",
    name: "Geometric Shapes",
    description: "Elegant floating geometric forms with smooth animations",
    component: GeometricShapes,
    performanceImpact: 4,
    supportsTheming: true,
  },
  {
    type: "grid",
    name: "Subtle Grid",
    description: "Minimal grid pattern with gentle floating animation",
    component: SubtleGrid,
    performanceImpact: 2,
    supportsTheming: true,
  },
  {
    type: "orbs",
    name: "Gradient Orbs",
    description: "Soft gradient spheres with floating animation",
    component: GradientOrbs,
    performanceImpact: 4,
    supportsTheming: true,
  },
  {
    type: "network",
    name: "Network Nodes",
    description: "Interconnected nodes with dynamic connections",
    component: NetworkNodes,
    performanceImpact: 5,
    supportsTheming: true,
  },
];

/**
 * Default background configuration
 */
export const backgroundDefaults = {
  /** Default background type */
  defaultBackground: "grid" as BackgroundType,
  /** localStorage key for persistence */
  storageKey: "portfolio-background",
  /** Fallback background if stored value is invalid */
  fallbackBackground: "grid" as BackgroundType,
};

/**
 * Background categories for organization
 */
export const backgroundCategories = {
  minimal: ["none", "dots", "grid"],
  animated: ["particles", "shapes", "orbs"],
  complex: ["network"],
  lowPerformance: backgroundOptions
    .filter(bg => bg.performanceImpact && bg.performanceImpact <= 2)
    .map(bg => bg.type),
  highPerformance: backgroundOptions
    .filter(bg => bg.performanceImpact && bg.performanceImpact >= 4)
    .map(bg => bg.type),
};

/**
 * Background selector configuration
 */
export const backgroundSelectorConfig = {
  /** Grid layout for background options */
  grid: {
    columns: { base: 1, sm: 2, md: 3 },
    gap: 4,
  },
  /** Animation configuration */
  animation: {
    staggerDelay: 0.1,
    variant: "fadeIn",
    timing: "smooth",
  },
  /** Preview configuration */
  preview: {
    height: "120px",
    borderRadius: "md",
    showPerformanceInfo: true,
  },
};
