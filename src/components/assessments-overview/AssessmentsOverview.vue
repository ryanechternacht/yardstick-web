<template>
  <div class="assessments-overview">
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

    <assessments-overview-subject
      :subject="assessmentsData.general"
      subject-name="General"
    />
    <assessments-overview-subject
      :subject="assessmentsData.math"
      subject-name="Mathematics"
      :top-border="true"
    />
    <assessments-overview-subject
      :subject="assessmentsData.ela"
      subject-name="Reading/ELA"
      :top-border="true"
    />
  </div>
</template>

<script>
import AssessmentsOverviewSubject from '@/components/assessments-overview/AssessmentsOverviewSubject'

export default {
  name: 'AssessmentsOverview',
  components: {
    AssessmentsOverviewSubject
  },
  props: {
    assessmentsData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="postcss">
.assessments-overview {
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
