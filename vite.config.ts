import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// import VueMacros from 'unplugin-vue-macros'

import { VueRouterAutoImports } from 'unplugin-vue-router'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import prism from 'markdown-it-prism'

import { VitePWA } from 'vite-plugin-pwa'

import { viteMockServe } from 'vite-plugin-mock'
import { unheadVueComposablesImports } from '@unhead/vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // extensions: ['.vue', '.md']
    }),
    vue({
      // include: [/\.vue$/, /\.md$/],
      // script: {
      //   // vue3.3之后实验特性
      //   defineModel: true,
      //   propsDestructure: true
      // }
    }),
    vueJsx(),
    // Vue3.3以后，不需要这些新的特性了
    // VueMacros.vite({
    //   plugins: {
    //     vue: vue(),
    //     vueJsx: vueJsx() // 如果需要
    //   }
    // }),
    // Markdown({
    //   headEnabled: true,
    //   markdownItUses: [prism]
    // }),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      vueTemplate: true,
      // global imports to register
      imports: [
      //   // presets
        'vue',
        // 'vue-router',
        VueRouterAutoImports,
        '@vueuse/core',
        'pinia',
        unheadVueComposablesImports
      ]
    }),
    Components({
      directoryAsNamespace: true,
      // 如果组件名相同，则合并 
      collapseSamePrefixes: true,
      //
      // include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    // VitePWA({
    //   manifest: {
    //     name: 'Vite App',
    //     short_name: 'Vite App',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: '/192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ]
    //   },
    //   registerType: 'autoUpdate'
    // }),
    // viteMockServe({
    //   mockPath: 'mock',
    //   enable: true
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // preview: {
  //   open: true
  // }
})
