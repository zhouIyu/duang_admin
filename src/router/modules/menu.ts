import { RouteRecordRaw } from 'vue-router'
import { Layout } from '../default'

const menuRoutes: RouteRecordRaw[] = [
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu1',
    meta: {
      requiresAuth: true,
      title: '菜单嵌套'
    },
    children: [
      {
        path: '/menu/menu1',
        name: 'menu1',
        component: () => import('@/views/menu/menu1/index.vue'),
        meta: {
          requiresAuth: true,
          title: '菜单1'
        }
      },
      {
        path: '/menu/menu2/menu21',
        name: 'menu21',
        component: () => import('@/views/menu/menu2/menu21/index.vue'),
        meta: {
          requiresAuth: true,
          title: '菜单2-1'
        }
      },
      {
        path: '/menu/menu2/menu22/menu221',
        name: 'menu221',
        component: () => import('@/views/menu/menu2/menu22/menu221/index.vue'),
        meta: {
          requiresAuth: true,
          title: '菜单2-2-1'
        }
      },
      {
        path: '/menu/menu2/menu22/menu222',
        name: 'menu222',
        component: () => import('@/views/menu/menu2/menu22/menu222/index.vue'),
        meta: {
          requiresAuth: true,
          title: '菜单2-2-2'
        }
      },
      {
        path: '/menu/menu3',
        name: 'menu3',
        component: () => import('@/views/menu/menu3/index.vue'),
        meta: {
          requiresAuth: true,
          title: '菜单3'
        }
      }
    ]
  }
]

export default menuRoutes
