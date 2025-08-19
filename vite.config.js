import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Automatically use '/' in dev, and '/pokemon-explorer/' in production
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProd ? '/pokemon-explorer/' : '/', // ✅ dynamic base path
  plugins: [react()],
})
