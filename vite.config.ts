import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'layout-sider-background': '#fff',
          'layout-header-background': '#fff',
        },
        javascriptEnabled: true,
      },
    }
  }
})
