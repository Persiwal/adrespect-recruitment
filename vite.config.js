import { defineConfig, normalizePath } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "./assets",
          dest: "",
        },
      ],
    }),
  ],
});
