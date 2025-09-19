/**
 * Application content configuration
 * Consolidates hero, contact, journey, and skills configuration
 */

import { type CodeFile } from "../components/ui/code-block/data";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { LuTerminal } from "react-icons/lu";

// Certificate image imports
import {
  CS50Cert,
  ApolloApiCert,
  ApolloGraphCert,
  DSACert,
  GoogleUXFoundationsCert,
  GoogleUXProcessCert,
} from "../assets";

// ============================================================================
// HERO SECTION CONFIGURATION
// ============================================================================

/**
 * Interface for hero section configuration
 */
export interface HeroConfig {
  readonly name: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly callToAction: string;
}

/**
 * Hero section configuration data
 */
export const heroConfig: HeroConfig = {
  name: "Bryan Shea",
  title: "Full Stack Developer",
  subtitle: "Building Modern Web Applications",
  description:
    "Passionate developer focused on creating innovative solutions with React, TypeScript, Node.js, and GraphQL. I transform ideas into scalable, user-centric applications.",
  callToAction: "Let's Build Something Amazing",
};

// ============================================================================
// CONTACT INFORMATION CONFIGURATION
// ============================================================================

/**
 * Interface for contact information
 */
export interface ContactInfo {
  readonly email: string;
  readonly phone?: string;
  readonly location: string;
  readonly social: {
    readonly github: string;
    readonly linkedin: string;
  };
}

/**
 * Interface for contact code block configuration
 */
export interface ContactCodeConfig {
  readonly contactInfo: ContactInfo;
  readonly codeFiles: readonly CodeFile[];
}

/**
 * Contact information data
 */
export const contactInfo: ContactInfo = {
  email: "bryanshea88@gmail.com",
  location: "New York, NY",
  social: {
    github: "https://github.com/bryan-shea",
    linkedin: "https://www.linkedin.com/in/bryan-shea-79882631b/",
  },
};

/**
 * Contact code block configuration
 */
export const contactCodeConfig: ContactCodeConfig = {
  contactInfo,
  codeFiles: [
    {
      title: "contact.json",
      value: "contact",
      code: `{
  "name": "Bryan Shea",
  "email": "${contactInfo.email}",
  "location": "${contactInfo.location}",
  "social": {
    "github": "${contactInfo.social.github}",
    "linkedin": "${contactInfo.social.linkedin}"
  },
}`,
      language: "json",
      icon: LuTerminal,
    },
  ],
};

/**
 * Contact buttons configuration
 */
export const contactButtons = [
  {
    label: "GitHub",
    href: contactInfo.social.github,
    icon: IoLogoGithub,
    colorScheme: "gray" as const,
    variant: "outline" as const,
  },
  {
    label: "LinkedIn",
    href: contactInfo.social.linkedin,
    icon: IoLogoLinkedin,
    colorScheme: "blue" as const,
    variant: "outline" as const,
  },
];

// ============================================================================
// JOURNEY/TIMELINE CONFIGURATION
// ============================================================================

/**
 * Interface for journey step
 */
export interface JourneyStep {
  readonly id: string;
  readonly title: string;
  readonly organization: string;
  readonly period: string;
  readonly year: string;
  readonly description: string;
  readonly skills: readonly string[];
  readonly type: "education" | "experience" | "achievement";
  readonly achievement?: string;
  readonly certImage?: string;
}

/**
 * Journey steps configuration
 */
export const journeySteps: readonly JourneyStep[] = [
  {
    id: "harvard-cs50",
    title: "CS50: Introduction to Computer Science",
    organization: "Harvard University",
    period: "2023",
    year: "2023",
    description:
      "Completed Harvard's renowned computer science course, gaining foundational knowledge in algorithms, data structures, and programming fundamentals.",
    skills: [
      "C",
      "Python",
      "JavaScript",
      "SQL",
      "Algorithms",
      "Data Structures",
    ],
    type: "education",
    achievement: "Certificate of Completion from Harvard University",
    certImage: CS50Cert,
  },
  {
    id: "google-ux-foundations",
    title: "Google UX Design - Foundations",
    organization: "Google",
    period: "2024",
    year: "2024",
    description:
      "Foundational course in user experience design covering design thinking, user research methodologies, and core UX principles.",
    skills: [
      "Design Thinking",
      "User Research",
      "Wireframing",
      "Prototyping Basics",
      "UX Principles",
      "Accessibility",
    ],
    type: "education",
    achievement: "Google UX Design Foundations Certificate",
    certImage: GoogleUXFoundationsCert,
  },
  {
    id: "google-ux-design-process",
    title: "Google UX Design - Design Process",
    organization: "Google",
    period: "2024",
    year: "2024",
    description:
      "Advanced UX design course focusing on end-to-end design processes, user testing, and design systems implementation.",
    skills: [
      "User Testing",
      "Design Systems",
      "Figma",
      "Advanced Prototyping",
      "Design Documentation",
      "Iterative Design",
    ],
    type: "education",
    achievement: "Google UX Design Process Certificate",
    certImage: GoogleUXProcessCert,
  },
  {
    id: "dsa-specialization",
    title: "Data Structures and Algorithms Specialization",
    organization: "UC San Diego",
    period: "2024",
    year: "2024",
    description:
      "Comprehensive specialization covering advanced data structures, algorithmic techniques, and computational problem-solving strategies.",
    skills: [
      "Advanced Data Structures",
      "Algorithm Design",
      "Computational Complexity",
      "Problem Solving",
      "Optimization",
    ],
    type: "education",
    achievement: "Specialization Certificate with Honors",
    certImage: DSACert,
  },
  {
    id: "apollo-api-orchestration",
    title: "Apollo GraphQL API Orchestration",
    organization: "Apollo GraphQL",
    period: "2025",
    year: "2025",
    description:
      "Professional certification in GraphQL API orchestration, demonstrating expertise in building and managing enterprise-grade GraphQL architectures.",
    skills: [
      "GraphQL",
      "Apollo Server",
      "API Gateway",
      "Schema Orchestration",
      "Microservices Integration",
    ],
    type: "achievement",
    achievement: "Apollo API Orchestration Associate Certificate",
    certImage: ApolloApiCert,
  },
  {
    id: "apollo-graph-developer",
    title: "Apollo Graph Developer Certification",
    organization: "Apollo GraphQL",
    period: "2025",
    year: "2025",
    description:
      "Comprehensive certification covering GraphQL schema design, resolver implementation, and best practices for scalable graph development.",
    skills: [
      "GraphQL Schema Design",
      "Resolver Development",
      "Apollo Client",
      "Graph Federation",
      "Performance Optimization",
    ],
    type: "achievement",
    achievement: "Apollo Graph Developer Professional Certificate",
    certImage: ApolloGraphCert,
  },
];

// ============================================================================
// SKILLS CONFIGURATION
// ============================================================================

/**
 * Interface for skill category
 */
export interface SkillCategory {
  readonly name: string;
  readonly skills: readonly string[];
}

/**
 * Skills configuration organized by category
 */
export const skillsConfig: readonly SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Chakra UI",
      "React Query",
      "Zustand",
      "Vite",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "GraphQL",
      "Apollo Server",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      "Docker",
      "AWS",
      "Vercel",
      "Git",
      "GitHub Actions",
      "ESLint",
      "Prettier",
      "Jest",
    ],
  },
  {
    name: "Design & UX",
    skills: [
      "Figma",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Accessibility",
      "Responsive Design",
    ],
  },
];
