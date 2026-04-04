#!/usr/bin/env node
// Usage:
//   npm run new-poem "My Poem Title"
//   npm run new-essay "My Essay Title"

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const [,, type, ...titleParts] = process.argv;
const title = titleParts.join(' ');

if (!type || !title) {
  console.error('\n  Usage: npm run new-poem "Title Here"');
  console.error('         npm run new-essay "Title Here"\n');
  process.exit(1);
}

if (type !== 'poem' && type !== 'essay') {
  console.error(`\n  Unknown type: "${type}". Use "poem" or "essay".\n`);
  process.exit(1);
}

// Slugify title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const folder = type === 'poem' ? 'poetry' : 'essays';
const dir = path.join(process.cwd(), 'src', 'content', folder);
const filePath = path.join(dir, `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`\n  File already exists: ${filePath}\n`);
  process.exit(1);
}

const today = new Date().toISOString().split('T')[0];

const template = type === 'poem'
  ? `---
title: "${title}"
date: ${today}
tags: []
---

`
  : `---
title: "${title}"
date: ${today}
description: ""
tags: []
---

`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(filePath, template);

console.log(`\n  ✓ Created: src/content/${folder}/${slug}.md\n`);

// Try to open in editor
const editor = process.env.EDITOR || process.env.VISUAL;
if (editor) {
  try {
    execSync(`${editor} "${filePath}"`, { stdio: 'inherit' });
  } catch {
    // Editor didn't open — that's fine
  }
} else {
  // Try common editors
  for (const e of ['code', 'cursor', 'zed', 'nano', 'vim']) {
    try {
      execSync(`${e} "${filePath}"`, { stdio: 'ignore' });
      console.log(`  Opened in ${e}.\n`);
      break;
    } catch {
      continue;
    }
  }
}
