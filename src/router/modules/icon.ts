import { RouteRecordRaw } from 'vue-router'
import { Layout } from './../default'

const iconRoutes: RouteRecordRaw[] = [
  {
    path: '/icon',
    component: Layout,
    redirect: '/icon/ep',
    children: [
      {
        path: '/icon/ep',
        name: 'IconEp',
        component: () => import('@/views/icon/ep.vue'),
        meta: {
          title: 'EP图标'
        }
      }
    ]
  }
]

export default iconRoutes
