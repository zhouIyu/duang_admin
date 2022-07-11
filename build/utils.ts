import { resolve } from 'path'

export function pathResolve (absolutePath: string) {
  return resolve(process.cwd(), '.', absolutePath)
}

export function wrapperEnv (envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    let value = envConf[envName].replace(/\\n/g, '/n')
    value = value === 'true' ? true : value === 'false' ? false : value
    if (envName === 'VITE_PORT') {
      value = +value
    }

    if (envName === 'VITE_HTTP_PROXY_LIST' && value) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'))
      } catch (e) {
        value = ''
      }
    }
    ret[envName] = value
  }
  return ret
}
