<template>
  <div class="chart-container">
    <div class="y-axis">
      <div class="y-axis-label-container">
        <p class="y-axis-label">
          {{ yAxisLabel }}
        </p>
      </div>
    </div>
    <div>
      <div
        class="grade-level-average-reference"
      >
        <div
          class="grade-level-average-reference-line"
          :style="{ top: `${gradeLevelAverageHeight}px` }"
        />
      </div>
      <div
        :style="{ height: `${chartHeight}px`,
                  'grid-template-columns': `repeat(${domains.length}, 1fr) auto` }"
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
            <h4 class="bar-label">
              {{ d.name }}
            </h4>
          </div>
        </div>
        <!-- We render both and just show one -->
        <div class="grade-level-average-reference-area">
          <div
            class="grade-level-average-reference-label label-up"
            :style="{ height: `${gradeLevelAverageHeight}px` }"
          >
            <h3 v-if="showAboveReferenceLabel">
              Grade Level Average
            </h3>
          </div>
          <div
            class="grade-level-average-reference-label"
            :style="{ height: `${chartHeight - gradeLevelAverageHeight}px` }"
          >
            <h3 v-if="!showAboveReferenceLabel">
              Grade Level Average
            </h3>
          </div>
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
      chartHeight: 400,
      // how much we're faking the bottom of the graph to make sure
      // we have room for text labels
      chartLabelBuffer: 50
    }
  },
  computed: {
    gradeLevelAverageHeight () {
      return this.chartHeight - this.barHeight(this.gradeLevelAverage)
    },
    yMax () {
      return Math.max(...this.domains.map(x => x.score), this.gradeLevelAverage) + 1
    },
    yMin () {
      return Math.min(...this.domains.map(x => x.score), this.gradeLevelAverage) - 1
    },
    yRange () {
      return this.yMax - this.yMin
    },
    showAboveReferenceLabel () {
      return (this.gradeLevelAverage - this.yMin) / this.yRange <= 0.5
    },
    actualChartHeight () {
      return this.chartHeight - this.chartLabelBuffer
    }
  },
  methods: {
    barHeight (value) {
      return ((value - this.yMin) / this.yRange * this.actualChartHeight) + this.chartLabelBuffer
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

.y-axis-label-container {
  @apply flex flex-row-reverse h-full items-center;
}

.y-axis-label {
  @apply text-gray-graph-dark mr-5;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

.x-axis {
  @apply border-gray-graph-dark border-t-2;
}

.x-axis-label {
  @apply mt-20 text-center text-gray-graph-dark;
}

.grade-level-average-reference {
  @apply relative;
}

.grade-level-average-reference-line {
  @apply border border-gray-graph-dark border-dashed absolute w-full;
  z-index: -1;
}

.grade-level-average-reference-label {
  @apply text-gray-graph-dark text-right py-10;
  width: 110px; /* Manually determined */
  margin-left: -50px;
}

.label-up {
  @apply flex flex-col-reverse
}

.chart {
  @apply flex;
}

.bar-area {
  @apply flex flex-col-reverse px-20;
}

.bar {
  @apply w-full bg-gray-graph flex items-center rounded-t-md;
}

.at-risk {
  @apply bg-blue-graph text-white;
}

.bar-label {
  @apply flex-grow text-center px-10;
}
</style>
