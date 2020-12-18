<template>
  <nav>
    <div class="top-nav-spacer" />

    <div class="links">
      <nuxt-link
        class="link"
        :class="{'link--active': siteSection === 'home'}"
        to="/"
      >
        <font-awesome-icon
          :icon="['fas', 'home']"
          class="icon"
        />
        <div class="link-text">
          Home
        </div>
      </nuxt-link>

      <nuxt-link
        class="link"
        :class="{'link--active': siteSection === 'how-to-help'}"
        to="/how-to-help"
      >
        <font-awesome-icon
          :icon="['fas', 'head-side-virus']"
          class="icon"
        />
        <div class="link-text">
          How to Help
        </div>
      </nuxt-link>

      <nuxt-link
        class="link"
        :class="{'link--active': siteSection === 'obstacles-and-opportunities'}"
        to="/obstacles-and-opportunities"
      >
        <font-awesome-icon
          :icon="['fas', 'flag']"
          class="icon"
        />
        <div class="link-text">
          Obstacles &amp; Opportunities
        </div>
      </nuxt-link>

      <nuxt-link
        class="link"
        :class="{'link--active': siteSection === 'assessment-details'}"
        to="/assessment-details"
      >
        <font-awesome-icon
          :icon="['fas', 'chart-bar']"
          class="icon"
        />
        <div class="link-text">
          Assessment Details
        </div>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      siteSection: ''
    }
  },
  watch: {
    $route () {
      this.updateSiteSection()
    }
  },
  created () {
    this.updateSiteSection()
  },
  methods: {
    updateSiteSection () {
      const path = (this.$route.matched.length && this.$route.matched[0].path) || ''
      switch (path) {
        case '/how-to-help':
          this.siteSection = 'how-to-help'
          break
        case '/obstacles-and-opportunities':
          this.siteSection = 'obstacles-and-opportunities'
          break
        case '/assessment-details':
          this.siteSection = 'assessment-details'
          break
        case '/':
        default:
          this.siteSection = 'home'
      }
    }
  }
}
</script>

<style scoped lang="postcss">
nav {
  @apply fixed top-0 left-0 h-full z-10 w-90 border-r-2 border-gray-graph;
}

.links {
  @apply flex flex-col items-center;
}

.link {
  @apply flex flex-col cursor-pointer items-center mt-20 text-gray-text;
}

.link--active {
  @apply text-blue;
}

.icon {
  @apply block w-24 h-24 m-6;
}

.link-text {
  @apply text-center px-12;
  font-size: 12px;
}

.top-nav-spacer {
  @apply h-60;
}

/* TODO active icons */
</style>
