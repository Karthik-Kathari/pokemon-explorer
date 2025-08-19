import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pokemon-explorer/',  // 👈 Important for GitHub Pages
  plugins: [react()],
})
