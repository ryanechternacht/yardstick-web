<template>
  <fragment>
    <div
      class="pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.yardstick_performance_rating <= 20"
        :rating="rating"
        :student-id="studentId"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.yardstick_performance_rating >= 21 && rating.yardstick_performance_rating <= 40"
        :rating="rating"
        :student-id="studentId"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.yardstick_performance_rating >= 41 && rating.yardstick_performance_rating <= 60"
        :rating="rating"
        :student-id="studentId"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.yardstick_performance_rating >= 61 && rating.yardstick_performance_rating <= 80"
        :rating="rating"
        :student-id="studentId"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.yardstick_performance_rating >= 81"
        :rating="rating"
        :student-id="studentId"
      />
    </div>
  </fragment>
</template>

<script>
import AssessmentsOverviewBubble from '@/components/assessments-overview/AssessmentsOverviewBubble'

export default {
  name: 'AssessmentsOverviewRating',
  components: {
    AssessmentsOverviewBubble
  },
  props: {
    first: {
      type: Boolean,
      default: false
    },
    horizontalBorder: {
      type: Boolean,
      default: true
    },
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

<style scoped lang="postcss">
.vertical-border {
  @apply border-l border-gray-spacer;
}

.horizontal-border {
  @apply border-t-2 border-gray-spacer;
}
</style>
