import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const repoBase = `/${(process.env.GITHUB_REPOSITORY?.split('/').pop() || 'UARK-SIAM-CSS-25-Participants')}/`

  return {
    plugins: [react()],
    // Serve at root in dev; use repo base when building for GitHub Pages
    base: command === 'serve' ? '/' : repoBase,
  }
})
