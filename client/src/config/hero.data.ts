import { type ColorPaletteName, type BadgeVariant } from '../utils';

/**
 * Interface for hero section configuration
 */
export interface HeroConfig {
  /** Personal information */
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
  };
  /** Technologies to display as badges */
  technologies: readonly string[];
  /** Available color palettes for badges */
  colorPalettes: readonly ColorPaletteName[];
  /** Available badge variants */
  badgeVariants: readonly BadgeVariant[];
  /** Call-to-action button configurations */
  cta: {
    primary: {
      text: string;
      action: 'scroll' | 'external';
      target: string;
    };
    secondary: {
      text: string;
      action: 'scroll' | 'external';
      target: string;
    };
  };
}

/**
 * Hero section configuration data
 * Contains all static content and styling options for the hero section
 */
export const heroConfig: HeroConfig = {
  personal: {
    name: "Bryan Shea",
    title: "Full Stack Developer",
    bio: "Experienced full-stack developer specializing in modern web applications and cloud-native solutions that drive business growth and exceptional user experiences.",
    email: "bryanshea88@gmail.com",
  },
  technologies: [
    "TypeScript",
    "React",
    "Vite",
    "GraphQL",
    "MongoDB",
    "AWS",
    "Docker",
  ] as const,
  colorPalettes: [
    "gray",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "purple",
    "pink",
  ] as const,
  badgeVariants: ["surface"] as const,
  cta: {
    primary: {
      text: "View My Work",
      action: "scroll",
      target: "projects",
    },
    secondary: {
      text: "Get In Touch",
      action: "external",
      target: "mailto:bryanshea88@gmail.com",
    },
  },
};

/**
 * Hero animation configuration
 */
export const heroAnimationConfig = {
  profilePicture: {
    variant: "scale",
    timing: "bounce",
  },
  nameAndTitle: {
    variant: "slideUp",
    timing: "smooth",
  },
  bio: {
    variant: "fadeIn",
    timing: "smooth",
  },
  technologies: {
    container: {
      variant: "slideUp",
      timing: "smooth",
    },
    badges: {
      variant: "scale",
      timing: "bounce",
      staggerDelay: 0.1,
    },
  },
  ctaButtons: {
    variant: "slideUp",
    timing: "smooth",
  },
} as const;
