<template>
  <div>
    <h1>My Chart</h1>
    <chartist
      id="my-chart"
      type="Line"
      :data="chartData"
      :options="chartOptions"
      :event-handlers="eventHandlers"
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
      },
      eventHandlers: [
        {
          event: 'draw',
          fn (event) {
            if (event.type === 'grid') {
              console.log(event)
              event.element._node.classList.add(event.index === 0 ? 'axis' : 'grid-line')
            } else if (event.type === 'point') {
              console.log(event)
              event.element._node.classList.add(event.series.name)
            } else if (event.type === 'line') {
              console.log(event)
              event.element._node.classList.add(event.series.name)
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
#my-chart .student.ct-line,
#my-chart .student.ct-point {
  stroke: blue;
}

#my-chart .reference.ct-line {
  stroke: black;
  stroke-dasharray: 2px 2px;
}

#my-chart .reference.ct-point {
  stroke: black;
  stroke-width: 0;
}

#my-chart .axis {
  stroke-dasharray: initial;
}

#my-chart .grid-line {
  stroke-width: 0;
}
</style>
