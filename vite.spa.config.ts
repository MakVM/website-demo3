import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".",         // <-- point to your React app folder
  base: "/website-demo3/",
  plugins: [react()],
  build: {
    outDir: "../../dist-spa",    // relative to root
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/react-app/main.tsx"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

