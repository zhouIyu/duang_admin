import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function configAutoImportPlugin () {
  return AutoImport({
    dts: 'types/auto-import.d.ts',
    imports: ['vue', 'pinia', 'vue-router'],
    resolvers: [
      ElementPlusResolver()
    ]
  })
}
