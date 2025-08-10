import {
  ApolloApiCert,
  ApolloGraphCert,
  DSACert,
  GoogleUXProcessCert,
  GoogleUXFoundationsCert,
  CS50Cert,
} from "../assets";

/**
 * Interface for journey milestone data
 */
export interface JourneyMilestone {
  /** Unique identifier for the milestone */
  id: string;
  /** Year the milestone was achieved */
  year: string;
  /** Title of the achievement/course */
  title: string;
  /** Institution or platform that provided the learning */
  category: string;
  /** Detailed description of what was learned */
  description: string;
  /** Array of skills acquired during this milestone */
  skills: string[];
  /** Name of the certificate or achievement earned */
  achievement: string;
  /** Color theme for the milestone display */
  color: string;
  /** Path to the certificate image */
  certImage?: string;
}

/**
 * Interface for tech category data
 */
export interface TechCategory {
  /** Name of the technology category */
  name: string;
  /** Array of technologies in this category */
  technologies: string[];
  /** Color theme for the category */
  color: string;
}

/**
 * Journey milestones in reverse chronological order (most recent first)
 * This showcases the learning progression from foundations to advanced certifications
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "apollo-api",
    year: "2024",
    title: "Apollo API Orchestration Associate",
    category: "Apollo GraphQL",
    description:
      "Advanced GraphQL concepts including federation, supergraph architecture, and API orchestration.",
    skills: [
      "GraphQL Federation",
      "API Gateway",
      "Microservices",
      "Schema Stitching",
    ],
    achievement: "API Orchestration Associate",
    color: "indigo",
    certImage: ApolloApiCert,
  },
  {
    id: "apollo-graph",
    year: "2024",
    title: "Apollo Graph Associate",
    category: "Apollo GraphQL",
    description:
      "GraphQL fundamentals, schema design, resolver implementation, and Apollo Server configuration.",
    skills: [
      "GraphQL",
      "Apollo Server",
      "Schema Design",
      "Type Definitions",
      "Resolvers",
    ],
    achievement: "Apollo Graph Associate",
    color: "indigo",
    certImage: ApolloGraphCert,
  },
  {
    id: "dsa",
    year: "2023",
    title: "Data Structures & Algorithms",
    category: "Udemy",
    description:
      "Deep dive into algorithmic thinking, problem-solving patterns, and optimization techniques.",
    skills: [
      "Big O Notation",
      "Sorting Algorithms",
      "Graph Theory",
      "Dynamic Programming",
    ],
    achievement: "DSA Mastery",
    color: "green",
    certImage: DSACert,
  },
  {
    id: "ux-process",
    year: "2023",
    title: "UX Design Process",
    category: "Google UI/UX",
    description:
      "Advanced UX design process including user journey mapping, information architecture, and usability testing.",
    skills: [
      "Journey Mapping",
      "Information Architecture",
      "Usability Testing",
      "Design Systems",
    ],
    achievement: "UX Process Certificate",
    color: "purple",
    certImage: GoogleUXProcessCert,
  },
  {
    id: "ux-foundations",
    year: "2023",
    title: "UX Design Foundations",
    category: "Google UI/UX",
    description:
      "User experience design principles, user research, prototyping, and design thinking methodologies.",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Thinking",
      "Accessibility",
    ],
    achievement: "UX Design Certificate",
    color: "purple",
    certImage: GoogleUXFoundationsCert,
  },
  {
    id: "foundations",
    year: "2022",
    title: "CS50x - Computer Science Foundations",
    category: "Harvard University",
    description:
      "Introduction to computer science and programming with C, Python, SQL, and web development fundamentals.",
    skills: ["C Programming", "Python", "SQL", "Data Structures", "Algorithms"],
    achievement: "CS50x Certificate",
    color: "blue",
    certImage: CS50Cert,
  },
];

/**
 * Technical expertise categories organized by domain
 * Used to showcase skill progression across different technology areas
 */
export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Chakra UI",
      "Vite",
    ],
    color: "cyan",
  },
  {
    name: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo Server",
      "MongoDB",
    ],
    color: "green",
  },
  {
    name: "DevOps & Cloud",
    technologies: ["AWS", "Docker", "CI/CD", "Git", "Deployment"],
    color: "orange",
  },
  {
    name: "Design & UX",
    technologies: [
      "Figma",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Accessibility",
    ],
    color: "purple",
  },
];
