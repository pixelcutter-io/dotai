#!/usr/bin/env tsx

import prompts from 'prompts';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

interface PackageJson {
  version: string;
  [key: string]: any;
}

const run = async () => {
  // Read current version
  const packageJson: PackageJson = JSON.parse(readFileSync('package.json', 'utf-8'));
  const currentVersion = packageJson.version;

  console.log(`\nCurrent version: ${currentVersion}\n`);

  // Ask for version bump type
  const { bumpType } = await prompts({
    type: 'select',
    name: 'bumpType',
    message: 'Version bump type?',
    choices: [
      { title: 'patch (1.0.0 → 1.0.1)', value: 'patch' },
      { title: 'minor (1.0.0 → 1.1.0)', value: 'minor' },
      { title: 'major (1.0.0 → 2.0.0)', value: 'major' },
    ],
  });

  if (!bumpType) {
    console.log('Release cancelled.');
    process.exit(0);
  }

  // Calculate new version
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  let newVersion: string;

  switch (bumpType) {
    case 'major':
      newVersion = `${major + 1}.0.0`;
      break;
    case 'minor':
      newVersion = `${major}.${minor + 1}.0`;
      break;
    case 'patch':
      newVersion = `${major}.${minor}.${patch + 1}`;
      break;
    default:
      throw new Error('Invalid bump type');
  }

  console.log(`\nNew version will be: ${newVersion}\n`);

  // Confirm
  const { confirm } = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: 'Proceed with release?',
    initial: true,
  });

  if (!confirm) {
    console.log('Release cancelled.');
    process.exit(0);
  }

  // Update package.json
  packageJson.version = newVersion;
  writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
  console.log('✓ Updated package.json');

  // Git operations
  execSync('git add package.json', { stdio: 'inherit' });
  execSync(`git commit -m "release: v${newVersion}"`, { stdio: 'inherit' });
  console.log('✓ Created commit');

  execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
  console.log('✓ Created tag');

  execSync('git push && git push --tags', { stdio: 'inherit' });
  console.log('✓ Pushed to remote');

  console.log(`\n✅ Released v${newVersion}\n`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});