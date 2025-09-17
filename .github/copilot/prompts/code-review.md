# Code Review Guidelines

Comprehensive code review checklist and guidelines for maintaining code quality and consistency in the React/TypeScript portfolio project.

## Pre-Review Checklist

### TypeScript & Type Safety

- [ ] All components have proper TypeScript interfaces
- [ ] No use of `any` type (use `unknown` or proper types)
- [ ] Generic types used appropriately for reusable components
- [ ] All exports include proper type exports
- [ ] JSDoc comments for all interfaces and functions

### Component Structure

- [ ] Single component per file (max 200 lines)
- [ ] Maximum 5 props per component
- [ ] Proper component naming (PascalCase)
- [ ] Default exports for components, named exports for types
- [ ] Consistent file structure pattern followed

### Chakra UI & Styling

- [ ] Uses semantic tokens instead of hardcoded colors
- [ ] Responsive design implemented with mobile-first approach
- [ ] Proper use of Chakra UI component props
- [ ] Consistent spacing using theme values
- [ ] Color mode compatibility (light/dark themes)

### Code Quality

- [ ] No duplicate code patterns
- [ ] Proper error handling and fallback states
- [ ] Performance considerations (React.memo if needed)
- [ ] Proper dependency arrays in hooks
- [ ] Clean imports (no unused imports)

## Review Focus Areas

### 1. Architecture & Patterns

**Good:**

```tsx
// Proper separation of concerns
const { data } = useConfigData();
const { actions } = useComponentLogic(data);

return <PresentationalComponent data={data} actions={actions} />;
```

**Avoid:**

```tsx
// Mixed concerns in single component
const Component = () => {
  // Data fetching
  // Complex state logic
  // UI rendering
  // All in one place
};
```

### 2. TypeScript Implementation

**Good:**

```tsx
interface Props {
  /** Clear description of purpose */
  items: readonly Item[];
  /** Optional callback with default behavior */
  onItemClick?: (item: Item) => void;
}
```

**Avoid:**

```tsx
interface Props {
  items: any[]; // No any types
  onItemClick: Function; // Too generic
}
```

### 3. Responsive Design

**Good:**

```tsx
<Box p={{ base: "4", md: "6", lg: "8" }} fontSize={{ base: "md", md: "lg" }} />
```

**Avoid:**

```tsx
<Box p="20px" fontSize="16px" /> // Fixed values
```

### 4. Configuration Pattern

**Good:**

```tsx
// Separate configuration
export const config: Config = {
  title: "Section Title",
  items: [...] as const,
} as const;

// Use in component
const Component = () => {
  const { title, items } = config;
  // ...
};
```

**Avoid:**

```tsx
// Inline data
const Component = () => {
  const title = "Hardcoded Title";
  const items = ["item1", "item2"]; // Should be in config
  // ...
};
```

## Common Issues to Flag

### Performance Issues

- Missing React.memo for stable prop components
- Incorrect useCallback/useMemo dependencies
- Large components that should be split
- Inefficient re-renders

### Accessibility Issues

- Missing ARIA attributes
- Poor color contrast
- Missing keyboard navigation
- No semantic HTML structure

### Maintainability Issues

- Components over 200 lines
- More than 5 props per component
- Hardcoded values instead of theme tokens
- Missing documentation

## Review Comments Template

### Positive Feedback

- "Great use of TypeScript interfaces with clear documentation!"
- "Excellent responsive design implementation"
- "Good separation of concerns with config extraction"

### Constructive Feedback

- "Consider extracting this repeated pattern into a custom hook"
- "This component could be split into smaller focused components"
- "Use semantic tokens instead of hardcoded colors for theme consistency"
- "Add JSDoc documentation for this interface"

## Approval Criteria

### ✅ Ready to Merge

- All checklist items passed
- TypeScript compilation successful
- Follows established patterns
- Comprehensive documentation
- No architectural debt introduced

### ⚠️ Needs Changes

- Missing TypeScript coverage
- Violates component size limits
- Inconsistent with established patterns
- Missing documentation

### ❌ Major Issues

- Breaking changes without migration plan
- Security vulnerabilities
- Performance regressions
- Architectural anti-patterns

Always provide constructive feedback and suggest improvements that align with the project's established patterns and quality standards.
