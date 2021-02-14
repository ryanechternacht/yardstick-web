<template>
  <div class="assessment-overview">
    <div />
    <div class="header border-red-off-track">
      Off Track
    </div>
    <div class="header border-orange-at-risk">
      At Risk
    </div>
    <div class="header border-yellow-likely-on-track">
      Likely On Track
    </div>
    <div class="header border-green-on-track">
      On Track
    </div>
    <div class="header border-purple-advanced">
      Advanced
    </div>

    <assessment-overview-subject
      :subject="assessmentData.general"
      subject-name="General"
    />
    <assessment-overview-subject
      :subject="assessmentData.math"
      subject-name="Mathematics"
      :top-border="true"
    />
    <assessment-overview-subject
      :subject="assessmentData.ela"
      subject-name="Reading/ELA"
      :top-border="true"
    />
  </div>
</template>

<script>
import AssessmentOverviewSubject from '@/components/assessment-overview/AssessmentOverviewSubject'

export default {
  name: 'AssessmentOverview',
  components: {
    AssessmentOverviewSubject
  },
  props: {
    assessmentData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="postcss">
.assessment-overview {
  @apply grid;
  grid-template-columns: auto repeat(5, 1fr);
  grid-template-rows: auto;
}

.header {
  @apply text-center border-b-3 pb-8 mx-10 mb-40;
  font-size: 25px;
  line-height: 30px;
}
</style>
