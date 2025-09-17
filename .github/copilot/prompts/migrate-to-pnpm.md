# Migrate from npm to pnpm

Comprehensive guide for migrating the React/TypeScript portfolio project from npm to pnpm package manager.

## Migration Overview

This migration will transition the portfolio project from npm workspaces to pnpm workspaces, taking advantage of pnpm's performance improvements, disk space efficiency, and enhanced security features.

## Prerequisites

### 1. Install pnpm globally

```bash
npm install -g pnpm
```

### 2. Verify pnpm installation

```bash
pnpm --version
```

## Migration Steps

### Phase 1: Clean Current Setup

1. **Remove existing node_modules and lock files**

   ```bash
   # Remove from root
   rm -rf node_modules
   rm package-lock.json

   # Remove from client workspace
   rm -rf client/node_modules
   rm client/package-lock.json
   ```

2. **Clear npm cache (optional)**

   ```bash
   npm cache clean --force
   ```

### Phase 2: Configure pnpm Workspace

1. **Create pnpm-workspace.yaml**

   ```yaml
   # pnpm-workspace.yaml
   packages:
     - "client"
   ```

2. **Create .npmrc for pnpm configuration**

   ```.npmrc
   # .npmrc
   # Use pnpm's strict peer dependencies
   strict-peer-dependencies=true

   # Auto install peer dependencies
   auto-install-peers=true

   # Use node_modules hoisting (similar to npm workspaces)
   shamefully-hoist=false

   # Enable faster installs
   prefer-frozen-lockfile=true
   ```

### Phase 3: Update Package Scripts

1. **Update root package.json scripts**

   ```json
   {
     "scripts": {
       "dev": "pnpm --filter client dev",
       "install-all": "pnpm install",
       "lint": "pnpm --filter client lint",
       "typegen": "pnpm --filter client typegen",
       "postinstall": "pnpm --filter client postinstall",
       "build": "pnpm --filter client build",
       "preview": "pnpm --filter client preview",
       "deploy": "gh-pages -d client/dist"
     }
   }
   ```

2. **Update client/package.json scripts**

   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "tsc -b && vite build",
       "lint": "eslint .",
       "preview": "vite preview",
       "typegen": "pnpm dlx @chakra-ui/cli typegen ./src/theme/index.ts",
       "postinstall": "pnpm run typegen"
     }
   }
   ```

### Phase 4: Install Dependencies

1. **Install all dependencies**

   ```bash
   pnpm install
   ```

2. **Verify installation**

   ```bash
   # Check if all dependencies are installed
   pnpm list

   # Check workspace configuration
   pnpm list --depth 0
   ```

### Phase 5: Update CI/CD and Documentation

1. **Update GitHub Actions (if exists)**

   ```yaml
   # .github/workflows/*.yml
   - name: Setup pnpm
     uses: pnpm/action-setup@v2
     with:
       version: 8

   - name: Setup Node.js
     uses: actions/setup-node@v3
     with:
       node-version: "18"
       cache: "pnpm"

   - name: Install dependencies
     run: pnpm install

   - name: Build
     run: pnpm build
   ```

2. **Update README.md**
   Replace npm commands with pnpm equivalents:

   ```markdown
   # Development

   pnpm dev

   # Install dependencies

   pnpm install

   # Build for production

   pnpm build

   # Lint code

   pnpm lint
   ```

### Phase 6: Verification and Testing

1. **Test development server**

   ```bash
   pnpm dev
   ```

2. **Test build process**

   ```bash
   pnpm build
   ```

3. **Test linting**

   ```bash
   pnpm lint
   ```

4. **Test type generation**

   ```bash
   pnpm typegen
   ```

## File Changes Checklist

- [ ] Remove `node_modules` directories
- [ ] Remove `package-lock.json` files
- [ ] Create `pnpm-workspace.yaml`
- [ ] Create/update `.npmrc`
- [ ] Update root `package.json` scripts
- [ ] Update client `package.json` scripts
- [ ] Update GitHub Actions workflows
- [ ] Update documentation (README.md)
- [ ] Install dependencies with pnpm
- [ ] Test all scripts and functionality

## Benefits of pnpm

### Performance

- **Faster installs**: Symlinks and hard links instead of copying
- **Disk space efficiency**: Single copy of each package version
- **Better caching**: Shared content-addressable store

### Security

- **Strict dependency resolution**: Prevents phantom dependencies
- **No hoisting by default**: Cleaner dependency tree
- **Peer dependency management**: Better handling of peer deps

### Developer Experience

- **Workspace support**: Enhanced monorepo/workspace features
- **Script filtering**: Easy script execution across workspaces
- **Better error messages**: Clearer dependency resolution errors

## Troubleshooting

### Common Issues

1. **Peer dependency warnings**

   ```bash
   # Auto-install peer dependencies
   pnpm install --auto-install-peers
   ```

2. **Module resolution issues**

   ```bash
   # Add to .npmrc if needed
   shamefully-hoist=true
   ```

3. **TypeScript path issues**
   - Verify tsconfig.json paths still work
   - Check if any absolute imports need adjustment

### Rollback Plan

If issues occur, revert to npm:

```bash
# Remove pnpm files
rm -rf node_modules client/node_modules
rm pnpm-lock.yaml pnpm-workspace.yaml .npmrc

# Restore npm scripts in package.json files
# Reinstall with npm
npm install
```

## Post-Migration

1. **Update team documentation**
2. **Update local development setup instructions**
3. **Communicate changes to team members**
4. **Monitor for any dependency-related issues**

This migration maintains all existing functionality while providing improved performance and dependency management through pnpm.
