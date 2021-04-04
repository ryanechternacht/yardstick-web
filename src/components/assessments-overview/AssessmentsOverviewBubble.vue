<template>
  <!-- TODO pull out these numbers as an enum? -->
  <nuxt-link
    class="rating-bubble"
    :class="{'bg-red-off-track': rating.score === 1,
             'bg-orange-at-risk': rating.score === 2,
             'bg-yellow-likely-on-track': rating.score === 3,
             'bg-green-on-track': rating.score === 4,
             'bg-purple-advanced': rating.score === 5}"
    :to="`/students/${studentId}/assessments/${rating.id}`"
  >
    <h5 class="rating-text">
      {{ rating.name }}
    </h5>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AssessmentsOverviewBubble',
  props: {
    rating: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('settings', ['settings']),
    studentId () {
      return this.settings.currentStudent
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
