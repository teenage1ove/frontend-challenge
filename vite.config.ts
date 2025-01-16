import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/frontend-challenge/',
  plugins: [react()],
  define: {
    'VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
  }
})
