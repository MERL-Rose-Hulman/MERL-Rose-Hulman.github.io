#!/usr/bin/env node

const { rm, stat } = require('fs/promises');
const { join } = require('path');

const targets = [
  { path: 'public', description: 'Hugo build output' },
  { path: 'resources/_gen', description: 'Generated assets cache' },
  { path: 'node_modules/.cache', description: 'Node tooling cache' },
  { path: '.hugo_build.lock', description: 'Hugo build lock file' }
];

async function exists(fullPath) {
  try {
    await stat(fullPath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}

async function removeTarget({ path, description }) {
  const fullPath = join(process.cwd(), path);

  if (!(await exists(fullPath))) {
    console.log(`Skipped ${path} (not found)`);
    return;
  }

  await rm(fullPath, { recursive: true, force: true });
  console.log(`Removed ${path}${description ? ` – ${description}` : ''}`);
}

async function main() {
  let failures = 0;

  for (const target of targets) {
    try {
      await removeTarget(target);
    } catch (error) {
      failures += 1;
      console.error(`Failed to remove ${target.path}: ${error.message}`);
    }
  }

  if (failures > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

