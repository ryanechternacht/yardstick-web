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
      studentId: params.studentId
    }
  },
  computed: {
    links () {
      return [
        {
          active: this.isOpportunities,
          text: 'Opportunities',
          to: `/${this.studentId}/obstacles-and-opportunities/opportunities`
        },
        {
          active: this.isObstacles,
          text: 'Obstacles',
          to: `/${this.studentId}/obstacles-and-opportunities/obstacles`
        }
      ]
    },
    page () {
      return this.$route.fullPath.split('/')[3]
    },
    isOpportunities () {
      return this.page === 'opportunities'
    },
    isObstacles () {
      return this.page === 'obstacles'
    }
  }
}
</script>
