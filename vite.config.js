import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //set server port to let react to proxy
  server: {
    '/api': {
      proxy: {
        target: 'http://localhost:3000',
      },
    },
  },
});
