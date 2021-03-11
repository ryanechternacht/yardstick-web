<template>
  <div class="chart-container">
    <div class="y-axis">
      <div class="flex h-full items-center">
        <p class="y-axis-label">
          RIT Score
        </p>
      </div>
    </div>
    <div style="height: 400px; width=600px">
      <!-- chart -->
    </div>
    <div>
      <!-- nothing (origin) -->
    </div>
    <div class="x-axis">
      <p class="x-axis-label">
        NWEA Map Mathematics Domains
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RitHtml'
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
</style>
