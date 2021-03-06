import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import AutoComponent from 'unplugin-vue-components/vite'

export function configComponentsPlugin () {
  return AutoComponent({
    extensions: ['vue'],
    include: [/\.vue$/],
    dts: 'types/components.d.ts',
    resolvers: [
      ElementPlusResolver({
        directives: true
      }),
      IconsResolver()
    ]
  })
}
