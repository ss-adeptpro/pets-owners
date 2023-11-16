import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //setup proxy to handle CORS issue
    //all urls with /api will be processed thru http://localhost:3000
    proxy: {
      '/api': "http://localhost:3000"
    }
  },
  plugins: [react()],
  envDir: './src/environments',
})
