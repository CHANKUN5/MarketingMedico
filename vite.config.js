import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  publicDir: "public",
  assetsInclude: ["**/*.xml", "**/*.txt"],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html"
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "sitemap.xml" || assetInfo.name === "robots.txt") {
            return "[name][extname]"
          }
          return "assets/[name]-[hash][extname]"
        }
      }
    }
  }
});
