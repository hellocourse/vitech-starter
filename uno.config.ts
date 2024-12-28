// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  // shortcuts: {
  //   // method 2：针对于全局经常需要使用样式
  //   // 'router-link': 'text-white text-xl px-8 py-2 cursor font-300 hover:font-500'
  //   'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top',
  //   btn: 'px-4 py-2 bg-sky-400 text-white hover:bg-sky-500 cursor-pointer',
  //   'btn-plain':
  //     'px-4 py-2 border border-sky-400 text-sky-400 hover:(bg-sky-400 text-white) cursor-pointer'
  //   // 'btn-sm'
  //   // 'btn-large'
  //   // 'btn-default'
  //   // btn-danger btn-success btn-info btn-warning
  // },
  // 预设，预设是预先定义好的样式，包括颜色，字体，布局等
  presets: [
    presetWind(),
    // presetIcons({
    //   prefix: 'i-',
    //   collections: {
    //     mdi: () => import('@iconify/json/json/mdi.json').then((i) => i.default)
    //   },
    //   extraProperties: {
    //     display: 'inline-block'
    //   },
    //   autoInstall: true
    // })
  ],
  // transformers: [transformerDirectives(), transformerVariantGroup()],
  // theme: {
  //   colors: {
  //     main: '#4E98F4'
  //   }
  // }
  // 是从接口加载出来的->动态的class :class
  // safelist: ['i-mdi:web']
})
