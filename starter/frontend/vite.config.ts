/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // MapLibre 6 loads its worker relative to its own module URL, which the
    // dep optimizer breaks. Serve it from node_modules as-is.
    exclude: ['maplibre-gl'],
  },
  server: {
    port: 5173,
    proxy: {
      // The backend runs on :8000; everything under /api is forwarded to it.
      '/api': 'http://localhost:8000',
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
})
