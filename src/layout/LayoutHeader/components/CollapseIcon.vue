<script lang="ts" setup>
import { MenuStore } from '@/store/modules/menu'

const menuStore = MenuStore()
const isComponent = computed((): string => {
  return menuStore.isCollapse ? 'expand' : 'fold'
})
const toggleCollapse = () => {
  menuStore.toggleCollapse()
}
</script>

<template>
  <el-icon class="collapse-icon"
           @click="toggleCollapse">
    <component :is="isComponent" />
  </el-icon>
</template>

<style lang="scss" scoped>
</style>
