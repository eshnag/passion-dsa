import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/passion-dsa/',   // <= IMPORTANT
// })
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5173", // where your Express server runs
    },
  },
});
