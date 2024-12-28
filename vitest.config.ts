import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'
// import path from 'path'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      reporters: ['default', 'html'],
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'cypress/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        // vitest官方会在下个大版本替换c8
        provider: 'v8',
        // provider: 'c8',
        reporter: ['text', 'json', 'html'],
        // src: [path.join(__dirname, 'src/components')]
        // 使用vitest-ui中的coverage
        enabled: true
      }
      // teardownTimeout: 120000
    }
  })
)
