<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeaderCom from '@/components/HeaderCom.vue'
</script>

<template>
  <el-container>
    <header-com/>
    <router-view/>
  </el-container>
</template>

<style lang="scss">
  .el-container {
    display: block;
  }
</style>
