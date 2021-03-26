<template>
  <div class="mt-50">
    <h1>Assessment Scorecard</h1>

    <assessments-overview
      class="mt-50 mb-90"
      :assessments-data="assessmentsData"
    />
  </div>
</template>

<script>
import assessmentsData from '@/assets/data/assessments-data'
import AssessmentsOverview from '@/components/assessments-overview/AssessmentsOverview'

export default {
  components: {
    AssessmentsOverview
  },
  data () {
    return {
      assessmentsData
    }
  }
}
</script>

<style scoped lang="postcss">
</style>
