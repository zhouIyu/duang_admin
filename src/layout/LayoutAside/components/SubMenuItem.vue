<script lang="ts"
        setup
        name="SubMenuItem">
interface PropTypes {
  menuList: Menu.MenuOptions[]
}

withDefaults(defineProps<PropTypes>(), {
  menuList: () => []
})
const router = useRouter()
const hasChildren = (item: Menu.MenuOptions): boolean | undefined => {
  return item.children && item.children.length > 0
}

const handleMenuClick = (item: Menu.MenuOptions): void => {
  item.isLink ? window.open(item.path, '_blank') : router.push(item.path)
}
</script>

<template>
  <template v-for="subItem in menuList"
            :key="subItem.path">
    <template v-if="subItem.status === 1">
      <el-sub-menu v-if="hasChildren(subItem)"
                   :index="subItem.path">
        <template #title>
          <el-icon :class="`i-ep-${subItem.icon}`">
          </el-icon>
          <span>{{ subItem.title }}</span>
        </template>
        <SubMenuItem :menu-list="subItem.children" />
      </el-sub-menu>
      <el-menu-item v-else
                    :index="subItem.path"
                    @click="handleMenuClick(subItem)">
        <el-icon :class="`i-ep-${subItem.icon}`" />
        <template #title>
          <span>{{ subItem.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>
