# Create Custom Hook

Generate a new custom React hook following the project's patterns for reusable logic and state management.

## Requirements

1. **Single Responsibility**: Hook should have one clear purpose
2. **TypeScript Generics**: Use generics for reusable hooks
3. **Proper Dependencies**: Declare dependencies correctly in useCallback/useMemo
4. **Documentation**: Include comprehensive JSDoc comments
5. **Return Pattern**: Use appropriate return type (tuple, object, or single value)

## Template Structure

```tsx
// hooks/useCustomHook.ts
import { useState, useCallback, useMemo } from "react";

/**
 * Options interface for hook configuration
 */
interface UseCustomHookOptions {
  /** Option description */
  option1?: boolean;
  /** Another option with default behavior */
  option2?: string;
}

/**
 * Return type for the hook
 */
interface UseCustomHookReturn<T> {
  /** Current value */
  value: T;
  /** Function to update value */
  setValue: (newValue: T) => void;
  /** Computed derived state */
  computedValue: string;
  /** Action functions */
  actions: {
    reset: () => void;
    toggle: () => void;
  };
}

/**
 * Custom hook description
 * Explain what the hook does and when to use it
 *
 * @param initialValue - Initial value for the hook
 * @param options - Configuration options
 * @returns Object with value, setter, and utility functions
 */
export function useCustomHook<T>(
  initialValue: T,
  options: UseCustomHookOptions = {}
): UseCustomHookReturn<T> {
  const { option1 = false, option2 = "default" } = options;

  const [value, setValueState] = useState<T>(initialValue);

  const setValue = useCallback((newValue: T) => {
    setValueState(newValue);
    // Additional logic if needed
  }, []);

  const computedValue = useMemo(() => {
    // Expensive computation
    return String(value);
  }, [value]);

  const actions = useMemo(
    () => ({
      reset: () => setValue(initialValue),
      toggle: () => {
        // Toggle logic based on type
        if (typeof value === "boolean") {
          setValue(!value as T);
        }
      },
    }),
    [setValue, initialValue, value]
  );

  return {
    value,
    setValue,
    computedValue,
    actions,
  };
}
```

## Hook Patterns

### State Management Hook

```tsx
export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  return [value, toggle];
}
```

### API/Data Hook

```tsx
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Implementation
}
```

### Effect Hook

```tsx
export function useScrollPosition(): { x: number; y: number } {
  // Implementation with useEffect
}
```

## Quality Standards

- **Performance**: Use useCallback and useMemo appropriately
- **Dependencies**: Properly declare all dependencies
- **TypeScript**: Comprehensive typing with generics where appropriate
- **Documentation**: JSDoc comments for hook and all parameters
- **Return Type**: Consistent return pattern (tuple for related values, object for multiple unrelated)

## Hook Checklist

- [ ] Clear single responsibility
- [ ] TypeScript interfaces and generics
- [ ] JSDoc documentation
- [ ] Proper dependency declarations
- [ ] Performance optimizations (useCallback/useMemo)
- [ ] Error handling where appropriate
- [ ] Consistent return pattern
- [ ] Integration with existing hook patterns

## Integration

```tsx
// Export from hooks/index.ts
export { useCustomHook } from './useCustomHook';
export type { UseCustomHookOptions } from './useCustomHook';

// Usage in components
const MyComponent = () => {
  const { value, setValue, actions } = useCustomHook(initialValue, options);

  return (
    // Component implementation
  );
};
```

Follow the project's established patterns for hook creation and maintain consistency with existing custom hooks.
