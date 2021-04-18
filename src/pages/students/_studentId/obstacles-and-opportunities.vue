<template>
  <div>
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
      studentId: parseInt(params.studentId, 10)
    }
  },
  computed: {
    links () {
      return [
        {
          active: this.isOpportunities,
          text: 'Opportunities',
          to: `/students/${this.studentId}/obstacles-and-opportunities/opportunities`
        },
        {
          active: this.isObstacles,
          text: 'Obstacles',
          to: `/students/${this.studentId}/obstacles-and-opportunities/obstacles`
        }
      ]
    },
    page () {
      return this.$route.fullPath.split('/')[4]
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
