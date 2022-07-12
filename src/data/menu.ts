const menuList: Menu.MenuOptions[] = [
  {
    title: '首页',
    path: '/home',
    icon: 'HomeFilled'
  },
  {
    title: '菜单嵌套',
    path: '/menu',
    icon: 'menu',
    children: [
      {
        title: '菜单1',
        path: '/menu/menu1',
        icon: 'menu'
      },
      {
        title: '菜单2',
        path: '/menu/menu2',
        icon: 'menu',
        children: [
          {
            title: '菜单2-1',
            path: '/menu/menu2/menu21',
            icon: 'menu'
          },
          {
            title: '菜单2-2',
            path: '/menu/menu2/menu22',
            icon: 'menu',
            children: [
              {
                title: '菜单2-2-1',
                path: '/menu/menu2/menu22/menu221',
                icon: 'menu'
              },
              {
                title: '菜单2-2-2',
                path: '/menu/menu2/menu22/menu222',
                icon: 'menu'
              }
            ]
          }
        ]
      },
      {
        title: '菜单3',
        path: '/menu/menu3',
        icon: 'menu'
      }
    ]
  }
]

export default menuList
