import Unocss from '@unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import epIcons from '@iconify-json/ep'

export function configUnocss () {
  return Unocss({
    presets: [
      presetAttributify(),
      presetUno(),
      presetIcons()
    ],
    safelist: [
      ...Object.keys(epIcons.icons.icons).map(name => `i-${epIcons.icons.prefix}-${name}`)
    ]
  })
}
