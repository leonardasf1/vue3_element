import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    legacy({
      targets: [
        "> 1%",
        "last 2 versions",
        "firefox >= 44",
        "chrome >= 103",
        "not dead",
        "not ie 11"
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  }
})
