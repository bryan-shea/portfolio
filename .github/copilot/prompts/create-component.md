# Create React Component

Generate a new React component following the project's established patterns and best practices.

## Requirements

1. **TypeScript Interface**: Create a comprehensive props interface with JSDoc comments
2. **Component Structure**: Follow the standard component pattern from the codebase
3. **Styling**: Use Chakra UI v3 components with semantic tokens
4. **Responsive Design**: Implement mobile-first responsive patterns
5. **Animation**: Integrate with MotionWrapper if animations are needed
6. **Documentation**: Include JSDoc comments for the component and its props

## Template Structure

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
 * Default values or constants (if needed)
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

## Styling Guidelines

- Use semantic tokens: `primary.500`, `fg.muted`, `bg.surface`
- Implement responsive props: `{{ base: "sm", md: "lg" }}`
- Follow consistent spacing: `p={{ base: "4", md: "6" }}`
- Use proper color modes for light/dark theme support

## File Organization

- Place component in appropriate directory (`components/common/`, `components/ui/`, etc.)
- Export from relevant index.ts file
- Include both component and type exports

## Quality Checklist

- [ ] TypeScript interface with JSDoc comments
- [ ] Responsive design implementation
- [ ] Semantic token usage
- [ ] Component documentation
- [ ] Proper error handling/fallbacks
- [ ] Accessibility considerations
- [ ] Performance optimization (React.memo if needed)

Always maintain consistency with existing component patterns and the established architecture.
