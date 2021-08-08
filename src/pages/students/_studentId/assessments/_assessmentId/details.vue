<template>
  <div>
    <h1 class="mb-50">
      {{ assessment.name }} Details
    </h1>

    <!-- TODO what if no data? -->
    <!-- TODO dynamic column count -->

    <div class="assessment-details">
      <div />
      <fragment v-if="hasTwoYears">
        <div
          class="year-header"
        >
          {{ terms[0].grade }} Grade ({{ lastYear.name }} Results)
        </div>
        <div class="year-header">
          {{ terms[3].grade }} Grade ({{ thisYear.name }} Results)
        </div>
      </fragment>

      <fragment v-else>
        <div>
          {{ terms[0].grade }} Grade ({{ thisYear.name }} Results)
        </div>
        <div class="year-header-blank" />
      </fragment>

      <div />
      <p
        v-for="t in terms"
        :key="t.id"
        class="text-center bg-gray-graph py-4"
      >
        {{ t.term }}
      </p>

      <p class="row-header">
        <!-- TODO pull from scale -->
        RIT Score
      </p>
      <p
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.ritScore }}
      </p>

      <p class="row-header">
        Norm
      </p>
      <p
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.norm }}
      </p>

      <p class="row-header">
        Growth Goal
      </p>
      <p
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.growthGoal }}
      </p>

      <p class="row-header">
        Met Goal?
      </p>
      <p
        v-for="t in terms"
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
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.percentile }}
      </p>

      <p class="row-header">
        Growth Percentile
      </p>
      <p
        v-for="t in terms"
        :key="t.id"
        class="cell"
      >
        {{ t.growthPercentile }}
      </p>

      <fragment
        v-for="(pl, i) in terms[0].proficiencyLevels"
        :key="pl.study"
        class="row-header"
      >
        <p class="row-header">
          <!-- TODO colors -->
          {{ pl.study }}
        </p>
        <p
          v-for="t in terms"
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
        v-for="t in terms"
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
    ...mapGetters('settings', ['getSettings']),
    assessment () {
      return this.getResultsByStudentAndId(this.studentId, this.assessmentId)
    },
    hasTwoYears () {
      return this.terms.length > 3
    },
    terms () {
      return this.assessment ? this.assessment.recentTerms : []
    },
    thisYear () {
      return this.getSettings.this_academic_year
    },
    lastYear () {
      return this.getSettings.last_academic_year
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

.year-header-blank {
  grid-column: span 3;
}

.row-header {
  @apply text-center text-gray-graph-dark;
}

.cell {
  @apply flex items-center justify-center;
}
</style>
