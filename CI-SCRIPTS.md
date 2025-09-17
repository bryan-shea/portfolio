# CI Scripts Documentation

This portfolio project includes comprehensive CI scripts to ensure code quality, formatting, and build integrity.

## Available Commands

### 🚀 Main CI Commands

#### `pnpm run ci`

**Full CI Pipeline** - Runs all checks with enhanced logging and colored output:

1. ✅ TypeScript type checking
2. 🔍 ESLint code quality checks
3. 💅 Prettier formatting validation
4. 🏗️ Production build verification

**Enhanced Features:**

- Colored progress indicators
- Step-by-step feedback
- Detailed error reporting
- Performance warnings eliminated

#### `pnpm run ci:fix`

**Auto-Fix Pipeline** - Attempts to automatically resolve issues:

1. 💅 Auto-format code with Prettier
2. 🔧 Auto-fix ESLint issues (where possible)
3. ✅ TypeScript type checking
4. 🏗️ Production build verification

**Features:**

- Shows what was fixed automatically
- Reports remaining manual fixes needed
- Continues through fixable errors

#### `pnpm run ci:simple`

**Simple CI Pipeline** - Basic version without Node.js modules:

- Uses shell commands instead of Node.js scripts
- Good fallback if permissions issues occur
- Same checks, simpler output

### 🛠️ Individual Commands

- `pnpm run type-check` - TypeScript compilation check only
- `pnpm run lint` - ESLint code quality check only
- `pnpm run lint:fix` - Auto-fix ESLint issues only
- `pnpm run format` - Format all code files
- `pnpm run format:check` - Check if files are properly formatted

## Configuration Files

### `.prettierrc`

Prettier configuration with consistent formatting rules:

- Semi-colons enabled
- Double quotes for strings
- 80 character line width
- 2-space indentation
- ES5 trailing commas

### `.prettierignore`

Excludes build outputs, dependencies, and generated files from formatting.

## Workflow Integration

### Development Workflow

```bash
# Before committing changes
pnpm run ci:fix    # Auto-fix what can be fixed
pnpm run ci        # Verify everything passes
```

### CI/CD Integration

```bash
# In CI/CD pipeline
pnpm run ci        # Full validation
```

### Troubleshooting

#### Permission Errors with pnpm

If you encounter `EPERM` errors with pnpm install:

- Use `pnpm run ci` (skips install step)
- Or use `pnpm run ci:simple` (basic shell version)

#### Common Issues

1. **Unused variables** - Remove or prefix with underscore (`_variable`)
2. **Explicit `any` types** - Replace with proper TypeScript types
3. **Missing dependencies** - Add to React Hook dependency arrays
4. **Empty interfaces** - Use `type` instead of `interface` or add properties

## Benefits

✅ **Consistent Code Quality** - Enforced linting and formatting
✅ **Type Safety** - TypeScript compilation validation
✅ **Build Verification** - Ensures production builds work
✅ **Developer Experience** - Clear feedback and auto-fixing
✅ **CI/CD Ready** - Perfect for automated pipelines
