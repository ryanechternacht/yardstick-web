<template>
  <svg
    :height="height"
    :width="width"
  >
    <line
      class="axis"
      :x1="yAxisX"
      :x2="yAxisX"
      :y1="yAxisY1"
      :y2="xAxisY"
    />
    <text
      class="axis-label"
      :x="yAxisX"
      :y="(yAxisY1 + xAxisY) / 2"
      :transform="`rotate(270, ${yAxisX}, ${(yAxisY1 + xAxisY) / 2})`"
    >
      {{ yAxisLabel }}
    </text>
    <line
      class="axis"
      :y1="xAxisY"
      :y2="xAxisY"
      :x1="yAxisX"
      :x2="xAxisX2"
    />
    <text
      class="axis-label"
      :x="width / 2"
      :y="height"
    >
      {{ xAxisLabel }} {{ barXs }}
    </text>
    <!-- TODO to do only rounded on the top, i'll need 2 rects? or a path... -->
    <rect
      v-for="(d, i) in domains"
      :key="d.name"
      :x="barXs[i]"
      :width="barWidth"
      :y="xAxisY - 200"
      :height="200"
    />
  </svg>
</template>

<script>
export default {
  // TODO this name sucks
  name: 'Rit',
  props: {
    domains: {
      type: Array,
      required: true
    },
    xAxisLabel: {
      type: String,
      required: true
    },
    yAxisLabel: {
      type: String,
      required: true
    }
  },
  data () {
    // TODO probably make some better area objects for positioning and padding
    return {
      height: 300,
      width: 1240,
      axisTextSize: 18,
      xAxisLabelHeight: 40,
      barMargin: 20,
      barGap: 50
    }
  },
  computed: {
    yAxisX () {
      return this.axisTextSize + 2
    },
    yAxisY1 () {
      return 0
    },
    xAxisY () {
      return this.height - this.xAxisLabelHeight
    },
    xAxisX2 () {
      return this.width - (this.axisTextSize + 2)
    },
    barWidth () {
      return ((this.xAxisX2 - this.yAxisX) - ((this.domains.length - 1) * this.barGap)) / this.domains.length
    },
    barXs () {
      return this.domains.map((_, i) => i * (this.barWidth + this.barGap))
    }
  }
}
</script>

<style lang="postcss" scoped>
.axis {
  stroke-width: 2px;
  stroke: #757474;
}

.axis-label {
  font-size: 18px;
  stroke: #757474;
  text-anchor: middle;
}
</style>
