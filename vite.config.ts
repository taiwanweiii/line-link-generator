import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/line-link-generator/' : '/',   // 🔹 直接寫死

    plugins: [react(), tailwindcss()],

})
