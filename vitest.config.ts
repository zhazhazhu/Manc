import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vitest'],
      vueTemplate: true,
    }),
  ],
  test: {
    clearMocks: true,
    environment: 'jsdom',
  },
})
