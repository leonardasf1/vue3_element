<script setup lang="ts">

  import type { Ref } from 'vue'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  import { req_APIv1, req_APIv0 } from '@/realizations/requires.ts'
  import { getChartValues, Ichart, Ivalue } from '@/realizations/getChartValues.ts'
  import { getSeries } from '@/realizations/getSeries.ts'

  import TabMenu from '@/components/TabMenu.vue'
  import List from '@/components/List.vue'

// ---------------------------------

  const charts: Ref<Array<Ichart>> = ref([])

  async function getCharts(): Promise<void> {
    charts.value = await req_APIv1()

    console.log(charts.value)
  }

  const values: Ref<Array<Ivalue>> = ref([])
  const data_elements: Ref<Array<object>> = ref([])

  async function getValuesData(): Promise<void> {
    const res = await req_APIv0()
    values.value = res.values
    data_elements.value = res.data_elements
    console.log(values.value)
    transformator()
  }
  onMounted(() => {
    getCharts()
    getValuesData().then(() => pathHandler())
  })

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
