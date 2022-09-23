<template>
      <List
        :tabs="tabs"
        :values="values"
      />
</template>

<script>

import List from '@/components/List'

export default {
  name: 'graph-page',
  components: {
    List
  },
  data() {
    return {
      tabs: {
        type: Array,
        requered: true,
        default: []
      },
      values: {
        requered: true,
        default: []
      }
    }
  },
  methods: {
    async req_APIv1() {
      const res = await fetch("http://localhost:6006/APIv1/tabs")
      .then(response => response.json())
      this.tabs = res
    },
    async req_APIv0() {
      const values = await fetch("http://localhost:6006/APIv0/data/1")
      .then(response => response.json())
      this.values = values
    }
  },
  mounted() {
    this.req_APIv1()
    this.req_APIv0()
  }
}

</script>
