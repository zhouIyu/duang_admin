import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import { createAlias, wrapperEnv, createProxy, createVitePlugin } from './build/index'

export default ({
  command,
  mode
}: ConfigEnv): UserConfig => {
  const viteEnv = loadEnv(mode, process.cwd())
  const env = wrapperEnv(viteEnv)

  return {
    resolve: {
      alias: createAlias()
    },
    plugins: createVitePlugin(),
    server: {
      host: true,
      https: false,
      port: env.VITE_PORT,
      proxy: createProxy(env)
    }
  }
}
