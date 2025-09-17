# Refactor Large Component

Break down a large or complex component into smaller, focused components following the project's architectural patterns.

## Analysis Phase

1. **Component Assessment**: Identify the component's responsibilities and concerns
2. **Complexity Evaluation**: Assess prop count, file length, and complexity
3. **Pattern Recognition**: Look for repeated JSX or logic patterns
4. **Dependency Mapping**: Understand state and prop dependencies

## Refactoring Strategy

### 1. Identify Extraction Opportunities

- **Sub-components**: Repeated JSX patterns or logical UI sections
- **Custom Hooks**: Stateful logic that can be isolated
- **Utility Functions**: Pure functions that can be moved to utils/
- **Configuration**: Static data that can be moved to config/

### 2. Component Splitting Pattern

```tsx
// Before: Large component
export const LargeComponent = ({ manyProps }) => {
  // Complex logic
  // Lots of JSX
};

// After: Split into focused components
export const MainComponent = ({ essentialProps }) => {
  return (
    <Container>
      <HeaderSection {...headerProps} />
      <ContentSection {...contentProps} />
      <FooterSection {...footerProps} />
    </Container>
  );
};
```

### 3. Hook Extraction Pattern

```tsx
// Extract stateful logic to custom hook
const useComponentState = (config) => {
  const [state, setState] = useState(config.initial);
  // Complex state logic
  return { state, actions };
};

// Use in component
export const Component = (props) => {
  const { state, actions } = useComponentState(props.config);
  // Simple render logic
};
```

## Quality Standards

- **File Size**: Keep components under 200 lines
- **Props Count**: Maximum 5 props per component
- **Single Responsibility**: Each component should have one clear purpose
- **Type Safety**: Maintain comprehensive TypeScript typing
- **Documentation**: Update JSDoc comments for all new components

## Refactoring Checklist

- [ ] Identify component boundaries and responsibilities
- [ ] Extract reusable sub-components
- [ ] Move complex logic to custom hooks
- [ ] Extract configuration data to config files
- [ ] Update TypeScript interfaces
- [ ] Maintain existing functionality
- [ ] Update import/export statements
- [ ] Add JSDoc documentation
- [ ] Test component functionality

## Best Practices

- **Preserve Functionality**: Ensure no breaking changes
- **Maintain Patterns**: Follow existing architectural patterns
- **Incremental Changes**: Make small, focused refactoring steps
- **Type Safety**: Keep TypeScript coverage comprehensive
- **Performance**: Consider React.memo for pure components

Focus on creating maintainable, focused components that align with the project's established patterns and quality standards.
