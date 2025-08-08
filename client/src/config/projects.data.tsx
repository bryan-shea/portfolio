import { FaCar, FaShieldAlt, FaRobot, FaTree } from "react-icons/fa"

export const projects = [
  {
    id: "myprojectcar",
    title: "MyProjectCar Marketplace",
    subtitle: "Marketplace for Project Cars & Parts", // Consider matching the site's exact tagline if different
    description: `
      A marketplace built for car-restoration enthusiasts. Shoppers can browse project cars
      and parts with filters like make, model, and year; save searches; set alerts; and
      message sellers. Sellers create listings with photos and details and get notified
      when buyers show interest. Includes tools for organizing finds and tracking listings.
    `,
    tech: ["React", "Node.js", "Chakra UI", "TypeScript", "PostgreSQL", "AWS"],
    category: "Automotive Marketplace",
    status: "Production",
    timeline: "≈8 months",
    team: "Lead Full-Stack Developer",
    icon: FaCar,
    metrics: [
      // Replace these with site-verifiable stats if you want hard numbers shown in UI:
      "Search by make, model & year",
      "Saved searches & alerts",
      "Buyer–seller messaging"
    ],
    highlights: [
      "Targeted filters for project cars & parts",
      "Alerted matches for saved searches",
      "Seller tools with photo-rich listings"
    ]
  },
  {
    id: "spscyber",
    title: "Silent Partner Solutions",
    subtitle: "People-Centered Cybersecurity & AI Advisory",
    description: `
      A cybersecurity and AI consultancy focused on practical, people-first outcomes.
      The site presents services spanning security strategy, compliance enablement,
      assessments, and AI adoption guidance, with cross-industry experience in defense,
      IT, finance, education, and consumer products.
    `,
    tech: ["React", "Next.js", "TypeScript", "Chakra UI", "Vite", "AWS"],
    category: "Corporate Website / Cybersecurity Consulting",
    status: "Production",
    timeline: "≈6 months",
    team: "UI/UX Designer & Developer",
    icon: FaShieldAlt,
    metrics: [
      // Swapped unverifiable counts for factual themes:
      "Security strategy & assessments",
      "Compliance enablement",
      "AI adoption guidance across industries"
    ],
    highlights: [
      "People-first delivery & partnerships",
      "Multi-industry expertise",
      "Practical, compliance-aware roadmaps"
    ]
  },
  {
    id: "fencegpt",
    title: "FenceGPT AI Assistant",
    subtitle: "AI Assistant for Fence Professionals",
    description: `
      An AI assistant purpose-built for fence companies and teams. Provides a curated
      knowledge base, step-by-step guidance, and workflows that help estimate, plan,
      and document jobs. Offers a free trial and tiered subscriptions with team-friendly
      features like chat history and usage exports.
    `,
    tech: ["React", "Node.js", "Chakra UI", "Python", "LangChain", "Stripe", "AWS"],
    category: "AI SaaS Platform",
    status: "Production",
    timeline: "≈7 months",
    team: "Lead Developer",
    icon: FaRobot,
    metrics: [
      // Avoid % accuracy claims unless we can cite them:
      "Curated industry knowledge base",
      "Free trial & tiered plans",
      "Team usage exports & chat retention"
    ],
    highlights: [
      "How-to guidance and job workflows",
      "Industry-specific prompts & context",
      "Admin controls for teams"
    ]
  },
  {
    id: "waysidefence",
    title: "Wayside Fence Company",
    subtitle: "Materials, Fabrication & Installation Services",
    description: `
      An online storefront and brand site for professional fence materials and services.
      Showcases vinyl, wood, and aluminum options—plus gates, posts, and accessories—
      with support for quotes and professional installation. Serves homeowners,
      contractors, and property managers.
    `,
    tech: ["React", "Next.js", "TypeScript", "Chakra UI", "Stripe", "AWS"],
    category: "E-Commerce & Services",
    status: "Production",
    timeline: "≈6 months",
    team: "Full-Stack Developer",
    icon: FaTree,
    metrics: [
      // If you want location specifics, keep these if accurate; otherwise use generic:
      "Bay Shore, NY & Newington, CT locations", // Confirm exact city names if needed
      "In-house wood, PVC & welding shops",
      "Wide range of fence styles & accessories"
    ],
    highlights: [
      "Professional construction & installation",
      "Diverse materials: vinyl, wood, aluminum",
      "Easy online shopping & quote requests"
    ]
  }
]

