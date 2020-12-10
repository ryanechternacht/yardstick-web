<template>
  <div>
    <the-top-nav />

    <the-side-rail />

    <Nuxt class="margin-for-side-rail" />
  </div>
</template>

<script>
import TheTopNav from '@/components/layout/TheTopNav'
import TheSideRail from '@/components/layout/TheSideRail'

export default {
  components: {
    TheTopNav,
    TheSideRail
  }
}
</script>

<style lang="postcss" scoped>
.margin-for-side-rail {
  @apply ml-90;
}
</style>
