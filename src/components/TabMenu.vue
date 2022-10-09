<script setup lang="ts">

  import { ref } from 'vue'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'

  import IconArrow from '@/components/IconArrow.vue'

  const isCollapse = ref(true)

  const props = defineProps<{
    charts: Array<any>
    handleC: any
  }>()

  const styleClose = { transform: "rotateZ(90deg)" }
  const styleOpen = { transform: "rotateZ(-90deg)" }

</script>

<template>
  <el-menu
    default-active="1"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    text-color="#fff"
    :collapse="isCollapse"
  >
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">
        <icon-arrow :style="styleOpen" />
      </el-radio-button>
      <el-radio-button :label="true">
        <icon-arrow :style="styleClose" />
      </el-radio-button>
    </el-radio-group>

    <el-sub-menu
      v-for="(tab, tabIndex) in charts"
      :index="tab.id+'1'"
    >
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span> {{tab.name}} </span>
      </template>

      <el-menu-item
        v-for="(de_ref, deIndex) in tab.de_refs"
        :index="de_ref.id+'2'"
      >
        <router-link
          :to="'/graph/'+(tabIndex + 1)+'?tab='+(deIndex + 1)"
          @click="handleC(tab, deIndex + 1)"
        >
          {{de_ref.name}}
        </router-link>
      </el-menu-item>

    </el-sub-menu>

  </el-menu>
</template>

<style lang="scss">
  .el-radio-group {
    display: block;
    height: 48px;
  }
  .el-radio-button__inner {
    background: inherit;
    border: none;
    color: #fff;
    padding: 0;
    border-radius: 0;

    &:hover {
      color: #fff;
    }
  }
  .el-radio-button__original-radio:checked + .el-radio-button__inner {
    display: none;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-left: 0;
  }
  .el-sub-menu__title span {
    padding-inline: 20px;
  }
  .el-menu-item a {
    color: inherit;
    text-decoration: none;
  }
</style>
