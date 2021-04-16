<template>
  <div class="mt-50">
    <h1>Assessment Scorecard</h1>

    <assessments-overview
      class="mt-50 mb-90"
      :assessments="assessments"
    />
  </div>
</template>

<script>
import assessments from '@/assets/data/assessments'
import AssessmentsOverview from '@/components/assessments-overview/AssessmentsOverview'

export default {
  components: {
    AssessmentsOverview
  },
  data () {
    return {
      assessments
    }
  }
}
</script>

<style scoped lang="postcss">
</style>
