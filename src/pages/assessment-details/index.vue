<template>
  <div>
    <h1>My Chart</h1>
    <chartist
      id="my-chart"
      type="Line"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        labels: ['a', 'b', 'c'],
        series: [[1, 2, 3], [3, 4, 3]]
      },
      chartOptions: {
        lineSmooth: false
      }
    }
  }
}
</script>

<style lang="postcss">
#my-chart .ct-series .ct-line,
#my-chart .ct-series .ct-point {
  stroke: green;
}
</style>
