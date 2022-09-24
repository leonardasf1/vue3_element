<script setup lang="ts">

</script>

<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="height: 60px"
  >
    <el-menu-item index="1">
      <router-link to="/about">About</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/graph">Graph</router-link>
    </el-menu-item>
  </el-menu>
</template>
