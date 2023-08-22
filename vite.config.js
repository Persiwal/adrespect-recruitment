import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import handlebars from "vite-plugin-handlebars";

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
    handlebars({
      partialDirectory: resolve(__dirname, "src/components"),
    }),
  ],
});
