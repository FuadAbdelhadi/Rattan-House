import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Rattan-House/",
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://adamabzakh.tech/rattan",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
})
