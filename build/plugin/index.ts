import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

export function createVitePlugin (): PluginOption[] {
  const plugins: PluginOption[] = [
    vue()
  ]
  return plugins
}
