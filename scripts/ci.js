#!/usr/bin/env node

import { spawn } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logStep(step, description) {
  log(`\n${colors.bright}${colors.blue}[${step}]${colors.reset} ${description}`);
}

function logSuccess(message) {
  log(`${colors.green}✅ ${message}${colors.reset}`);
}

function logError(message) {
  log(`${colors.red}❌ ${message}${colors.reset}`);
}

function logWarning(message) {
  log(`${colors.yellow}⚠️  ${message}${colors.reset}`);
}

async function runCommand(command, args, description, options = {}) {
  return new Promise((resolve, reject) => {
    logStep('RUNNING', `${description}...`);

    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      cwd: process.cwd(),
      ...options
    });

    child.on('close', (code) => {
      if (code === 0) {
        logSuccess(`${description} completed successfully`);
        resolve();
      } else {
        logError(`${description} failed with exit code ${code}`);
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', (error) => {
      logError(`${description} failed: ${error.message}`);
      reject(error);
    });
  });
}

async function runCI() {
  log(`\n${colors.bright}${colors.cyan}🚀 Starting CI Pipeline...${colors.reset}`);

  const steps = [
    {
      command: 'pnpm',
      args: ['run', 'type-check'],
      description: 'TypeScript type checking',
      skipOnError: false
    },
    {
      command: 'pnpm',
      args: ['run', 'lint'],
      description: 'ESLint code quality check',
      skipOnError: false
    },
    {
      command: 'pnpm',
      args: ['run', 'format:check'],
      description: 'Prettier formatting check',
      skipOnError: false
    },
    {
      command: 'pnpm',
      args: ['run', 'build'],
      description: 'Production build',
      skipOnError: false
    }
  ];

  let failedSteps = [];
  let completedSteps = 0;

  for (const step of steps) {
    try {
      await runCommand(step.command, step.args, step.description);
      completedSteps++;
    } catch (error) {
      failedSteps.push({
        step: step.description,
        error: error.message
      });

      if (!step.skipOnError) {
        break;
      }
    }
  }

  // Summary
  log(`\n${colors.bright}${colors.cyan}📊 CI Pipeline Summary${colors.reset}`);
  log(`${colors.green}✅ Completed steps: ${completedSteps}/${steps.length}${colors.reset}`);

  if (failedSteps.length > 0) {
    log(`${colors.red}❌ Failed steps: ${failedSteps.length}${colors.reset}`);
    failedSteps.forEach(fail => {
      log(`   - ${fail.step}: ${fail.error}`, colors.red);
    });

    log(`\n${colors.yellow}💡 To auto-fix issues, try running: ${colors.bright}pnpm run ci:fix${colors.reset}`);
    process.exit(1);
  } else {
    log(`\n${colors.green}🎉 All CI checks passed! Ready for deployment.${colors.reset}`);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logError(`Unhandled promise rejection: ${reason}`);
  process.exit(1);
});

runCI().catch(error => {
  logError(`CI pipeline failed: ${error.message}`);
  process.exit(1);
});