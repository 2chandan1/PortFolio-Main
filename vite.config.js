import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: true, // 👈 binds to 0.0.0.0
    port: 4173, // 👈 default Vite preview port
    allowedHosts: ['portfolio-1t3l.onrender.com'], // 👈 allow Render domain
  },
})
