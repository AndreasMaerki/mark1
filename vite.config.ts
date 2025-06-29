import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    proxy: {
      '/blog/rss': {
        target: 'https://medium.com/@andreasmaerki/feed',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/blog\/rss/, '')
      }
    }
  },
  assetsInclude: ['**/*.md']
})
