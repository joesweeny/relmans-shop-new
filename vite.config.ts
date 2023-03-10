import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
