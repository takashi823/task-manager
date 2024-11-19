import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tanstack router
    TanStackRouterVite(),
  ],
  // storybook
  optimizeDeps: {
    force: true,
	exclude: ['node_modules/.cache/storybook']
  },
})
