<template>
  <el-container>
    <header-com/>
    <router-view/>
  </el-container>
</template>

<script>
import HeaderCom from '@/components/HeaderCom'

export default {
  name: 'App',
  components: {
    HeaderCom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* { margin: 0; padding: 0; }

.el-container {
  display: block;
}
</style>
