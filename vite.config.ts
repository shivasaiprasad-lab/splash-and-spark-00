import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
        "localhost",
        "172.17.0.1",
        "www.inclusive.com.cn",
        "inclusive.com.cn",],
    hmr: {
      protocol: "wss",
      host: "inclusive.com.cn",
      port: 443,
      clientPort: 443,
      client: {
        host: "inclusive.com.cn",
      },
    },
    cors: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
