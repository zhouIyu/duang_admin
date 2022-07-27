import { Layout } from './../default'
import { RouteRecordRaw } from 'vue-router'
export const systemRoutes: RouteRecordRaw[] = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/menuManage',
    children: [
      {
        path: '/system/menuManage',
        name: 'SystemMenuManage',
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/views/system/menuManage/index.vue')
      }
    ]
  }
]
