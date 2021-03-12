<template>
  <div class="chart-container">
    <div class="y-axis">
      <div class="flex h-full items-center">
        <p class="y-axis-label">
          {{ yAxisLabel }}
        </p>
      </div>
    </div>
    <div
      :style="{ height: `${chartHeight}px`,
                'grid-template-columns': `repeat(${domains.length}, 1fr)` }"
      class="grid gap-x-60"
    >
      <div
        v-for="(d, i) in domains"
        :key="i"
        class="bar-area"
      >
        <div
          class="bar"
          :style="{ height: `${barHeight(d.score)}px` }"
          :class="{ 'at-risk': isAtRisk(d.score) }"
        >
          <p class="bar-label">
            {{ d.name }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <!-- nothing (origin) -->
    </div>
    <div class="x-axis">
      <p class="x-axis-label">
        {{ xAxisLabel }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // TODO this name still sucks
  name: 'RitHtml',
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
    },
    gradeLevelAverage: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      chartHeight: 400
    }
  },
  computed: {
    yMax () {
      // TODO calc this
      return 286
    },
    yMin () {
      // TODO calc this
      return 272
    },
    yRange () {
      return this.yMax - this.yMin
    }
  },
  methods: {
    barHeight (value) {
      return (value - this.yMin) / this.yRange * this.chartHeight
    },
    isAtRisk (score) {
      return score <= this.gradeLevelAverage
    }
  }
}
</script>

<style lang="postcss" scoped>
.chart-container {
  @apply grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 50px;
}

.y-axis {
  @apply border-gray-graph-dark border-r-2;
}

.y-axis-label {
  @apply text-gray-graph-dark;
  font-size: 18px;
  line-height: 21.6px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

.x-axis {
  @apply border-gray-graph-dark border-t-2;
}

.x-axis-label {
  @apply mt-10 text-center text-gray-graph-dark;
}

.chart {
  @apply flex;
}

.bar-area {
  @apply flex-grow h-full flex flex-col-reverse px-20;
}

.bar {
  @apply w-full bg-gray-graph flex items-center rounded-t-md;
}

.at-risk {
  @apply bg-blue-graph text-white;
}

.bar-label {
  @apply flex-grow text-center px-10;
  font-size: 24px;
  line-height: 28.8px;
}
</style>
