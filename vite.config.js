import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/meme-generator/",
  server: {
    port: 3000,
    host: true,
  },
  build: {
    sourcemap: "inline",
  },
});
