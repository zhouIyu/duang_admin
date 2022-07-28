<script lang="ts"
        setup>
import { iconNameList } from '@/constant/icon'
import { useMessage } from '@/hooks/useMessage'

const icons = ref<string[]>(iconNameList)
const clipIconName = async (name: string) => {
  await navigator.clipboard.writeText(name)
  useMessage('复制成功', 'success')
}
</script>
<template>
  <div class="icon-content">
    <div v-for="icon in icons"
         :key="icon"
         class="icon"
         @click="clipIconName(icon)"
    >
      <el-icon :class="icon"
               mb />
      <div class="icon-name">
        {{ icon }}
      </div>
    </div>
  </div>
</template>
<style lang="scss"
       scope>
.icon-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;

  .icon {
    width: 150px;
    height: 80px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    user-select: none;
    cursor: pointer;

    .el-icon {
      font-size: 24px;
    }

    &:hover {
      background-color: rgb(236, 245, 255);
      color: rgb(140, 197, 255);

      .el-icon {
        transform: scale(1.8);
      }
    }
  }
}
</style>
