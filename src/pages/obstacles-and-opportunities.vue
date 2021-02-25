<template>
  <div>
    <the-sub-nav :links="links" />

    <nuxt-child />
  </div>
</template>

<script>
export default {
  computed: {
    links () {
      return [
        {
          active: this.isOpportunities,
          text: 'Opportunities',
          to: '/obstacles-and-opportunities/opportunities'
        },
        {
          active: this.isObstacles,
          text: 'Obstacles',
          to: '/obstacles-and-opportunities/obstacles'
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

<style lang="postcss" scoped>

</style>
