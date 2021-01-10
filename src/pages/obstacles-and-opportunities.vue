<template>
  <div>
    <nav class="sub-nav">
      <nuxt-link
        to="/obstacles-and-opportunities/opportunities"
        class="sub-nav-item"
        :class="{'sub-nav-item--active': isOpportunities}"
      >
        Opportunities
      </nuxt-link>
      <nuxt-link
        to="/obstacles-and-opportunities/obstacles"
        class="sub-nav-item"
        :class="{'sub-nav-item--active': isObstacles}"
      >
        Obstacles
      </nuxt-link>
    </nav>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  computed: {
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
.sub-nav {
  @apply w-full flex justify-center;
}

.sub-nav-item {
  @apply py-10 text-center mx-10 text-blue font-bold;
  font-size: 20px;
  line-height: 24px;
  width: 280px;
}

.sub-nav-item--active {
  @apply border-blue border-b;
}
</style>
