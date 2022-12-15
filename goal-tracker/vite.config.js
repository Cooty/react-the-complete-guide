import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactCssModule from "vite-plugin-react-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactCssModule()
  ]
})
