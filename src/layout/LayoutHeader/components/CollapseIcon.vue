<script lang="ts" setup>
import { MenuStore } from '@/store/modules/menu'

const menuStore = MenuStore()
const isComponent = computed((): string => {
  return menuStore.isCollapse ? 'i-ep-expand' : 'i-ep-fold'
})
const toggleCollapse = () => {
  menuStore.toggleCollapse()
}
</script>

<template>
  <el-icon class="collapse-icon"
           :class="isComponent"
           @click="toggleCollapse">
  </el-icon>
</template>

<style lang="scss" scoped>
</style>
