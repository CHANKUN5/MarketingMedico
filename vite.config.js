import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: "./index.html"
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          bootstrap: ['react-bootstrap', 'bootstrap'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    compress: true
  }
});
