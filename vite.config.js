import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "35de4f89-0a0e-485f-84ea-6150faec2a08-00-10y9rnbeegl6c.pike.replit.dev",
    ],
  },
});
