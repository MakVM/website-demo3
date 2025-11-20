import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/website-demo3/",  // important for GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist-spa",      // output folder for GitHub Pages
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
