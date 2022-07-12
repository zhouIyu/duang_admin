interface MenuState {
  isCollapse: boolean,
  menuList: Menu.MenuOptions[]
}

export const MenuStore = defineStore({
  id: 'Menu',
  state: (): MenuState => ({
    isCollapse: false,
    menuList: []
  }),
  actions: {
    /**
     * 设置侧边栏折叠
     */
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    setMenuList (menuList: Menu.MenuOptions[]) {
      this.menuList = menuList
    }
  }
})
