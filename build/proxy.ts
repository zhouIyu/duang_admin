import type { ProxyOptions } from 'vite'

type ProxyItem = [string, string]
type ProxyList = ProxyItem[]
type ProxyTargetList = Recordable<ProxyOptions>

const httpsRE = /^https:\/\//

export function createProxy (envConf: ViteEnv): ProxyTargetList | undefined {
  if (!envConf.VITE_HTTP_PROXY) return undefined
  const ret: ProxyTargetList = {}
  const list: ProxyList = envConf.VITE_HTTP_PROXY_LIST!
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target)

    ret[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      ...(isHttps ? { secure: false } : {})
    }
  }
  return ret
}
