<script setup lang="ts">

  import { ref, onMounted } from 'vue'
  import type { Ref } from 'vue'
  import TabMenu from '@/components/TabMenu.vue'
  import List from '@/components/List.vue'
  import Graph from '@/components/Graph.vue'

// ---------------------------------

  const charts: Ref<Array<any>> = ref([])
  const values: Ref<Array<object>> = ref([])
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

// ---------------------------------

  const legend: Ref = ref({ "data": [] }) // массив наименований отображаемых на графике показателей
  const xAxis:  Ref = ref({ "data": [] }) // объект, задающий массив временных значений по оси X
  // const series:  Ref = ref({ [] }) // массив значений по оси Y для каждой из линий на графике

  function transformator(): void {

    values.value.forEach(( value: any ) => {
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

  function handleC( tab: object): void {
    chart.value = tab

    chart.value.de_refs.forEach(( de_ref: any ) => {
      de_ref.values = []

        values.value.forEach(( value: any ) => {

        for ( let v_at of value.values_at_timepoint ) {
          if ( v_at.id == de_ref.id ) {
            de_ref.values.push( v_at.value )
            break
          }
        }
      })
    })
  }

  onMounted(() => {
    req_APIv1()
    req_APIv0()
  })

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
