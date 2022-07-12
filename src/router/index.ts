import { configGuide } from './guide'
import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import { loadRoutes } from './utils'
export function setupRouter (app: App<Element>) {
  const routes: RouteRecordRaw[] = loadRoutes()
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 })
  })
  configGuide(router)
  app.use(router)
}
