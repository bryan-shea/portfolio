# Portfolio Project - Copilot Custom Instructions

## Project Overview

This is a modern React portfolio website built with TypeScript, Chakra UI v3, Vite, and Framer Motion. The project follows a component-based architecture with strong separation of concerns, comprehensive TypeScript typing, and consistent patterns throughout.

## Architecture & File Structure

### Workspace Structure

- **Root**: Contains workspace package.json with workspaces configuration
- **client/**: Main application code (React, TypeScript, Vite)
- **client/src/**: Core application source code

### Source Organization

```
src/
├── components/          # Reusable UI components
│   ├── backgrounds/     # Background animation components
│   ├── common/          # Shared components
│   └── ui/             # UI-specific components
├── config/             # Configuration files and data
├── contexts/           # React context providers
├── hooks/              # Custom React hooks
├── sections/           # Page sections (Hero, Projects, etc.)
├── theme/              # Chakra UI theme configuration
├── utils/              # Utility functions and types
└── wrappers/          # Higher-order components
```

## Code Standards & Patterns

### TypeScript Requirements

- **Always use TypeScript**: Every file should have proper TypeScript types
- **Interface over Type**: Use `interface` for object shapes, `type` for unions/primitives
- **Comprehensive Documentation**: Include JSDoc comments for all interfaces, functions, and components
- **Strict Typing**: Avoid `any` - use proper generic constraints or unknown
- **Export Types**: Export all types from their respective modules and re-export from index files

### Component Patterns

#### Component Structure

```tsx
/**
 * Component description with purpose and usage
 */
interface ComponentProps {
  /** Prop description with type info */
  prop: Type;
  /** Optional prop with default behavior */
  optionalProp?: Type;
}

/**
 * Default values or constants
 */
const DEFAULT_CONFIG = {
  // configuration
};

/**
 * Main component with clear purpose
 */
export const ComponentName = ({ prop, optionalProp = defaultValue }: ComponentProps) => {
  // Component logic
  return (
    // JSX with proper Chakra UI patterns
  );
};
```

#### Naming Conventions

- **Components**: PascalCase (e.g., `AnimatedSection`, `BackgroundManager`)
- **Files**: Match component name exactly
- **Props**: camelCase with descriptive names
- **Hooks**: Start with `use` prefix (e.g., `useStyleManagement`)
- **Types**: PascalCase with descriptive suffixes (e.g., `BackgroundType`, `HeroConfig`)
- **Constants**: SCREAMING_SNAKE_CASE for module-level constants

### Chakra UI v3 Patterns

#### Component Usage

- **Always import from @chakra-ui/react**: Use the main package for all components
- **Use System Props**: Leverage Chakra's responsive prop system
- **Theme Integration**: Use semantic tokens from theme (primary, secondary, bg, fg)
- **Responsive Design**: Always consider mobile-first responsive breakpoints

#### Responsive Patterns

```tsx
// Preferred responsive pattern
<Box
  p={{ base: "4", md: "6", lg: "8" }}
  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
  gap={{ base: "2", md: "4" }}
>
```

#### Color Usage

- **Semantic Tokens**: Use theme-defined colors (`primary.500`, `fg.muted`, `bg.surface`)
- **Gradients**: Use `bgGradient` prop for consistent gradient patterns
- **Color Modes**: Ensure all colors work in both light and dark modes

### Animation Patterns

#### Framer Motion Integration

- **MotionWrapper**: Use the project's MotionWrapper for consistent animations
- **Predefined Variants**: Use existing animation variants (scale, slideUp, fadeIn)
- **Performance**: Use `layout` prop cautiously, prefer transform-based animations

#### Animation Standards

```tsx
// Use MotionWrapper for consistent animations
<MotionWrapper variant="slideUp" timing="smooth">
  <Component />
</MotionWrapper>;

// Custom animations should follow similar patterns
const customAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};
```

### Data Configuration Pattern

#### Configuration Files

- **Separate Data from UI**: Keep all static data in `config/` directory
- **Typed Configurations**: Every config should have a corresponding TypeScript interface
- **Immutable Data**: Use `readonly` arrays and `as const` for static data
- **Modular Exports**: Export both the interface and the data

```tsx
// config/section.data.ts
export interface SectionConfig {
  readonly title: string;
  readonly items: readonly string[];
}

export const sectionConfig: SectionConfig = {
  title: "Section Title",
  items: ["item1", "item2"] as const,
};
```

### Hook Patterns

#### Custom Hook Standards

- **Single Responsibility**: Each hook should have one clear purpose
- **TypeScript Generics**: Use generics for reusable hooks
- **Return Tuples/Objects**: Use arrays for related values, objects for multiple unrelated returns
- **Dependencies**: Properly declare dependencies in useCallback/useMemo

```tsx
/**
 * Custom hook description
 */
export function useCustomHook<T>(
  param: T,
  options?: HookOptions
): [T, (newValue: T) => void] {
  // Hook implementation
  return [value, setValue];
}
```

### Performance Considerations

#### Component Optimization

- **React.memo**: Use for components that receive stable props
- **useMemo**: For expensive calculations only
- **useCallback**: For functions passed to child components
- **Key Props**: Always provide stable keys for dynamic lists

#### Bundle Size

- **Tree Shaking**: Use named imports from large libraries
- **Code Splitting**: Consider dynamic imports for large components
- **Asset Optimization**: Use WebP for images, proper sizing

## File Creation Guidelines

### Component Files

1. **Single Component per File**: One main component per file
2. **Co-located Types**: Keep component-specific types in same file
3. **Default Export**: Use default export for main component
4. **Named Exports**: Export types and utilities as named exports

### Index Files

- **Barrel Exports**: Use index.ts files to create clean import paths
- **Re-export Everything**: Export all public APIs from subdirectories
- **Type Exports**: Include `type` keyword for type-only exports

```tsx
// components/common/index.ts
export { AnimatedSection } from "./AnimatedSection";
export { ProfilePicture } from "./ProfilePicture";
export type { AnimatedSectionProps } from "./AnimatedSection";
```

## Refactoring Guidelines

### When to Refactor

- **File Length**: Files over 200 lines should be considered for splitting
- **Component Complexity**: Components with more than 5 props or complex logic
- **Duplicate Code**: Any repeated patterns should be abstracted
- **Type Definitions**: Complex inline types should be extracted

### Refactoring Process

1. **Identify Concerns**: Separate UI, logic, data, and types
2. **Extract Utilities**: Move pure functions to utils/
3. **Create Hooks**: Extract stateful logic to custom hooks
4. **Split Components**: Break large components into smaller, focused ones
5. **Update Imports**: Maintain clean import paths

### Anti-Patterns to Avoid

- **Massive Components**: Components handling multiple concerns
- **Inline Styles**: Use theme system instead of hardcoded values
- **Direct DOM Manipulation**: Use React patterns and refs appropriately
- **Prop Drilling**: Use context for deeply nested props
- **Mixed Concerns**: Don't mix data fetching, UI logic, and presentation

## Testing Considerations

- **Component Testing**: Focus on user interactions and prop variations
- **Hook Testing**: Test custom hooks in isolation
- **Type Testing**: Ensure TypeScript compilation catches errors
- **Accessibility**: Consider a11y in all components

## Git and Commit Standards

- **Feature Branches**: Create branches for each feature/fix
- **Descriptive Commits**: Use clear, descriptive commit messages
- **Small Commits**: Keep commits focused and atomic
- **PR Reviews**: All changes should be reviewed before merging

## Error Handling

- **Graceful Degradation**: Components should handle missing props gracefully
- **Error Boundaries**: Consider error boundaries for complex components
- **Type Guards**: Use type guards for runtime type checking
- **Fallback UI**: Always provide fallback states for dynamic content

## Accessibility

- **Semantic HTML**: Use proper HTML elements and ARIA attributes
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Color Contrast**: Maintain proper contrast ratios
- **Screen Readers**: Test with screen reader technology

This project maintains high standards for code quality, performance, and maintainability. When making changes, always consider the existing patterns and maintain consistency with the established architecture.
