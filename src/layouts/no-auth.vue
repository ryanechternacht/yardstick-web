<template>
  <div>
    <the-top-nav />

    <Nuxt class="ys-container" />
  </div>
</template>

<script>
import TheTopNav from '@/components/layout/TheTopNav'

export default {
  components: {
    TheTopNav
  }
}
</script>

<style lang="postcss" scoped>
.ys-container {
  /* a modified container to account for the siderail.
     this only works on xl right now
  */
  @apply mx-auto;
  max-width: 1190px;
}
</style>
