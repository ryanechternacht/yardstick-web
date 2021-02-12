<template>
  <div class="assessment-overview">
    <div />
    <div>
      Off Track
    </div>
    <div>
      At Risk
    </div>
    <div>
      Likely On Track
    </div>
    <div>
      On Track
    </div>
    <div>
      Advanced
    </div>

    <assessment-overview-subject
      :subject="assessmentData.general"
      subject-name="General"
    />
    <assessment-overview-subject
      :subject="assessmentData.math"
      subject-name="Mathematics"
    />
    <assessment-overview-subject
      :subject="assessmentData.ela"
      subject-name="Reading/ELA"
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
}
</style>
