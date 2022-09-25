<script setup lang="ts">

const props = defineProps<{
  charts: Array<any>
  handleC: any
}>()

</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    text-color="#fff"
  >
    <el-menu-item
      v-for="tab in charts"
      :index="tab.id+''"
      @click="handleC(tab)"
    >
      {{tab.name}}
    </el-menu-item>
  </el-menu>
</template>
