/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: '/portfolio/',
  build: {
    target: ['es2020'],
    assetsDir: 'assets',
    outDir: 'dist/client',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      static: true,
      ssr: false,
      vite: { experimental: { supportAnalogFormat: true } },
      prerender: {
        routes: ['/', '/about'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
