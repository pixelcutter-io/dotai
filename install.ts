#!/usr/bin/env tsx

import prompts from 'prompts';
import { cpSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOTAI_DIR = __dirname;

// AI tools configuration
const AI_CONFIGS = {
  'claude-code': {
    name: 'Claude Code',
    dir: '.claude/skills',
  },
  cursor: {
    name: 'Cursor',
    dir: '.cursor/rules',
  },
  windsurf: {
    name: 'Windsurf',
    dir: '.windsurf/rules',
  },
} as const;

type AITool = keyof typeof AI_CONFIGS;

console.log('\n');
console.log('\x1b[1mdotai — project setup\x1b[0m');
console.log('────────────────────────────────');
console.log('\n');

const run = async () => {
  // AI Tool selection
  const { aiTool } = await prompts({
    type: 'select',
    name: 'aiTool',
    message: 'Which AI tool are you using?',
    choices: [
      { title: 'Claude Code', value: 'claude-code' },
      { title: 'Cursor', value: 'cursor' },
      { title: 'Windsurf', value: 'windsurf' },
    ],
  });

  if (!aiTool) {
    console.log('Setup cancelled.');
    process.exit(0);
  }

  const config = AI_CONFIGS[aiTool as AITool];
  const SKILLS_DIR = config.dir;

  // Framework selection
  const { framework } = await prompts({
    type: 'select',
    name: 'framework',
    message: 'Which framework?',
    choices: [
      { title: 'Next.js (includes React)', value: 'nextjs' },
      { title: 'React only', value: 'react' },
      { title: 'None', value: 'none' },
    ],
  });

  if (framework === undefined) {
    console.log('Setup cancelled.');
    process.exit(0);
  }

  // Skills selection
  const { skills } = await prompts({
    type: 'multiselect',
    name: 'skills',
    message: 'Select skills',
    choices: [
      { title: 'TypeScript', value: 'typescript', selected: true },
      { title: 'SCSS', value: 'scss' },
      { title: 'CSS Modules', value: 'css-modules' },
    ],
  });

  if (!skills) {
    console.log('Setup cancelled.');
    process.exit(0);
  }

  // Install skills
  console.log('\n\x1b[1mInstalling skills...\x1b[0m\n');

  mkdirSync(SKILLS_DIR, { recursive: true });

  // Framework skills
  if (framework === 'nextjs') {
    cpSync(join(DOTAI_DIR, 'skills/dotai-react'), join(SKILLS_DIR, 'dotai-react'), { recursive: true });
    cpSync(join(DOTAI_DIR, 'skills/dotai-next-js'), join(SKILLS_DIR, 'dotai-next-js'), { recursive: true });
    console.log('  \x1b[32m✓\x1b[0m dotai-react');
    console.log('  \x1b[32m✓\x1b[0m dotai-next-js');
  } else if (framework === 'react') {
    cpSync(join(DOTAI_DIR, 'skills/dotai-react'), join(SKILLS_DIR, 'dotai-react'), { recursive: true });
    console.log('  \x1b[32m✓\x1b[0m dotai-react');
  }

  // Selected skills
  for (const skill of skills) {
    cpSync(join(DOTAI_DIR, `skills/dotai-${skill}`), join(SKILLS_DIR, `dotai-${skill}`), { recursive: true });
    console.log(`  \x1b[32m✓\x1b[0m dotai-${skill}`);
  }

  // Install dotai-update skill (always)
  cpSync(join(DOTAI_DIR, 'skills/_dotai-update'), join(SKILLS_DIR, '_dotai-update'), { recursive: true });
  console.log(`  \x1b[32m✓\x1b[0m _dotai-update`);

  console.log('\n\x1b[1mDone.\x1b[0m Skills installed in ' + SKILLS_DIR + '/\n');
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
