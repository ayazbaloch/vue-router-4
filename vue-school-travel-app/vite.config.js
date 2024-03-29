import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
//const path=require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias : {
      '@' : resolve(__dirname,'./src')
    },
  },
  plugins: [vue()],
})
