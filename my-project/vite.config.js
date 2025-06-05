import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/redchristian20/dp-chartam-project",
  plugins: [react(),tailwindcss()],
})
