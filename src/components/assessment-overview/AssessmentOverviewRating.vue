<template>
  <fragment>
    <div
      class="pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessment-overview-bubble
        v-if="rating.score === 1"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessment-overview-bubble
        v-if="rating.score === 2"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessment-overview-bubble
        v-if="rating.score === 3"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessment-overview-bubble
        v-if="rating.score === 4"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessment-overview-bubble
        v-if="rating.score === 5"
        :rating="rating"
      />
    </div>
  </fragment>
</template>

<script>
import AssessmentOverviewBubble from '@/components/assessment-overview/AssessmentOverviewBubble'

export default {
  name: 'AssessmentOverviewRating',
  components: {
    AssessmentOverviewBubble
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
