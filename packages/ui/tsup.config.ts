import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/button/button.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react'],
  ...options,
}));
