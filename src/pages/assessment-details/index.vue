<template>
  <div class="mt-50">
    <h1>Assessment Scorecard</h1>

    <assessment-overview
      class="mt-50 mb-90"
      :assessment-data="assessmentData"
    />
  </div>
</template>

<script>
import assessmentData from '@/assets/data/assessment-data'
import AssessmentOverview from '@/components/assessment-overview/AssessmentOverview'

export default {
  components: {
    AssessmentOverview
  },
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
</style>
