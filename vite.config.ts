import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

const envDirectoryPath = path.resolve(process.cwd() + '/src/environments');
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, envDirectoryPath, '')};
  return defineConfig({
    server: {
      //setup proxy to handle CORS issue
      proxy: {
        '/api': {
          target: `${process.env.VITE_API_TARGET_URL}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    },
    plugins: [react()],
    envDir: envDirectoryPath,
    //envDir: './src/environments',
  });
}

/*
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    //setup proxy to handle CORS issue
    proxy: {
      '/api': {
        target: `${env.VITE_API_TARGET_URL}`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  plugins: [react()],
  envDir: './src/environments',
})
*/