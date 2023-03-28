import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

const externals = ['vue']

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
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
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    DefineOptions(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'Manc-UI',
      fileName: 'Manc-UI',
    },
    outDir: 'dist',
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: '~/', replacement: `${resolve(__dirname)}/` }],
  },
})
