# GitHub Copilot Chat Customizations

This directory contains comprehensive chat customizations for the React/TypeScript portfolio project, designed to enforce best practices and maintain architectural consistency.

## Structure

```
.github/
├── copilot-instructions.md      # Main custom instructions (auto-applied)
├── copilot/                     # Chat modes and prompts
│   ├── component-developer.md   # Component development specialist
│   ├── refactoring-specialist.md # Code refactoring specialist
│   ├── styling-specialist.md    # Styling and design system specialist
│   ├── architecture-planner.md  # Architecture and planning specialist
│   └── prompts/                 # Reusable task prompts
│       ├── create-component.md  # New component generation
│       ├── refactor-component.md # Component refactoring guide
│       ├── create-config.md     # Configuration file creation
│       ├── create-hook.md       # Custom hook generation
│       ├── code-review.md       # Code review guidelines
│       └── implementation-plan.md # Feature planning template
```

## Usage

### Custom Instructions (Automatic)

The main `copilot-instructions.md` is automatically applied to all chat sessions. It contains:

- Project architecture and file structure patterns
- TypeScript and component standards
- Chakra UI v3 styling patterns
- Animation and performance guidelines
- Refactoring and quality standards

### Chat Modes (Manual Selection)

Use specific chat modes for focused development tasks:

#### @component-developer

For creating and optimizing React components:

```
@component-developer Create a new ProfileCard component with user info display
```

#### @refactoring-specialist

For breaking down large files and improving code quality:

```
@refactoring-specialist This component is 300 lines - help me refactor it
```

#### @styling-specialist

For design system work and visual consistency:

```
@styling-specialist Review the responsive design patterns in this component
```

#### @architecture-planner

For high-level planning and technical decision-making:

```
@architecture-planner Plan the architecture for a new portfolio section
```

### Prompt Files (Reference)

Use prompt files as templates for common tasks:

- **#file:prompts/create-component.md** - Component creation template
- **#file:prompts/refactor-component.md** - Refactoring guidelines
- **#file:prompts/create-config.md** - Configuration file patterns
- **#file:prompts/create-hook.md** - Custom hook templates
- **#file:prompts/code-review.md** - Code review checklist
- **#file:prompts/implementation-plan.md** - Feature planning template

## Key Enforced Standards

### Component Architecture

- Single component per file (max 200 lines)
- Maximum 5 props per component
- TypeScript interfaces with JSDoc
- Separation of UI, logic, and data

### Styling Standards

- Chakra UI v3 semantic tokens
- Responsive-first design patterns
- Theme integration and color modes
- Consistent spacing and typography

### Code Quality

- Comprehensive TypeScript coverage
- Performance optimization patterns
- Accessibility considerations
- Clear documentation standards

## Benefits

### Consistency Enforcement

- Automatic application of project standards
- Consistent component patterns across development
- Standardized naming and file organization

### Quality Assurance

- Built-in refactoring guidelines
- Performance and accessibility checks
- Type safety enforcement

### Developer Productivity

- Specialized chat modes for different tasks
- Reusable prompt templates
- Comprehensive planning tools

### Knowledge Preservation

- Documented architectural decisions
- Established best practices
- Pattern library and examples

## Getting Started

1. **Start a chat session** - Custom instructions are automatically applied
2. **Choose a specialist mode** for focused tasks using `@mode-name`
3. **Reference prompt files** for specific development patterns
4. **Follow the established patterns** to maintain code quality

These customizations ensure all development follows the project's high standards for maintainability, performance, and consistency while preventing the accumulation of technical debt through large, unwieldy files.
