<template>
  <div class="mt-50">
    <h1>Assessment Scorecard</h1>

    <assessments-overview
      class="mt-50 mb-90"
      :assessments="overviews"
      :student-id="studentId"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AssessmentsOverview from '@/components/assessments-overview/AssessmentsOverview'

export default {
  components: {
    AssessmentsOverview
  },
  async asyncData ({ params, store }) {
    const studentId = parseInt(params.studentId, 10)

    await store.dispatch('assessments/fetchOverviews', { studentId })

    return {
      studentId
    }
  },
  computed: {
    ...mapGetters('assessments', ['getOverviewsByStudent']),
    overviews () {
      return this.getOverviewsByStudent(this.studentId)
    }
  }
}
</script>

<style scoped lang="postcss">
</style>
