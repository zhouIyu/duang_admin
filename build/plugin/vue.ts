import vue from '@vitejs/plugin-vue'

export function configVue () {
  return vue({
    reactivityTransform: true
  })
}
