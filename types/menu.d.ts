declare namespace Menu {
  interface MenuItem {
    id?: number // id
    path: string // 地址
    title: string // 名称
    component?: string // 组件
    parent?: number // 父级
    index?: number // 序号
    icon?: string // 图标
    isLink?: boolean // 是否是连接
    status: 1 | 0 // 是否启用 1：启用 0： 禁用
  }

  interface MenuOptions extends MenuItem {
    children?: MenuOptions[]
  }
}
