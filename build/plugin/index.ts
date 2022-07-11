import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { configAutoImportPlugin } from './autoImport'
import { configComponentsPlugin } from './component'

export function createVitePlugin (): PluginOption[] {
  const plugins: PluginOption[] = [
    vue()
  ]
  plugins.push(configAutoImportPlugin())
  plugins.push(configComponentsPlugin())
  return plugins
}
