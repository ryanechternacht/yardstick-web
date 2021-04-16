<template>
  <div class="mt-50">
    <h1>Assessment Scorecard</h1>

    <assessments-overview
      class="mt-50 mb-90"
      :assessments="overviews"
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
  asyncData ({ params }) {
    return {
      studentId: params.studentId
    }
  },
  computed: {
    ...mapGetters('assessments', ['overviewsByStudent']),
    overviews () {
      return this.overviewsByStudent(this.studentId)
    }
  }
}
</script>

<style scoped lang="postcss">
</style>
