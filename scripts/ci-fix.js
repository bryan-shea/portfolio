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

async function runCIFix() {
  log(`\n${colors.bright}${colors.cyan}🔧 Starting CI Fix Pipeline...${colors.reset}`);

  const steps = [
    {
      command: 'pnpm',
      args: ['run', 'format'],
      description: 'Auto-formatting code with Prettier',
      skipOnError: true
    },
    {
      command: 'pnpm',
      args: ['run', 'lint:fix'],
      description: 'Auto-fixing ESLint issues',
      skipOnError: true
    },
    {
      command: 'pnpm',
      args: ['run', 'type-check'],
      description: 'TypeScript type checking',
      skipOnError: false
    },
    {
      command: 'pnpm',
      args: ['run', 'build'],
      description: 'Production build verification',
      skipOnError: false
    }
  ];

  let failedSteps = [];
  let completedSteps = 0;
  let fixedSteps = [];

  for (const step of steps) {
    try {
      await runCommand(step.command, step.args, step.description);
      completedSteps++;

      if (step.description.includes('Auto-fixing') || step.description.includes('Auto-formatting')) {
        fixedSteps.push(step.description);
      }
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
  log(`\n${colors.bright}${colors.cyan}📊 CI Fix Pipeline Summary${colors.reset}`);
  log(`${colors.green}✅ Completed steps: ${completedSteps}/${steps.length}${colors.reset}`);

  if (fixedSteps.length > 0) {
    log(`${colors.green}🔧 Auto-fixed: ${fixedSteps.length} issues${colors.reset}`);
    fixedSteps.forEach(step => {
      log(`   - ${step}`, colors.green);
    });
  }

  if (failedSteps.length > 0) {
    log(`${colors.red}❌ Failed steps: ${failedSteps.length}${colors.reset}`);
    failedSteps.forEach(fail => {
      log(`   - ${fail.step}: ${fail.error}`, colors.red);
    });

    log(`\n${colors.yellow}💡 Some issues may need manual fixing. Check the errors above.${colors.reset}`);
    process.exit(1);
  } else {
    log(`\n${colors.green}🎉 All fixes applied and CI checks passed! Ready for deployment.${colors.reset}`);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logError(`Unhandled promise rejection: ${reason}`);
  process.exit(1);
});

runCIFix().catch(error => {
  logError(`CI fix pipeline failed: ${error.message}`);
  process.exit(1);
});