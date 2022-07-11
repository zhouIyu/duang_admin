import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { constantRoutes } from '@/router/default'
export function setupRouter (app: App<Element>) {
  const routes: RouteRecordRaw[] = constantRoutes
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 })
  })
  app.use(router)
}
