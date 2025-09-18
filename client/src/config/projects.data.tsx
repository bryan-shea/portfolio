import { portfolioImages } from "../assets/portfolio";

export const projects = [
  {
    id: "myprojectcar",
    title: "myprojectcar.com",
    subtitle: "Marketplace for Project Cars & Parts",
    description: `
      Full-stack automotive marketplace revolutionizing car restoration projects. Features
      comprehensive parts marketplace, virtual garage project management, real-time notifications,
      and integrated shipping. Credits system with free/premium tiers, community features,
      and transaction management with buyer protection for car enthusiasts.
    `,
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Chakra UI",
      "AWS S3",
      "EasyPost API",
      "Stripe",
      "Docker",
      "Playwright",
    ],
    category: "Automotive Marketplace / Project Management",
    status: "Production",
    timeline: "2024",
    team: "Full-Stack Developer • UI/UX Designer • System Architect",
    icon: portfolioImages.MPC.logo,
    architecture: "Node.js + GraphQL + MongoDB",
    userBase: "Car Enthusiasts & Restorers",
    keyFeature: "Virtual Garage Management",
    metrics: [
      "Smart search by make, model & year",
      "Real-time notifications & messaging",
      "Credits system with flexible pricing",
    ],
    highlights: [
      "Comprehensive parts marketplace",
      "Project management & progress tracking",
      "EasyPost integration for seamless shipping",
    ],
  },
  {
    id: "spscyber",
    title: "spscyber.com",
    subtitle: "People-First Cybersecurity & AI Advisory",
    description: `
      Comprehensive digital platform for cybersecurity consultancy specializing in human-
      centered security approaches. Features interactive service showcases, immersive hero
      sections with video backgrounds, team carousels, and partnership programs. Complete
      digital transformation demonstrating innovative people-first methodology.
    `,
    tech: [
      "TypeScript",
      "React",
      "Chakra UI",
      "Vite",
      "Motion/Framer Motion",
      "Storybook",
      "Vitest",
      "Playwright",
    ],
    category: "Corporate Website / Digital Platform",
    status: "Production",
    timeline: "2024",
    team: "Full-Stack Developer • UI/UX Designer • Frontend Engineer • Motion Designer",
    icon: portfolioImages.SPS.logo,
    architecture: "React + Vite + Motion",
    userBase: "Enterprise Cybersecurity Clients",
    keyFeature: "Interactive User Experience",
    metrics: [
      "Interactive service showcases & presentations",
      "Multi-step contact forms with analytics",
      "Performance-optimized responsive design",
    ],
    highlights: [
      "Human-centered security methodology",
      "Immersive video backgrounds & animations",
      "Team & advisory board carousels",
    ],
  },
  {
    id: "fencegpt",
    title: "fencegpt.com",
    subtitle: "AI Assistant for Fence Professionals",
    description: `
      Specialized AI chatbot revolutionizing the fence industry with accurate, industry-
      specific guidance. Built with comprehensive knowledge base from leading professionals,
      combining RAG with deep expertise for cost estimation, material calculations, and
      installation best practices. Features subscription tiers and team collaboration.
    `,
    tech: [
      "TypeScript",
      "React",
      "LangChain",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Chakra UI",
      "Apollo Client",
      "AWS S3",
      "Stripe",
      "Mongoose",
      "Express",
    ],
    category: "AI SaaS Platform",
    status: "Production",
    timeline: "2024",
    team: "Full-Stack Developer • UI/UX Designer",
    icon: portfolioImages.FenceGPT.logo,
    architecture: "Node.js + GraphQL + RAG",
    userBase: "Fence Industry Professionals",
    keyFeature: "Industry-Specific AI",
    metrics: [
      "Comprehensive fence industry knowledge base",
      "Real-time AI assistance & project tools",
      "Flexible subscription tiers with team features",
    ],
    highlights: [
      "RAG-powered industry expertise",
      "Cost estimation & material calculations",
      "Project management & collaboration tools",
    ],
  },
  {
    id: "waysidefence",
    title: "waysidefence.com",
    subtitle: "Materials, Fabrication & Installation Services",
    description: `
      React/Chakra UI frontend with Node.js/Express GraphQL backend on MongoDB. Features
      dynamic content modules, admin dashboard with CRUD operations, Ecwid e-commerce
      integration, mobile-first responsive design, and real-time content management.
      Comprehensive platform empowering scalable showcase and management capabilities.
    `,
    tech: [
      "TypeScript",
      "React",
      "Chakra UI",
      "GraphQL",
      "Apollo Client",
      "Node.js",
      "Express",
      "MongoDB",
      "Jest",
    ],
    category: "E-Commerce Platform / Content Management",
    status: "Production",
    timeline: "2023-11-01",
    team: "Frontend Engineer • Backend Engineer",
    icon: portfolioImages.Wayside.logo,
    architecture: "React + GraphQL + MongoDB",
    userBase: "Fence Industry Clients",
    keyFeature: "Dynamic Content Management",
    metrics: [
      "Dynamic content modules & admin dashboard",
      "Ecwid e-commerce integration",
      "Mobile-first responsive design with dark mode",
    ],
    highlights: [
      "Real-time content management system",
      "Role-based admin access controls",
      "Integrated quote & inquiry forms",
    ],
  },
];
