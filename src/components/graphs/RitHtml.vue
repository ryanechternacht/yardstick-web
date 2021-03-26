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
        <h3
          class="grade-level-average-reference-label"
          :style="{ top: `${gradeLevelAverageHeight - 60}px` }"
        >
          Grade Level Average
        </h3>
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
            <h4 class="bar-label">
              {{ d.name }}
            </h4>
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
      chartHeight: 400
    }
  },
  computed: {
    gradeLevelAverageHeight () {
      return this.chartHeight - this.barHeight(this.gradeLevelAverage)
    },
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
  @apply w-full relative;
}

.grade-level-average-reference-line {
  @apply border border-gray-graph-dark border-dashed absolute w-full;
  z-index: -1;
}

.grade-level-average-reference-label {
  @apply text-gray-graph-dark absolute text-center;
  width: 150px;
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
}
</style>
