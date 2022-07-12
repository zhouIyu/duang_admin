<script lang="ts" setup>
import CollapseIcon from './components/CollapseIcon.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Avatar from './components/Avatar.vue'
</script>

<template>
  <div class="header">
    <div class="header-lf">
      <CollapseIcon />
      <Breadcrumb />
    </div>
    <div class="header-rt">
      <span class="username">ZHOU</span>
      <Avatar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
