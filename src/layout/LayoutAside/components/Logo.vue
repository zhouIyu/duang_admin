<script setup lang="ts" name="Logo">
interface PropTypes {
  isCollapse: boolean
}

withDefaults(defineProps<PropTypes>(), {
  isCollapse: false
})

</script>

<template>
  <div class="logo">
    <img src="@/assets/logo.png"
         alt="logo">
    <span v-show="!isCollapse">Duang-Admin</span>
  </div>
</template>
