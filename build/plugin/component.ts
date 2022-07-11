import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoComponent from 'unplugin-vue-components/vite'

export function configComponentsPlugin () {
  return AutoComponent({
    extensions: ['vue'],
    include: [/\.vue$/],
    dts: 'types/components.d.ts',
    resolvers: [
      ElementPlusResolver({
        directives: true,
        importStyle: 'sass'
      })
    ]
  })
}
