<template>
  <div class="mt-50">
    <h1>Assessment Scorecard</h1>

    <table class="assessment-overview">
      <thead>
        <tr>
          <th><!-- left header --></th>
          <th>Off Track</th>
          <th>At Risk</th>
          <th>Likey On Track</th>
          <th>On Track</th>
          <th>Advanced</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(a, i) in assessmentData.general"
          :key="a.name"
        >
          <th
            v-if="i === 0"
            :rowspan="assessmentData.general.length"
          >
            General
          </th>
          <td>
            <div v-if="a.score === 1">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 2">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 3">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 4">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 5">
              {{ a.name }}
            </div>
          </td>
        </tr>
        <tr
          v-for="(a, i) in assessmentData.math"
          :key="a.name"
        >
          <th
            v-if="i === 0"
            :rowspan="assessmentData.math.length"
          >
            Mathematics
          </th>
          <td>
            <div v-if="a.score === 1">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 2">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 3">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 4">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 5">
              {{ a.name }}
            </div>
          </td>
        </tr>
        <tr
          v-for="(a, i) in assessmentData.ela"
          :key="a.name"
        >
          <th
            v-if="i === 0"
            :rowspan="assessmentData.ela.length"
          >
            Reading/ELA
          </th>
          <td>
            <div v-if="a.score === 1">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 2">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 3">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 4">
              {{ a.name }}
            </div>
          </td>
          <td>
            <div v-if="a.score === 5">
              {{ a.name }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="assessment-overview-grid mt-50">
      <div />
      <div>
        Off Track
      </div>
      <div>
        At Risk
      </div>
      <div>
        Likely On Track
      </div>
      <div>
        On Track
      </div>
      <div>
        Advanced
      </div>
      <fragment
        v-for="(a, i) in assessmentData.general"
        :key="a.name"
      >
        <div
          v-if="i === 0"
          :style="`grid-row-end: span ${assessmentData.general.length}`"
        >
          General
        </div>
        <div>
          <div v-if="a.score === 1">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 2">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 3">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 4">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 5">
            {{ a.name }}
          </div>
        </div>
      </fragment>
      <fragment
        v-for="(a, i) in assessmentData.math"
        :key="a.name"
      >
        <div
          v-if="i === 0"
          :style="`grid-row-end: span ${assessmentData.math.length}`"
        >
          Mathematics
        </div>
        <div>
          <div v-if="a.score === 1">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 2">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 3">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 4">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 5">
            {{ a.name }}
          </div>
        </div>
      </fragment>
      <fragment
        v-for="(a, i) in assessmentData.ela"
        :key="a.name"
      >
        <div
          v-if="i === 0"
          :style="`grid-row-end: span ${assessmentData.ela.length}`"
        >
          Reading/ELA
        </div>
        <div>
          <div v-if="a.score === 1">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 2">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 3">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 4">
            {{ a.name }}
          </div>
        </div>
        <div>
          <div v-if="a.score === 5">
            {{ a.name }}
          </div>
        </div>
      </fragment>
    </div>
  </div>
</template>

<script>
import assessmentData from '@/assets/data/assessment-data'

export default {
  data () {
    return {
      assessmentData
    }
  }
}
</script>

<style scoped lang="postcss">
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

.assessment-overview {
  @apply border-collapse;
}

.assessment-overview-grid {
  @apply grid;
  grid-template-columns: auto repeat(5, 1fr);
}
</style>
