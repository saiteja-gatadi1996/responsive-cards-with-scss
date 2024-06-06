import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vi } from 'vitest';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      all: true,
    },
  },
});
