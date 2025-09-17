import {
  MongoDB,
  React,
  Vite,
  GraphQL,
  TypeScript,
  ChakraUI,
  AWS,
  FramerMotion,
  Vitest,
  Playwright,
} from "../components/common/tech-logos";

/**
 * Interface for tech stack item
 */
export interface TechStackItem {
  /** Display name of the technology */
  name: string;
  /** React component for the logo/icon */
  component: React.ComponentType;
  /** Category grouping for the technology */
  category?: string;
  /** Proficiency level (1-5) */
  proficiency?: number;
  /** Years of experience */
  experience?: number;
}

/**
 * Interface for skill tech category grouping
 */
export interface SkillTechCategory {
  /** Category name */
  name: string;
  /** Technologies in this category */
  technologies: string[];
  /** Display color for the category */
  color: string;
  /** Category description */
  description?: string;
}

/**
 * Complete tech stack configuration
 * Organized with logo components and metadata
 */
export const techStackConfig: TechStackItem[] = [
  {
    name: "React",
    component: React,
    category: "Frontend",
    proficiency: 5,
    experience: 4,
  },
  {
    name: "TypeScript",
    component: TypeScript,
    category: "Languages",
    proficiency: 5,
    experience: 3,
  },
  {
    name: "Vite",
    component: Vite,
    category: "Build Tools",
    proficiency: 4,
    experience: 2,
  },
  {
    name: "Chakra UI",
    component: ChakraUI,
    category: "UI Libraries",
    proficiency: 5,
    experience: 2,
  },
  {
    name: "GraphQL",
    component: GraphQL,
    category: "API",
    proficiency: 4,
    experience: 3,
  },
  {
    name: "MongoDB",
    component: MongoDB,
    category: "Databases",
    proficiency: 4,
    experience: 3,
  },
  {
    name: "AWS",
    component: AWS,
    category: "Cloud",
    proficiency: 4,
    experience: 3,
  },
  {
    name: "Playwright",
    component: Playwright,
    category: "Testing",
    proficiency: 4,
    experience: 2,
  },
  {
    name: "Vitest",
    component: Vitest,
    category: "Testing",
    proficiency: 4,
    experience: 2,
  },
  {
    name: "Framer Motion",
    component: FramerMotion,
    category: "Animation",
    proficiency: 4,
    experience: 2,
  },
];

/**
 * Tech categories for grouping and organization
 */
export const skillTechCategories: SkillTechCategory[] = [
  {
    name: "Frontend",
    technologies: ["React", "TypeScript", "Chakra UI", "Vite", "Framer Motion"],
    color: "blue",
    description: "User interface and client-side development",
  },
  {
    name: "Backend",
    technologies: ["Node.js", "GraphQL", "Express"],
    color: "green",
    description: "Server-side development and APIs",
  },
  {
    name: "Databases",
    technologies: ["MongoDB", "PostgreSQL", "Redis"],
    color: "purple",
    description: "Data storage and management",
  },
  {
    name: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "CI/CD"],
    color: "orange",
    description: "Cloud infrastructure and deployment",
  },
  {
    name: "Testing",
    technologies: ["Playwright", "Vitest", "Jest"],
    color: "teal",
    description: "Quality assurance and testing frameworks",
  },
];

/**
 * Split tech stack into sets for display purposes
 * Useful for animations like conveyor belts or grids
 */
export const techStackSets = {
  setA: techStackConfig.slice(0, Math.ceil(techStackConfig.length / 2)),
  setB: techStackConfig.slice(Math.ceil(techStackConfig.length / 2)),
  primary: techStackConfig.filter(
    tech => tech.proficiency && tech.proficiency >= 4
  ),
  secondary: techStackConfig.filter(
    tech => tech.proficiency && tech.proficiency < 4
  ),
};

/**
 * Animation configuration for tech stack display
 */
export const techStackAnimationConfig = {
  marquee: {
    speed: "20s",
    directions: {
      setA: "up" as const,
      setB: "down" as const,
    },
    gutter: "4",
    height: "600px",
  },
  grid: {
    staggerDelay: 0.1,
    variant: "fadeIn" as const,
    timing: "smooth" as const,
  },
} as const;
