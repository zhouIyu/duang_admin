const menuList: Menu.MenuOptions[] = [
  {
    id: 1,
    title: '首页',
    path: '/home/index',
    icon: 'home-filled',
    status: 1
  },
  {
    id: 2,
    title: '菜单嵌套',
    path: '/menu',
    icon: 'menu',
    status: 1,
    children: [
      {
        id: 21,
        title: '菜单1',
        path: '/menu/menu1',
        icon: 'menu',
        status: 1
      },
      {
        id: 22,
        title: '菜单2',
        path: '/menu/menu2',
        icon: 'menu',
        status: 1,
        children: [
          {
            id: 221,
            title: '菜单2-1',
            path: '/menu/menu2/menu21',
            icon: 'menu',
            status: 1
          },
          {
            id: 222,
            title: '菜单2-2',
            path: '/menu/menu2/menu22',
            icon: 'menu',
            status: 1,
            children: [
              {
                id: 2221,
                title: '菜单2-2-1',
                path: '/menu/menu2/menu22/menu221',
                icon: 'menu',
                status: 0
              },
              {
                id: 2223,
                title: '菜单2-2-2',
                path: '/menu/menu2/menu22/menu222',
                icon: 'menu',
                status: 1
              }
            ]
          }
        ]
      },
      {
        id: 23,
        title: '菜单3',
        path: '/menu/menu3',
        icon: 'menu',
        status: 1
      }
    ]
  },
  {
    id: 3,
    title: '系统管理',
    path: '/system',
    icon: 'sunset',
    status: 1,
    children: [
      {
        id: 31,
        title: '菜单管理',
        path: '/system/menuManage',
        icon: 'menu',
        status: 1
      }
    ]
  },
  {
    id: 4,
    title: '百度',
    path: 'https://www.baidu.com',
    icon: 'link',
    isLink: true,
    status: 1
  }
]

export default menuList
