/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
  // 项目启动端口
  readonly VITE_PORT: number
  // 开启请求代理
  readonly VITE_HTTP_PROXY?: boolean
  // 请求代理列表
  readonly VITE_HTTP_PROXY_LIST?: [string, string][]
  // 项目请求地址
  readonly VITE_BASE_API_URL: string
  // 项目名称
  readonly VITE_APP_NAME: string
}

declare interface ImportMetaEnv extends ViteEnv {}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
