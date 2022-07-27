<script lang="ts"
        setup>
import LayoutAside from './LayoutAside/index.vue'
import LayoutHeader from './LayoutHeader/index.vue'

</script>

<template>
  <el-container>
    <el-aside>
      <LayoutAside />
    </el-aside>
    <el-container>
      <el-header>
        <LayoutHeader />
      </el-header>
      <el-main>
        <section class="wrapper">
          <el-config-provider>
            <router-view />
          </el-config-provider>
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss"
       scoped>
@import './index.scss';
</style>
