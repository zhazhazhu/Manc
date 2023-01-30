import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { presetAttributify, presetUno } from "unocss";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

const externals = ["vue"];

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      vueTemplate: true,
    }),
    Components({
      resolvers: [IconsResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    UnoCSS({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        // ...custom presets
      ],
    }),
    Icons(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "Manc-UI",
      fileName: "Manc-UI",
    },
    outDir: "dist",
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: [{ find: "~/", replacement: `${resolve(__dirname)}/` }],
  },
});
