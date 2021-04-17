<template>
  <div>
    <h1>{{ assessment.name }} - {{ assessment.subject }} Breakdown</h1>
    <h2 class="mt-50">
      Growth v. Achievement ({{ assessment.latestTerm.fullName }})
    </h2>
    <percentile
      name="Achievement"
      :percentile="assessment.achievement"
      :width="1200"
    />
    <percentile
      name="Growth"
      :percentile="assessment.growth"
      :width="1200"
    />
    <div style="height: 50px" />
    <rit-html
      :x-axis-label="`${assessment.name} ${assessment.subject} Domains`"
      :y-axis-label="assessment.scale"
      :domains="assessment.latestTerm.domains"
      :grade-level-average="assessment.latestTerm.gradeLevelAverage"
    />
    <div style="height: 50px" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Percentile from '@/components/graphs/Percentile'
import RitHtml from '@/components/graphs/RitHtml'

// TODO nuxt screen size - https://www.npmjs.com/package/nuxt-ssr-screen-size
export default {
  components: {
    Percentile,
    RitHtml
  },
  async asyncData ({ params, store }) {
    const assessmentId = parseInt(params.assessmentId)
    const studentId = params.studentId

    await store.dispatch('assessments/fetchResult', { studentId, assessmentId })

    return {
      studentId,
      assessmentId
    }
  },
  computed: {
    ...mapGetters('assessments', ['resultsByStudentAndId']),
    assessment () {
      return this.resultsByStudentAndId(this.studentId, this.assessmentId)
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
