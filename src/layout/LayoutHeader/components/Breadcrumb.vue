<script lang="ts" setup name="Breadcrumb">
const route = useRoute()
const matched = computed(() => route.matched.filter(item => item.meta && item.meta.title && item.meta.title !== '首页'))
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item key="/home"
                        :to="{ path: '/home/index' }">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in matched"
                        :key="item.path"
                        :to="{ path: item.path }">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
