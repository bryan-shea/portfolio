import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const basePath = (globalThis as unknown as { process?: { env?: { BASE_PATH?: string } } })?.process?.env?.BASE_PATH ?? '/'

export default defineConfig({
  // For GitHub Pages project site (username.github.io/repo), set base to '/repo/'.
  // This is made configurable via BASE_PATH env for CI; defaults to root.
  base: basePath,
  plugins: [react()],
})
