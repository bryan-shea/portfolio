# Create Configuration File

Create a new configuration file following the project's data separation pattern and TypeScript standards.

## Requirements

1. **TypeScript Interface**: Define comprehensive interface for the configuration
2. **Data Separation**: Keep all static data separate from UI components
3. **Immutability**: Use readonly arrays and proper const assertions
4. **Documentation**: Include JSDoc comments for all interfaces and data
5. **Modular Exports**: Export both interface and data

## Template Structure

```tsx
// config/section.data.ts

/**
 * Interface for section configuration
 * Describes the shape and purpose of configuration data
 */
export interface SectionConfig {
  /** Section title displayed in UI */
  readonly title: string;
  /** Section description or subtitle */
  readonly description?: string;
  /** List of items to display */
  readonly items: readonly ItemConfig[];
  /** Display options and settings */
  readonly display: {
    readonly columns: number;
    readonly spacing: string;
    readonly animation: boolean;
  };
}

/**
 * Interface for individual items within the section
 */
export interface ItemConfig {
  /** Unique identifier for the item */
  readonly id: string;
  /** Display name */
  readonly name: string;
  /** Optional description */
  readonly description?: string;
  /** Additional metadata */
  readonly metadata?: Record<string, unknown>;
}

/**
 * Section configuration data
 * Contains all static content and settings for the section
 */
export const sectionConfig: SectionConfig = {
  title: "Section Title",
  description: "Optional section description",
  items: [
    {
      id: "item1",
      name: "Item 1",
      description: "Description for item 1",
    },
    {
      id: "item2",
      name: "Item 2",
      description: "Description for item 2",
    },
  ] as const,
  display: {
    columns: 3,
    spacing: "6",
    animation: true,
  },
} as const;
```

## Configuration Guidelines

### Data Types

- Use `readonly` for arrays and object properties
- Add `as const` for literal types and immutable data
- Define clear interfaces with JSDoc documentation
- Use proper TypeScript unions for limited options

### File Organization

- Place in appropriate config/ subdirectory
- Name files with `.data.ts` suffix
- Export from config/index.ts for clean imports
- Group related configurations together

### Documentation Standards

```tsx
/**
 * Main interface description
 */
export interface Config {
  /** Property description with expected behavior */
  property: Type;
  /** Optional property with default explanation */
  optionalProperty?: Type;
}

/**
 * Configuration data description
 * Include usage context and any important notes
 */
export const config: Config = {
  // Implementation
} as const;
```

## Quality Checklist

- [ ] Comprehensive TypeScript interfaces
- [ ] JSDoc comments for all public APIs
- [ ] Readonly properties and arrays
- [ ] Proper const assertions
- [ ] Clear naming conventions
- [ ] Modular exports
- [ ] Integration with existing config pattern

## Integration Pattern

```tsx
// Component usage
import { sectionConfig } from "../config";

export const Section = () => {
  const { title, items, display } = sectionConfig;

  return (
    <Container>
      <Heading>{title}</Heading>
      <Grid columns={display.columns} gap={display.spacing}>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Grid>
    </Container>
  );
};
```

Ensure all configuration follows the project's established patterns for data separation and type safety.
