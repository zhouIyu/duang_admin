import { RouteRecordRaw } from 'vue-router'
import { Layout } from './../default'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

export default homeRoutes
