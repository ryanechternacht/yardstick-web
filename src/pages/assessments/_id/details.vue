<template>
  <div>
    <h1 class="mb-50">
      {{ assessment.name }} - {{ subject.name }} Details
    </h1>

    <div class="assessment-details">
      <div />
      <div class="year-header">
        8th Grade (2020 - 2021 Results)
      </div>
      <div class="year-header">
        7th Grade (2019 - 2020 Results)
      </div>

      <div />
      <div
        v-for="t in terms"
        :key="t.id"
        class="term-header"
      >
        {{ t.term }}
      </div>

      <div class="row-header">
        RIT Score
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.ritScore }}
      </div>

      <div class="row-header">
        Norm
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.norm }}
      </div>

      <div class="row-header">
        Growth Goal
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.growthGoal }}
      </div>

      <div class="row-header">
        Met Goal?
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.metGoal }}
      </div>

      <div class="row-header">
        Percentile
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.percentile }}
      </div>

      <div class="row-header">
        Growth Percentile
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.growthPercentile }}
      </div>

      <div class="row-header">
        ACT College Readiness
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.actCollegeReadiness }}
      </div>

      <div class="row-header">
        Forward Projection
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.forwardProjection }}
      </div>

      <div class="row-header">
        Test Duration (Mins)
      </div>
      <div
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.testDuration }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // TODO where does these come from?
      assessment: {
        name: 'NWEA MAP',
        shortName: 'MAP',
        scale: 'RIT Score'
      },
      subject: {
        name: 'Mathematics'
      },
      terms: [
        // This ordering is weird
        {
          id: 4,
          year: 2021,
          grade: 8,
          term: 'Fall',
          ritScore: 232,
          norm: 224.9,
          growthGoal: null,
          metGoal: null,
          percentile: 76,
          growthPercentile: 52,
          actCollegeReadiness: 'Not on Track',
          forwardProjection: 'Proficient',
          testDuration: 37
        },
        {
          id: 5,
          year: 2021,
          grade: 8,
          term: 'Winter',
          ritScore: 239,
          norm: 228.1,
          growthGoal: 6,
          metGoal: true,
          percentile: 70,
          growthPercentile: 98,
          actCollegeReadiness: 'On Track for a 24',
          forwardProjection: 'Proficient',
          testDuration: 84
        },
        {
          id: 6,
          year: '-',
          grade: '-',
          term: 'Spring',
          ritScore: '-',
          norm: '-',
          growthGoal: '-',
          metGoal: '-',
          percentile: '-',
          growthPercentile: '-',
          actCollegeReadiness: '-',
          forwardProjection: '-',
          testDuration: '-'
        },
        {
          id: 1,
          year: 2020,
          grade: 7,
          term: 'Fall',
          ritScore: 233,
          norm: 220.2,
          growthGoal: null,
          metGoal: null,
          percentile: 75,
          growthPercentile: 65,
          actCollegeReadiness: 'Not on Track',
          forwardProjection: 'Proficient',
          testDuration: 68
        },
        {
          id: 2,
          year: 2020,
          grade: 7,
          term: 'Winter',
          ritScore: 235,
          norm: 224.1,
          growthGoal: 5,
          metGoal: null,
          percentile: 74,
          growthPercentile: 82,
          actCollegeReadiness: 'On Track for a 22',
          forwardProjection: 'Advanced',
          testDuration: 71
        },
        {
          id: 3,
          year: 2020,
          grade: 7,
          term: 'Spring',
          ritScore: 236,
          norm: 226.7,
          growthGoal: 4,
          metGoal: true,
          percentile: 66,
          growthPercentile: 51,
          actCollegeReadiness: 'Not on Track',
          forwardProjection: 'Proficient',
          testDuration: 62
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.assessment-details {
  @apply grid gap-10;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(11, auto);
}

.year-header {
  @apply text-center bg-gray-graph py-7;
  grid-column: span 3;
  font-size: 22px;
  line-height: 26px;
}

.term-header {
  @apply text-center bg-gray-graph py-4;
  font-size: 18px;
  line-height: 21.6px;
}

.row-header {
  @apply text-center text-gray-graph-dark;
  font-size: 18px;
  line-height: 21.6px;
}

.cell {
  @apply flex items-center justify-center;
  font-size: 18px;
  line-height: 21.6px;
}
</style>
