import { PluginOption } from 'vite'
import { configAutoImportPlugin } from './autoImport'
import { configComponentsPlugin } from './component'
import { configUnocss } from './unocss'
import { configIcons } from './icons'
import { configVue } from './vue'

export function createVitePlugin (): PluginOption[] {
  const plugins: PluginOption[] = []
  plugins.push(configVue())
  plugins.push(configAutoImportPlugin())
  plugins.push(configComponentsPlugin())
  plugins.push(configUnocss())
  plugins.push(configIcons())
  return plugins
}
