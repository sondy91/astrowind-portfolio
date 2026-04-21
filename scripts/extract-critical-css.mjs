import { generate } from 'critical';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';

const distDir = 'dist/client';
const htmlFiles = await glob(`${distDir}/**/*.html`);

console.log(`Found ${htmlFiles.length} HTML files to process`);

for (const htmlFile of htmlFiles) {
  try {
    const relativePath = path.relative(distDir, htmlFile);
    console.log(`Processing: ${relativePath}`);

    await generate({
      base: distDir,
      src: path.relative(distDir, htmlFile),
      target: {
        html: path.relative(distDir, htmlFile),
      },
      inline: true,
      dimensions: [
        {
          height: 900,
          width: 1300,
        },
        {
          height: 720,
          width: 1280,
        },
        {
          height: 568,
          width: 320,
        },
      ],
      penthouse: {
        timeout: 60000,
        blockJSRequests: false,
      },
      extract: true,
      inlineImages: false,
    });

    console.log(`✓ Processed: ${relativePath}`);
  } catch (error) {
    console.error(`✗ Failed to process ${htmlFile}:`, error.message);
  }
}

console.log('\nCritical CSS extraction complete!');
