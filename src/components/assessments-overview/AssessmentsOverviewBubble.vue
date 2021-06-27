<template>
  <!-- TODO pull out these numbers as an enum? -->
  <nuxt-link
    class="rating-bubble"
    :class="{'bg-red-off-track': rating.yardstick_performance_rating <= 20,
             'bg-orange-at-risk': rating.yardstick_performance_rating >= 21 && rating.yardstick_performance_rating <= 40,
             'bg-yellow-likely-on-track': rating.yardstick_performance_rating >= 41 && rating.yardstick_performance_rating <= 60,
             'bg-green-on-track': rating.yardstick_performance_rating >= 61 && rating.yardstick_performance_rating <= 80,
             'bg-purple-advanced': rating.yardstick_performance_rating >= 81}"
    :to="`/students/${studentId}/assessments/${rating.id}`"
  >
    <h5 class="rating-text">
      {{ rating.name }}
    </h5>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AssessmentsOverviewBubble',
  props: {
    rating: {
      type: Object,
      required: true
    },
    studentId: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.rating-bubble {
  @apply flex items-center h-60 rounded-md mx-10 mb-10;
  box-shadow: 3px 10px 4px rgba(0, 0, 0, 0.25);
}

.rating-text {
  @apply text-center text-white font-bold w-full mx-10;
}
</style>
