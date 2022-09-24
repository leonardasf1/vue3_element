<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const props = defineProps<{
    tabs?: Array
    values?: Array
  }>()

  const chart: Ref<Array> = ref([])

  function handleC( tab: object, values: Array ): void {

    chart.value = tab

    chart.value.de_refs.forEach(de_ref => {

      de_ref.values = []
      de_ref.times = []

      values.forEach(value => {

        de_ref.times.push( value.timepoint )

        for ( let v_at of value.values_at_timepoint ) {

          if ( v_at.id == de_ref.id ) {

            de_ref.values.push( v_at.value )
            break
          }
        }
      })
    })
  }

</script>

<template>

  <el-row class="tac" style="min-height: calc(100vh - 60px); flex-wrap: nowrap;">

    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
    >
      <el-menu-item
        v-for="tab in tabs"
        :index="tab.id+''"
        @click="handleC(tab, values)"
      >
        {{tab.name}}
      </el-menu-item>
    </el-menu>

    <ul style="width: 100%; padding: 2rem;">
      <li v-for="de_ref in chart.de_refs">

        <h4>{{de_ref.id}} . {{de_ref.name}}</h4>
        <span>{{de_ref.description}}</span>
        <div class="time_values">

          <ul><label>ms</label>
            <li v-for="t in de_ref.times">{{new Date(t).getMilliseconds()}}</li>
          </ul>

          <ul><label>values</label>
            <li v-for="v_at in de_ref.values">{{v_at}}</li>
          </ul>
        </div>

      </li>
    </ul>

    <h3>{{chart.description}}</h3>

  </el-row>
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
