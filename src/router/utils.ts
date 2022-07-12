import { constantRoutes } from '@/router/default'
import { RouteRecordRaw } from 'vue-router'
export function loadRoutes (): RouteRecordRaw[] {
  const metaRoutes: Recordable = import.meta.globEager('./modules/*.ts')
  const routeList: RouteRecordRaw[] = []
  Object.values(metaRoutes).forEach(item => {
    Object.values(item).forEach(value => {
      routeList.push(...(value as RouteRecordRaw[]))
    })
  })
  return constantRoutes.concat(routeList)
}
