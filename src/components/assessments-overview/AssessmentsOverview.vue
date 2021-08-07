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
      :student-id="studentId"
      :subject="general"
      subject-name="General"
    />
    <assessments-overview-subject
      :student-id="studentId"
      :subject="math"
      subject-name="Mathematics"
      :top-border="true"
    />
    <assessments-overview-subject
      :student-id="studentId"
      :subject="ela"
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
    assessments: {
      type: Array,
      required: true
    },
    studentId: {
      type: Number,
      required: true
    }
  },
  computed: {
    general () {
      return this.assessments.filter(a => a.subject === 'general')
    },
    math () {
      return this.assessments.filter(a => a.subject === 'math')
    },
    ela () {
      return this.assessments.filter(a => a.subject === 'ela')
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
