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
        labels: ['Spring \'18', 'Fall \'19', 'Winter \'19', 'Spring \'20', 'Fall \'20', 'Now'],
        series: [
          {
            name: 'student',
            data: [226, 228, 229, 230, 227, 232]
          },
          {
            name: 'reference',
            data: [222, 220, 222, 224, 222, 224]
          }
        ]
      },
      chartOptions: {
        lineSmooth: false,
        height: '400px',
        width: '600px',
        axisY: {
          onlyInteger: true
        }
      }
    }
  }
}
</script>

<style lang="postcss">
/* TODO i'd like to use the series-name for these, but the selector doesn't seem to work
   #my-chart g[ct\:series-name="reference"] .ct-point
*/
#my-chart .ct-series-a .ct-line,
#my-chart .ct-series-a .ct-point {
  stroke: blue;
}

#my-chart .ct-series-b .ct-line {
  stroke: black;
  stroke-dasharray: 2px 2px;
}

#my-chart .ct-series-b .ct-point {
  stroke: black;
  stroke-width: 0;
}
</style>
