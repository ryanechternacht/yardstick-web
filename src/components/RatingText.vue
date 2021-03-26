<template>
  <span
    :class="{'text-purple-advanced': rating === 5,
             'text-green-on-track': rating === 4,
             'text-yellow-likely-on-track': rating === 3,
             'text-orange-at-risk': rating === 2,
             'text-red-off-track': rating === 1}"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'RatingText',
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
