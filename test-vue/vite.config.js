import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./", // Use relative paths for assets
  build: {
    outDir: "dist", // Specify the output directory for the build
    assetsDir: "assets", // Directory for static assets
  },
  server: {
    port: 3000, // Specify the port for the development server
    open: true, // Automatically open the browser when the server starts
  },
});
