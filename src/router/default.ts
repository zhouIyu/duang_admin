import { RouteRecordRaw } from 'vue-router'

/**
 * 默认布局路由
 * @returns
 */
export const Layout = () => import('@/layout/index.vue')

/**
 * 固定路由
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  }
]
