import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    // hmr: {
    //   host: 'pammcp.com',
    //   protocol: 'wss',
    //   port: 5173
    // },
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
})
