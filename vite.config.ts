import { defineConfig } from 'vite-plus';

export default defineConfig({
  // Lint configuration (migrated from eslint.config.js)
  lint: {
    // Oxlint configuration
    // Oxlint automatically detects TypeScript and Astro files
    ignorePatterns: ['dist', 'node_modules', '.github', 'types.generated.d.ts', '.astro'],
  },

  // Format configuration (migrated from .prettierrc.cjs)
  fmt: {
    printWidth: 120,
    useTabs: false,
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    // Astro files will be auto-detected and formatted
  },

  // Task running with caching
  run: {
    tasks: {
      build: {
        command: 'astro build',
        cache: true,
      },
    },
  },

  // Pre-commit hooks configuration
  staged: {
    '*.{js,jsx,ts,tsx,astro,vue,svelte,json,yaml,yml,md}': 'vp check --fix',
  },
});
