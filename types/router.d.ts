import 'vue-router'

declare interface CustomRouteMeta {
  // 路由名称
  title: string
  // 菜单图标
  icon?: string
}

declare module 'vue-router' {
  interface RouteMeta extends CustomRouteMeta { }
}
