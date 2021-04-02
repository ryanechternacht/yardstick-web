<template>
  <div>
    <the-sub-nav :links="links" />

    <nuxt-child />
  </div>
</template>

<script>
export default {
  asyncData ({ params }) {
    return {
      assessmentId: params.id,
      studentId: params.studentId
    }
  },
  computed: {
    links () {
      return [
        {
          active: this.isOverview,
          text: 'Overview',
          to: `${this.studentId}/assessments/${this.assessmentId}`
        },
        {
          active: this.isBreakdown,
          text: 'Breakdown',
          to: `${this.studentId}/assessments/${this.assessmentId}/breakdown`
        },
        {
          active: this.isDetails,
          text: 'Details',
          to: `${this.studentId}/assessments/${this.assessmentId}/details`
        }
      ]
    },
    page () {
      return this.$route.fullPath.split('/')[4]
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
