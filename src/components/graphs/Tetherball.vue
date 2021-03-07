<template>
  <svg
    :height="height"
    :width="width"
  >
    <defs>
      <filter id="shadow">
        <feDropShadow
          dx="5"
          dy="10"
          stdDeviation="2"
          flood-opacity=".25"
        />
      </filter>
    </defs>
    <line
      class="axis"
      :x1="axisX1"
      :x2="axisX2"
      :y1="axisY"
      :y2="axisY"
    />
    <text
      class="axis-label"
      :x="axisX1"
      :y="axisLabelY"
    >
      0
    </text>
    <text
      class="axis-label"
      :x="axisX2"
      :y="axisLabelY"
    >
      100
    </text>
    <circle
      class="marker"
      :cx="markerX"
      :cy="axisY"
      filter="url(#shadow)"
      :r="circleRadius"
    />
    <text
      class="marker-text"
      :x="markerX"
      :y="axisY + 2"
    >
      {{ percentile }}{{ percentileTextSuffix }}
    </text>
  </svg>
</template>

<script>
export default {
  name: 'Tetherball',
  props: {
    name: {
      type: String,
      required: true
    },
    percentile: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      height: 170,
      circleRadius: 50,
      axisTextSize: 18,
      markerTextSize: 35
    }
  },
  computed: {
    axisY () {
      return this.height / 2
    },
    axisX1 () {
      return this.circleRadius
    },
    axisX2 () {
      return this.width - this.circleRadius
    },
    axisLabelY () {
      return this.axisY + this.axisTextSize + 2
    },
    markerX () {
      return (this.axisX2 - this.axisX1) / 100 * this.percentile + this.axisX1
    },
    percentileTextSuffix () {
      const ones = this.percentile % 10
      if (this.percentile === 11 || this.percentile === 12 ||
        (ones !== 1 && ones !== 2)) {
        return 'th'
      } else if (ones === 1) {
        return 'st'
      } else { // (ones === 2)
        return 'nd'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.axis {
  stroke: #757474; /* graph dark gray */
  stroke-width: 5px;
}

.axis-label {
  font-size: 18px;
  fill: #757474; /* graph dark gray */
  text-anchor: middle;
}

.marker {
  fill: #F4F4F4; /* graph_grey */
}

.marker-text {
  font-size: 35px;
  line-height: 42px;
  text-anchor: middle;
  dominant-baseline: middle;
}
</style>
