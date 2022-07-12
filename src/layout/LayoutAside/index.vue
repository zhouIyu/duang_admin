<script lang="ts" setup name="Menu">
import { MenuStore } from '@/store/modules/menu'
import Logo from './components/Logo.vue'
import SubMenuItem from './components/SubMenuItem.vue'
import _menuList from '@/data/menu'

const menuStore = MenuStore()
const route = useRoute()

onMounted(() => {
  menuStore.setMenuList(_menuList)
})

const isCollapse = computed((): boolean => menuStore.isCollapse)
const menuList = computed((): Menu.MenuOptions[] => menuStore.menuList)
const activeMenu = computed((): string => route.path)
</script>

<template>
  <div class="menu"
       :style="{ width: isCollapse ? '65px' : '220px' }">
    <Logo :is-collapse="isCollapse" />
    <el-scrollbar>
      <el-menu :default-active="activeMenu"
               :router="true"
               :collapse="isCollapse"
               :collapse-transition="false"
               :unique-opened="true"
               background-color="#20222a"
               text-color="#bdbdc0"
               active-text-color="#fff">
        <SubMenuItem :menu-list="menuList" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scope>
@import './index';
</style>
