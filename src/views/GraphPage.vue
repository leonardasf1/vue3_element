<script setup lang="ts">

  import type { Ref } from 'vue'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  import { req_APIv1, req_APIv0 } from '../realizations/requires'
  import { getChartValues, Ivalue } from '../realizations/getChartValues'
  import { getSeries } from '../realizations/getSeries'

  import TabMenu from '@/components/TabMenu.vue'
  import List from '@/components/List.vue'

// ---------------------------------

  const charts: Ref = ref([])

  async function getCharts(): Promise<void> {
    const res = await req_APIv1()
    charts.value = res
  }

  const values: Ref = ref([])
  const data_elements: Ref = ref([])

  async function getValuesData(): Promise<void> {
    const res = await req_APIv0()
    values.value = res.values
    data_elements.value = res.data_elements
    transformator()
  }
  onMounted(() => {
    getCharts()
    getValuesData().then(() => pathHandler())
  })

  // ---------------------------------

  const legend: Ref = ref({ "data": [] }) // массив наименований отображаемых на графике показателей
  const xAxis:  Ref = ref({ "data": [] }) // объект, задающий массив временных значений по оси X
  const series: Ref = ref([]) // массив значений по оси Y для каждой из линий на графике

  function transformator(): void {

    values.value.forEach(( value: Ivalue ) => {
      xAxis.value.data.push( value.timepoint )
    })
    series.value = getSeries(values.value, data_elements.value)

    data_elements.value.forEach(( element_data: any ) => {
      legend.value.data.push( element_data.name )
    })
  }
// ---------------------------------

  const route = useRoute()

  function pathHandler() :void {
    const path: any = route.path.split("/")[2]
    const block = route.query.tab
    if (path) {
      handleTabMenuClick(charts.value[path - 1], block)
    }
  }

// ---------------------------------

  const chart: Ref = ref({}) // объект, задающий массив значений по оси Y для каждой из линий на графике

  function handleTabMenuClick(tab: any, block?: any): void {
    chart.value = getChartValues(values.value, tab, block)
  }

</script>

<template>
  <el-row class="tac" style="min-height: calc(100vh - 60px); flex-wrap: nowrap;">
    <div class="">
      <tab-menu
        :charts="charts"
        :handleC="handleTabMenuClick"
      />
    </div>

    <list
      :chart="chart"
      :xAxis="xAxis"
      :series="series"
    />

  </el-row>
</template>
