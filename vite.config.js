import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  base:"/amogh-portfolio",
  plugins: [
    tailwindcss(),
    react(),
    svgr()
  ],
})
