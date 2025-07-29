// /C:/Codebase 2.0/portfolio/client/src/config/projects.data.tsx

import React from "react"
import { FaCar, FaShieldAlt, FaRobot, FaTree } from "react-icons/fa"

export const projects = [
	{
		id: "myprojectcar",
		title: "MyProjectCar Marketplace",
		subtitle: "AI-Driven Car Restoration Platform",
		description: `
			A marketplace connecting car-restoration enthusiasts. Buyers can request parts,
			set up alerts for matching listings, and communicate directly with sellers.
			Sellers create free listings with photos and details and receive notifications
			when buyers express interest. The platform uses AI to optimize searches by
			make, model, and year and includes a virtual garage for browsing thousands
			of parts.
		`,
		tech: ["React", "Node.js", "Chakra UI", "TypeScript", "PostgreSQL", "AWS"],
		category: "Automotive Marketplace",
		status: "Production",
		timeline: "≈8 months",
		team: "Lead Full-Stack Developer",
		icon: FaCar,
		metrics: [
			"57 vehicle makes available",
			"2,700 models",
			"155,000+ car parts in database"
		],
		highlights: [
			"AI-optimized search by make, model & year",
			"Buyer/seller alert system",
			"Free listings & virtual garage"
		]
	},
	{
		id: "spscyber",
		title: "Silent Partner Solutions",
		subtitle: "People-Centered Cybersecurity & AI",
		description: `
			A cybersecurity and AI consultancy focused on people-first solutions. The site
			highlights their mission to deliver tailored security, AI, and compliance
			strategies, showcases cross-industry expertise in defense, IT, finance,
			education, and consumer products, and emphasizes a collaborative approach
			that accelerates adoption and embeds compliance.
		`,
		tech: ["React", "Next.js", "TypeScript", "Chakra UI", "Vite", "AWS"],
		category: "Corporate Website / Cybersecurity Consulting",
		status: "Production",
		timeline: "≈6 months",
		team: "UI/UX Designer & Developer",
		icon: FaShieldAlt,
		metrics: [
			"25% of U.S. industries served",
			"140+ skills adopted",
			"300+ innovations operationalized",
			"1,200+ solutions delivered"
		],
		highlights: [
			"People-first mission & partnerships",
			"Multi-industry expertise",
			"Research-backed strategies",
			"Compliance & innovation focus"
		]
	},
	{
		id: "fencegpt",
		title: "FenceGPT AI Assistant",
		subtitle: "Generative AI for Fence Professionals",
		description: `
			An AI assistant tailored to fence professionals, offering a curated knowledge
			base, live industry updates, and a free 7-day trial for premium features.
			Supports tiered subscriptions (Free, Pro, Teams) with unlimited daily prompts,
			chat retention, how-to guides, and exportable usage data.
		`,
		tech: ["React", "Node.js", "Chakra UI", "Python", "LangChain", "Stripe", "AWS"],
		category: "AI SaaS Platform",
		status: "Production",
		timeline: "≈7 months",
		team: "Lead Developer",
		icon: FaRobot,
		metrics: [
			"98% data accuracy",
			"50% faster implementation",
			"3.5M+ data points processed",
			"100% custom-built for fence professionals"
		],
		highlights: [
			"Curated knowledge base",
			"Education-driven resources",
			"Live industry updates",
			"7-day free trial & flexible plans"
		]
	},
	{
		id: "waysidefence",
		title: "Wayside Fence Company",
		subtitle: "Beyond Fence, Beyond Boundaries",
		description: `
			An online storefront for professional fence materials and services. Showcases a
			wide range of options—from pool and pet fences to privacy and vinyl styles—
			and offers durable products in vinyl, wood, and aluminum, plus gates, posts,
			and caps.
		`,
		tech: ["React", "Next.js", "TypeScript", "Chakra UI", "Stripe", "AWS"],
		category: "E-Commerce & Services",
		status: "Production",
		timeline: "≈6 months",
		team: "Full-Stack Developer",
		icon: FaTree,
		metrics: [
			"2 physical locations (Bay Shore, NY & Newington, CT)",
			"Professional wood, PVC & welding shops",
			"Wide range of fence styles",
			"Durable materials: vinyl, wood & aluminum"
		],
		highlights: [
			"Meticulous construction services",
			"Diverse fencing options",
			"High-quality products & accessories",
			"Easy online shopping & quote requests"
		]
	}
]
