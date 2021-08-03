<template>
  <div>
    <h1 class="mb-50">
      {{ assessment.name }} - {{ assessment.subject.name }} Details
    </h1>

    <div class="assessment-details">
      <div />
      <div class="year-header">
        <!-- TODO also flip these -->
        <!-- TODO pull these from somewhere -->
        8th Grade (2020 - 2021 Results)
      </div>
      <div class="year-header">
        <!-- TODO pull these from somewhere -->
        7th Grade (2019 - 2020 Results)
      </div>

      <div />
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="text-center bg-gray-graph py-4"
      >
        {{ t.term }}
      </p>

      <p class="row-header">
        RIT Score
      </p>
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="cell"
      >
        {{ t.ritScore }}
      </p>

      <p class="row-header">
        Norm
      </p>
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="cell"
      >
        {{ t.norm }}
      </p>

      <p class="row-header">
        Growth Goal
      </p>
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="cell"
      >
        {{ t.growthGoal }}
      </p>

      <p class="row-header">
        Met Goal?
      </p>
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="cell"
      >
        <!-- TODO capitalize -->
        {{ t.metGoal }}
      </p>

      <p class="row-header">
        Percentile
      </p>
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="cell"
      >
        {{ t.percentile }}
      </p>

      <p class="row-header">
        Growth Percentile
      </p>
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="cell"
      >
        {{ t.growthPercentile }}
      </p>

      <fragment
        v-for="(pl, i) in assessment.recentTerms[0].proficiencyLevels"
        :key="pl.study"
        class="row-header"
      >
        <p class="row-header">
          <!-- TODO colors -->
          {{ pl.study }}
        </p>
        <p
          v-for="t in assessment.recentTerms"
          :key="t.id"
          class="cell"
        >
          <!-- TODO colors -->
          {{ t.proficiencyLevels[i].level }}
        </p>
      </fragment>

      <p class="row-header">
        Test Duration (Mins)
      </p>
      <p
        v-for="t in assessment.recentTerms"
        :key="t.id"
        class="cell"
      >
        {{ t.testDuration }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData ({ params, store }) {
    const assessmentId = parseInt(params.assessmentId, 10)
    const studentId = parseInt(params.studentId, 10)

    await store.dispatch('assessments/fetchResult', { studentId, assessmentId })

    return {
      studentId,
      assessmentId
    }
  },
  computed: {
    ...mapGetters('assessments', ['getResultsByStudentAndId']),
    assessment () {
      return this.getResultsByStudentAndId(this.studentId, this.assessmentId)
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

.row-header {
  @apply text-center text-gray-graph-dark;
}

.cell {
  @apply flex items-center justify-center;
}
</style>
