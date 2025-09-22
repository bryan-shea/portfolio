# Personal Portfolio Website

A modern, interactive portfolio website showcasing my work as a full-stack developer. Built with cutting-edge web technologies and featuring advanced theming, dynamic backgrounds, and accessibility-first design.

🌐 **[Live Website](https://bryan-shea.github.io/portfolio/)**

## ✨ Highlights

- **Dynamic Theming**: Real-time color palette switching with 10+ built-in themes
- **Interactive Backgrounds**: Multiple animated background options (geometric shapes, floating particles, gradient orbs, dot patterns)
- **Personalization**: User preferences persisted locally with seamless experience
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessibility First**: WCAG compliant with proper ARIA attributes and keyboard navigation
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundle sizes
- **Developer Experience**: Type-safe development with comprehensive TypeScript coverage

## 🛠️ Tech Stack

### Core Technologies

- **React 19** with **TypeScript** - Latest React features with full type safety
- **Vite** - Lightning-fast development and optimized production builds
- **Chakra UI v3** - Modern component library with advanced theming system
- **Framer Motion** - Smooth, performant animations with accessibility support
- **React Router v7** - Latest routing with data loading patterns

### Development & Tooling

- **pnpm Workspaces** - Efficient monorepo package management
- **ESLint + Prettier** - Comprehensive code quality and formatting
- **TypeScript Strict Mode** - Maximum type safety and developer experience
- **Workspace Orchestration Framework (WOF)** - Quality gates and development workflow

### Architectural Patterns

- **Component-Driven Development** - Reusable, tested components with clear interfaces
- **Custom Hook Architecture** - Business logic separated from UI concerns
- **Semantic Token System** - Design system with light/dark mode support
- **Context + Reducer Pattern** - Predictable state management for complex features

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (20+ recommended)
- **pnpm** (preferred) or npm

### Development Setup

```bash
# Clone and setup
git clone https://github.com/bryan-shea/portfolio.git
cd portfolio
pnpm install

# Start development server
pnpm dev
```

## 📁 Project Architecture

This project uses a **monorepo workspace structure** with clear separation of concerns:

```text
portfolio/
├── client/                           # React application workspace
│   ├── src/
│   │   ├── components/               # Reusable UI components
│   │   ├── sections/                 # Main page sections
│   │   ├── theme/                    # Chakra UI theme system
│   │   ├── config/                   # Static data and configuration
│   │   ├── contexts/                 # React context providers
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── utils/                    # Helper functions and types
│   │   └── assets/                   # Static assets
│   └── public/                       # Build output assets
├── .wof/                            # Workspace Orchestration Framework
├── .github/                         # CI/CD and deployment
└── package.json                     # Workspace configuration
```

## 🎨 Advanced Features

### Dynamic Theming System

- **10 Color Palettes**: Ocean Blue, Forest Green, Sunset Orange, Purple Magic, Rose Pink, and more
- **Semantic Tokens**: Consistent color system that adapts to light/dark modes
- **Real-time Updates**: CSS custom properties dynamically updated for instant theme changes
- **Accessibility Compliant**: All color combinations meet WCAG contrast requirements

### Interactive Background Engine

- **Multiple Background Types**: Geometric shapes, floating particles, gradient orbs, dot patterns
- **Performance Optimized**: Efficient canvas rendering with RAF-based animations
- **Customizable**: Each background type supports multiple configuration options
- **Responsive**: Adapts animation complexity based on device capabilities

### User Personalization

- **Persistent Preferences**: Theme and background choices saved to localStorage
- **Smooth Transitions**: Animated transitions between different configurations
- **Reset Functionality**: Easy way to return to default settings

## 🔧 Development Scripts

```bash
# Development workflow
pnpm dev                    # Start development server with hot reload
pnpm type-check            # TypeScript validation across all files
pnpm lint                  # ESLint analysis with auto-fixable suggestions
pnpm format                # Prettier code formatting (auto-fix)
pnpm format:check          # Check code formatting without changes

# Production builds
pnpm build                 # Production build with optimization
pnpm preview               # Preview production build locally
pnpm deploy                # Deploy to GitHub Pages

# Quality assurance (WOF Pipeline)
pnpm ci                    # Full CI pipeline: type → lint → format → build
pnpm ci:fix                # Auto-fix issues then run CI pipeline
pnpm ci:simple             # CI with progress indicators and clear output
```

## 🏗️ Key Dependencies

### Runtime Dependencies

- **@chakra-ui/react** `^3.23.0` - Modern React component library
- **framer-motion** `^12.23.12` - Production-ready animation library
- **react** `^19.1.0` - Latest React with concurrent features
- **react-router-dom** `^7.8.0` - Client-side routing
- **react-icons** `^5.5.0` - Comprehensive icon library
- **@emotion/react** `^11.14.0` - CSS-in-JS styling engine
- **next-themes** `^0.4.6` - Theme management system
- **shiki** `^3.12.2` - Syntax highlighting for code blocks

### Development Dependencies

- **typescript** `^5.0.0` - Static type checking
- **vite** - Build tool and dev server
- **eslint** - Code linting and quality checks
- **prettier** - Code formatting
- **gh-pages** `^6.2.0` - GitHub Pages deployment

## 🚀 Deployment

This project is automatically deployed to **GitHub Pages** using GitHub Actions:

- **Production**: [bryan-shea.github.io/portfolio](https://bryan-shea.github.io/portfolio/)
- **Build Process**: Automated on push to `main` branch
- **Optimization**: Vite handles code splitting, tree shaking, and asset optimization
- **CDN**: GitHub Pages provides global CDN distribution

### Manual Deployment

```bash
pnpm build    # Generate production build
pnpm deploy   # Deploy dist/ to gh-pages branch
```

## 🧪 Code Quality & Testing

### Quality Assurance Pipeline

The project uses **Workspace Orchestration Framework (WOF)** providing comprehensive quality gates *(detailed documentation coming soon!)*:

1. **Type Safety**: TypeScript strict mode with comprehensive coverage
2. **Code Quality**: ESLint with React, TypeScript, and accessibility rules
3. **Code Formatting**: Prettier with consistent styling across all files
4. **Build Validation**: Production build success verification

### Code Standards

- **TypeScript**: Strict mode enabled with comprehensive type coverage
- **Component Pattern**: Functional components with proper TypeScript interfaces
- **Hook Pattern**: Custom hooks for business logic separation
- **Accessibility**: ARIA attributes, semantic HTML, keyboard navigation
- **Performance**: React.memo, useMemo, useCallback for optimization
- **Code Style**: Consistent formatting via Prettier and ESLint

## 🎯 Performance Optimizations

- **Code Splitting**: Route-based and component-based lazy loading
- **Bundle Analysis**: Optimized bundle sizes with tree shaking
- **Asset Optimization**: Compressed images, efficient asset loading
- **Animation Performance**: GPU-accelerated animations with reduced motion support
- **Caching Strategy**: Efficient browser caching with proper headers
- **Lighthouse Scores**: 95+ performance, accessibility, and SEO scores
