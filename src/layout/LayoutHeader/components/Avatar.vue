<script lang="ts" setup>
const router = useRouter()
const onHandleCommand = async (command: string) => {
  if (command === 'logout') {
    return router.replace('/login')
  }
}
</script>

<template>
  <el-dropdown trigger="click"
               @command="onHandleCommand">
    <div class="avatar">
      <img src="@/assets/avatar.png"
           alt="avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.el-dropdown {
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    img {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
