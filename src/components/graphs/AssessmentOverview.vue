<template>
  <div>
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
  name: 'AssessmentOverview',
  props: {
    graphData: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      default: '600px'
    },
    height: {
      type: String,
      default: '600px'
    }
  },
  data () {
    return {
      chartData: {
        labels: this.graphData.map(x => x.label),
        series: [
          {
            name: 'student',
            data: this.graphData.map(x => x.student)
          },
          {
            name: 'reference',
            data: this.graphData.map(x => x.reference)
          }
        ]
      },
      chartOptions: {
        lineSmooth: false,
        height: this.height,
        width: this.width,
        axisY: {
          onlyInteger: true
        }
      },
      eventHandlers: [
        {
          event: 'draw',
          fn: (event) => {
            if (event.type === 'grid') {
              // color axis differently, and hide y gridlines
              if (event.index === 0) {
                event.element._node.classList.add('axis')
              } else if (event.x1 === event.x2) {
                event.element._node.classList.add('y-grid-line')
              } else {
                event.element._node.classList.add('x-grid-line')
              }
            } else if (event.type === 'point') {
              event.element._node.classList.add(event.series.name)

              // Text labels for points
              // const text = new this.$chartist.Svg('text', {
              //   x: event.x - 15,
              //   y: event.y - 20
              // }, 'text-label')
              // text._node.textContent = event.value.y
              // event.group.append(text)

              // Add green/red success/failure coloration to nodes
              // if (event.series.name === 'student') {
              //   const className = data[event.index].hitGoal ? 'point-success' : 'point-failure'
              //   const successMarker = new this.$chartist.Svg('line', {
              //     x1: event.x,
              //     x2: event.x,
              //     y1: event.y,
              //     y2: event.y
              //   }, className)
              //   event.group.append(successMarker)
              // }
            } else if (event.type === 'line') {
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
#my-chart .axis {
  @apply stroke-current text-gray-graph-dark;
  stroke-dasharray: initial;
}

#my-chart .y-grid-line {
  stroke-width: 0;
}

#my-chart .student.ct-line,
#my-chart .student.ct-point {
  @apply stroke-current text-blue-graph;
}

#my-chart .student.ct-point {
  stroke-width: 20px;
}

#my-chart .student.ct-line,
#my-chart .reference.ct-line {
  stroke-width: 5px;
}

#my-chart .reference.ct-line {
  @apply stroke-current text-gray-graph-dark;
  stroke-dasharray: 5px 5px;
}

#my-chart .reference.ct-point {
  stroke-width: 0;
}

/* Change the points to the big red/green circles
#my-chart .student.ct-point {
  stroke-width: 30px;
}

#my-chart .point-success {
  stroke-width: 25px;
  stroke: green;
  stroke-linecap: round;
}

#my-chart .point-failure {
  stroke-width: 25px;
  stroke: red;
  stroke-linecap: round;
} */
</style>
