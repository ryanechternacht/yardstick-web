<template>
  <div>
    <the-top-nav />

    <the-side-rail />

    <div class="margin-for-siderail">
      <Nuxt class="ys-container" />
    </div>
  </div>
</template>

<script>
import TheTopNav from '@/components/layout/TheTopNav'
import TheSideRail from '@/components/layout/TheSideRail'

export default {
  components: {
    TheTopNav,
    TheSideRail
  },
  middleware: ['enforce-auth']
}
</script>

<style lang="postcss" scoped>
.margin-for-siderail {
  margin-left: 90px;
}

.ys-container {
  /* a modified container to account for the siderail.
     this only works on xl right now
  */
  @apply mx-auto;
  max-width: 1190px;
}
</style>
