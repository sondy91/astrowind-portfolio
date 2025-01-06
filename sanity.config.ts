import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity-studio/schemaTypes';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'default',
  title: 'Portfolio Website',
  projectId: '0j9fbpsg',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
