import { FaShieldAlt, FaRobot, FaTree } from "react-icons/fa";

export const projects = [
  {
    id: "myprojectcar",
    title: "myprojectcar.com",
    subtitle: "Marketplace for Project Cars & Parts",
    description: `
      Full-stack marketplace connecting automotive enthusiasts with project cars and parts.
      Implemented advanced search functionality, user authentication, messaging system, and
      secure payment processing to create a comprehensive ecommerce platform.
    `,
    // include: EasyPost
    tech: ["React", "Next.js", "TypeScript", "Chakra UI", "SSG", "AWS"],
    category: "Cybersecurity Consulting",
    status: "Production",
    timeline: "≈4 months",
    team: "Full-Stack Developer",
    icon: FaShieldAlt,
    architecture: "Next.js + SSG",
    userBase: "Enterprise Clients",
    keyFeature: "Security Focus",
    metrics: [
      "Comprehensive security assessments",
      "AI adoption & compliance strategies",
      "People-first cybersecurity approach",
    ],
    highlights: [
      "Enterprise security consulting",
      "AI governance frameworks",
      "Compliance roadmap development",
    ],
  },
  {
    id: "spscyber",
    title: "spscyber.com",
    subtitle: "People-First Cybersecurity & AI Advisory",
    description: `
	  Corporate website for SPS Cyber, a cybersecurity consulting firm specializing in
	  security strategy, compliance enablement, and AI adoption guidance. Focused on
	  delivering people-first solutions and practical roadmaps across industries.
	`,
    // include: WebifyUI, GraphQL, Apollo Client
    tech: [
      "MERN",
      "Chakra UI",
      "TypeScript",
      "Vite",
      "AWS",
      "WebifyUI",
      "GraphQL",
      "Apollo Client",
    ],
    category: "Corporate Website / Cybersecurity Consulting",
    status: "Production",
    timeline: "≈6 months",
    team: "UI/UX Designer & Developer",
    icon: FaShieldAlt,
    architecture: "Next.js + SSG",
    userBase: "Enterprise Clients",
    keyFeature: "Responsive Design",
    metrics: [
      // Swapped unverifiable counts for factual themes:
      "Security strategy & assessments",
      "Compliance enablement",
      "AI adoption guidance across industries",
    ],
    highlights: [
      "People-first delivery & partnerships",
      "Multi-industry expertise",
      "Practical, compliance-aware roadmaps",
    ],
  },
  {
    id: "fencegpt",
    title: "fencegpt.com",
    subtitle: "AI Assistant for Fence Professionals",
    description: `
      AI-powered SaaS platform for fence industry professionals. Integrated OpenAI APIs
      with LangChain to deliver specialized knowledge base, automated workflows, and team
      collaboration features. Implemented subscription billing and usage analytics.
    `,
    tech: [
      "React",
      "Node.js",
      "Chakra UI",
      "Python",
      "LangChain",
      "Stripe",
      "AWS",
    ],
    category: "AI SaaS Platform",
    status: "Production",
    timeline: "≈7 months",
    team: "Lead Developer",
    icon: FaRobot,
    architecture: "Python + OpenAI",
    userBase: "SaaS Subscribers",
    keyFeature: "AI Integration",
    metrics: [
      // Avoid % accuracy claims unless we can cite them:
      "Curated industry knowledge base",
      "Free trial & tiered plans",
      "Team usage exports & chat retention",
    ],
    highlights: [
      "RAG-based document retrieval",
      "Custom knowledge base isolation",
      "Team collaboration features",
    ],
  },
  {
    id: "waysidefence",
    title: "waysidefence.com",
    subtitle: "Materials, Fabrication & Installation Services",
    description: `
      E-commerce platform for fence materials and professional services. Built comprehensive
      product catalog with quote system, inventory management, and multi-location service
      coordination. Integrated Stripe for secure payment processing.
    `,
    tech: ["React", "Next.js", "TypeScript", "Chakra UI", "Stripe", "AWS"],
    category: "E-Commerce & Services",
    status: "Production",
    timeline: "≈6 months",
    team: "Full-Stack Developer",
    icon: FaTree,
    architecture: "Next.js + Stripe",
    userBase: "E-commerce Platform",
    keyFeature: "Payment Processing",
    metrics: [
      // If you want location specifics, keep these if accurate; otherwise use generic:
      "Bay Shore, NY & Newington, CT locations", // Confirm exact city names if needed
      "In-house wood, PVC & welding shops",
      "Wide range of fence styles & accessories",
    ],
    highlights: [
      "Industry material & supply",
      "Custom CMS dashboard",
      "Lead ingestion & management",
    ],
  },
];
