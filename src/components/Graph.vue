<script setup lang="ts">

  const props = defineProps<{
    series: Array<any>
    xAxis: any
  }>()

</script>

<template>

    <ul style="width: 100%; padding: 2rem;">
      <li v-for="item in series">

        <h4>{{item.name}}</h4>
        <div class="time_values">

          <ul><label>отметки времени (мс)</label>
            <li v-for="t in xAxis.data">{{new Date(t).getMilliseconds()}}</li>
          </ul>

          <ul><label>значения</label>
            <li v-for="v_at in item.data">{{v_at}}</li>
          </ul>
        </div>

      </li>
    </ul>

</template>

<style lang="scss" scoped>

  .time_values {
    display: flex;

    > ul {
      padding: 2rem;
    }
  }

</style>
