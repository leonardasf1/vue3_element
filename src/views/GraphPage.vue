<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Ref } from 'vue'
  import List from '@/components/List.vue'

  const tabs: Ref<Array<any>> = ref([])
  const values: Ref<Array<any>> = ref([])

  async function req_APIv1() {
    const res = await fetch("http://localhost:6006/APIv1/tabs")
    .then(response => response.json())
    tabs.value = res
  }
  async function req_APIv0() {
    const res = await fetch("http://localhost:6006/APIv0/data/1")
    .then(response => response.json())
    values.value = res
  }
  onMounted(() => {
    req_APIv1()
    req_APIv0()
  })

</script>

<template>
  <list
    :tabs="tabs"
    :values="values"
  />
</template>
