<script setup lang="ts">

  import type { Ref } from 'vue'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  import TabMenu from '@/components/TabMenu.vue'
  import List from '@/components/List.vue'
  import Graph from '@/components/Graph.vue'

// ---------------------------------

  const charts: Ref<Array<Ichart>> = ref([])
  const values: Ref<Array<Ivalue>> = ref([])
  const data_elements: Ref<Array<object>> = ref([])

  async function req_APIv1() {
    const res = await fetch("http://localhost:6006/APIv1/tabs")
    .then(response => response.json())
    charts.value = res
  }
  async function req_APIv0() {
    const res = await fetch("http://localhost:6006/APIv0/data/1")
    .then(response => response.json())
    values.value = res.values
    data_elements.value = res.data_elements
    transformator()

  }
  onMounted(() => {
    req_APIv1()
    req_APIv0().then(() => pathHandler())
  })

// ---------------------------------

  const route = useRoute()

  function pathHandler() :void {
    const path: any = route.path.split("/")[2]
    const block = route.query.tab
    if (path) {
      handleC(charts.value[path - 1], block)
    }
  }
// ---------------------------------

  const legend: Ref = ref({ "data": [] }) // массив наименований отображаемых на графике показателей
  const xAxis:  Ref = ref({ "data": [] }) // объект, задающий массив временных значений по оси X
  // const series:  Ref = ref({ [] }) // массив значений по оси Y для каждой из линий на графике

  function transformator(): void {

    values.value.forEach(( value: Ivalue ) => {
      xAxis.value.data.push( value.timepoint )
    })
    data_elements.value.forEach(( element_data: any ) => {
      legend.value.data.push( element_data.name )
      // values.value.forEach(( value: any ) => {
      //   for ( let v_at of value.values_at_timepoint ) {
      //     if ( v_at.id == element_data.id ) {
      //       series.value.data[i].name = element_data.name
      //       series.value.data[i].data.push( v_at.value )
      //       i++
      //       break
      //     }
      //   }
      // })
    })
  }

// ---------------------------------

  const chart: Ref = ref({}) // объект, задающий массив значений по оси Y для каждой из линий на графике

  interface Ichart {
    id: string
    name: string
    description?: string
    de_refs: [
      {
        id: string
        name: string
        description?: string
        values: number[]
      }
    ]
  }
  interface Ivalue {
    timepoint: number
    values_at_timepoint: [
      {
        id: string
        value: number
      }
    ]
  }
  function handleC( tab: Ichart, block?: any): void {
    const charT: Ichart = tab

    for ( let de_ref of charT.de_refs ) {
      de_ref.values = []

      values.value.forEach(( value: Ivalue ) => {

        for ( let v_at of value.values_at_timepoint ) {
          if ( v_at.id == de_ref.id ) {
            de_ref.values.push( v_at.value )
            break
          }
        }
      })
    }
    chart.value = {
      "id": charT.id,
      "name": charT.name,
      "description": charT.description,
      "de_refs": block ? new Array(charT.de_refs[block - 1]) : charT.de_refs
    }
  }

</script>

<template>
  <el-row class="tac" style="min-height: calc(100vh - 60px); flex-wrap: nowrap;">

    <tab-menu
      :charts="charts"
      :handleC="handleC"
    />

    <list
      :chart="chart"
      :xAxis="xAxis"
    />
    <!-- <Graph :series="series" :xAxis="xAxis" /> -->

  </el-row>
</template>
