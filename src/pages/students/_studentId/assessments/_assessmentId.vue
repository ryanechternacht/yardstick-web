<template>
  <div>
    <!-- TODO some bug exists navigating to one page, then to another -->

    <the-sub-nav :links="links" />

    <nuxt-child />
  </div>
</template>

<script>
import TheSubNav from '@/components/layout/TheSubNav'

export default {
  components: {
    TheSubNav
  },
  asyncData ({ params }) {
    return {
      assessmentId: parseInt(params.assessmentId, 10),
      studentId: parseInt(params.studentId, 10)
    }
  },
  computed: {
    links () {
      return [
        {
          active: this.isOverview,
          text: 'Overview',
          to: `/students/${this.studentId}/assessments/${this.assessmentId}`
        },
        {
          active: this.isBreakdown,
          text: 'Breakdown',
          to: `/students/${this.studentId}/assessments/${this.assessmentId}/breakdown`
        },
        {
          active: this.isDetails,
          text: 'Details',
          to: `/students/${this.studentId}/assessments/${this.assessmentId}/details`
        }
      ]
    },
    page () {
      return this.$route.fullPath.split('/')[5]
    },
    isOverview () {
      return this.page === undefined
    },
    isBreakdown () {
      return this.page === 'breakdown'
    },
    isDetails () {
      return this.page === 'details'
    }
  }
}
</script>
