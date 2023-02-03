import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx, **/pages/*.tsx",
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  base: "/twitter-clone/",
});
