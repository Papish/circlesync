/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.NODE_ENV === "production" ? "/circlesync" : "'",
  test: {
    css: false,
    globals: true,
    environment: "happy-dom",
    setupFiles: ["src/setupTest.ts"],
  },
});
