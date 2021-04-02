<template>
  <div>
    <the-sub-nav :links="links" />

    <nuxt-child />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('settings', ['settings']),
    links () {
      const studentId = this.settings.studentId
      return [
        {
          active: this.isOpportunities,
          text: 'Opportunities',
          to: `/${studentId}/obstacles-and-opportunities/opportunities`
        },
        {
          active: this.isObstacles,
          text: 'Obstacles',
          to: `/${studentId}/obstacles-and-opportunities/obstacles`
        }
      ]
    },
    page () {
      return this.$route.fullPath.split('/')[2]
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
