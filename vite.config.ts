import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //setup proxy to handle CORS issue
    proxy: {
      "/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2": "https://gist.githubusercontent.com/",
    }
  },
  plugins: [react()],
  envDir: './src/environments',
})
