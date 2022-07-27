import { MenuStore } from '@/store/modules/menu'

function useMenu () {
  const menuStore = MenuStore()
  const menuList = computed((): Menu.MenuOptions[] => menuStore.menuList)

  const changeMenu = (menu:Menu.MenuOptions[]) => {
    menuStore.setMenuList(menu)
  }
  return {
    menuList,
    changeMenu
  }
}

export default useMenu
