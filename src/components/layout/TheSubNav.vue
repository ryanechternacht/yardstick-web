<template>
  <nav class="sub-nav">
    <nuxt-link
      v-for="l in links"
      :key="l.to"
      :to="l.to"
      class="sub-nav-item"
      :class="{'sub-nav-item--active': l.active}"
    >
      <h5>
        {{ l.text }}
      </h5>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'TheSubNav',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.sub-nav {
  @apply w-full flex justify-center mb-20;
}

.sub-nav-item {
  @apply py-10 text-center mx-10 text-gray-graph-dark font-medium;
  width: 280px;
}

.sub-nav-item--active {
  @apply border-blue border-b text-blue;
}
</style>
