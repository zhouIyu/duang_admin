<script lang="ts" setup name="SubMenuItem">
interface PropTypes {
  menuList: Menu.MenuOptions[]
}

withDefaults(defineProps<PropTypes>(), {
  menuList: () => []
})

const hasChildren = (item: Menu.MenuOptions): boolean | undefined => {
  console.log(item.icon)
  return item.children && item.children.length > 0
}
</script>

<template>
  <template v-for="subItem in menuList"
            :key="subItem.path">
    <el-sub-menu v-if="hasChildren(subItem)"
                 :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.icon"></component>
        </el-icon>
        <span>{{ subItem.title }}</span>
      </template>
      <SubMenuItem :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else
                  :index="subItem.path">
      <el-icon>
        <component :is="subItem.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ subItem.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
