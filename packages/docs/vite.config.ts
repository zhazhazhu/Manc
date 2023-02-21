import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

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
        // ...custom presets
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: [{ find: '~/', replacement: `${resolve(__dirname, 'src')}/` }],
  },
  server: {
    host: true,
  },
})
