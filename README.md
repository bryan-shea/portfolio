# Personal Portfolio - Source Code

This repository contains the source code for my personal portfolio website. Built with modern web technologies and best practices, focusing on performance, accessibility, and maintainable code architecture.

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Chakra UI v3 with custom theming
- **Animations**: Framer Motion for smooth interactions
- **Routing**: React Router v7
- **Package Manager**: pnpm with workspace configuration

## 🚀 Development Setup

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Getting Started

```bash
# Clone and install
git clone https://github.com/bryan-shea/portfolio.git
cd portfolio
pnpm install

# Start development server
pnpm dev
```

Development server runs at `http://localhost:5173`

## 📁 Architecture

Monorepo structure with clear separation of concerns:

```text
├── client/                    # React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── backgrounds/   # Background animation components
│   │   │   ├── common/        # Shared components
│   │   │   └── ui/           # UI-specific components
│   │   ├── sections/         # Main page sections
│   │   ├── theme/            # Chakra UI theme system
│   │   ├── config/           # Static data and configuration
│   │   ├── contexts/         # React context providers
│   │   ├── hooks/            # Custom React hooks
│   │   └── utils/            # Helper functions and types
│   └── public/               # Static assets
└── package.json              # Workspace configuration
```

## 🧱 Key Features

- **Component-driven architecture** with TypeScript interfaces
- **Custom Chakra UI theme** with semantic tokens and responsive design
- **Performance optimizations** including code splitting and lazy loading
- **Accessibility first** with proper ARIA attributes and keyboard navigation
- **Modern animations** using Framer Motion with reduced motion support

## � Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload
pnpm type-check       # TypeScript validation
pnpm lint             # ESLint code analysis
pnpm format           # Prettier code formatting

# Production
pnpm build            # Production build
pnpm preview          # Preview production build locally

# CI/CD
pnpm ci               # Full pipeline: type-check → lint → format → build
pnpm ci:fix           # Auto-fix and run pipeline
```

## 🏗️ Dependencies

### Core

- React 19, TypeScript, Vite
- Chakra UI v3, Framer Motion
- React Router v7, React Icons

### Development

- ESLint, Prettier, TypeScript
- gh-pages for deployment

---

_This repository showcases modern React development patterns and is actively maintained._
