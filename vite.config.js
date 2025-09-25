import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use the repository name when deployed to GitHub Pages
  base: process.env.GITHUB_REPOSITORY?.split('/').pop() ? `/${process.env.GITHUB_REPOSITORY.split('/').pop()}/` : '/UARK-SIAM-CSS-25-Participants/',
})
