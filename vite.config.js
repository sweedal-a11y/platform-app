import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/search": {
        target: "https://app.emireq.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      },
      // API proxy for development
      "/api": {
        target: "https://emireq.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('🔴 Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('📤 Proxying:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('📥 Response:', proxyRes.statusCode, req.url);
          });
        }
      }
    }
  },

  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("modules/startup-dashboard")) return "chunk-startup-dashboard";
          if (id.includes("modules/investor-dashboard")) return "chunk-investor-dashboard";
          if (id.includes("modules/super-admin-dashboard")) return "chunk-super-admin";
          return undefined;
        }
      }
    }
  }
});
