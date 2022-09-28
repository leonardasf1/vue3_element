<script setup lang="ts">
  import Graph from '@/components/Graph.vue'

  const props = defineProps<{
    chart: any
    xAxis: any
    series: Array<any>
  }>()

</script>

<template>
    <Graph
      v-if="chart.de_refs == undefined"
      :series="series"
      :xAxis="xAxis"
    />
    <ul
      v-if="chart.de_refs != undefined"
      style="width: 100%; padding: 2rem;"
    >
      <li v-for="de_ref in chart.de_refs">

        <h4>{{de_ref.id}} . {{de_ref.name}}</h4>
        <span>{{de_ref.description}}</span>
        <div class="time_values">

          <ul><label>отметки времени (мс)</label>
            <li v-for="t in xAxis.data">{{new Date(t).getMilliseconds()}}</li>
          </ul>

          <ul><label>значения</label>
            <li v-for="v_at in de_ref.values">{{v_at}}</li>
          </ul>
        </div>

      </li>
    </ul>

    <h3>{{chart.description}}</h3>

</template>

<style lang="scss" scoped>

  h3 {
    position: absolute;
    right: 19px;
    top: -42px;
    z-index: 1;
    color: white;
  }
  @media (max-width: 730px) {
    h3 { display: none }
  }
  .time_values {
    display: flex;

    > ul {
      padding: 2rem;
    }
  }

</style>
