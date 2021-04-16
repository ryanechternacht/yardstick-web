<template>
  <fragment>
    <div
      class="pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.rating === 1"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.rating === 2"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.rating === 3"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.rating === 4"
        :rating="rating"
      />
    </div>
    <div
      class="vertical-border pb-15"
      :class="{'horizontal-border': horizontalBorder,
               'pt-15': first}"
    >
      <assessments-overview-bubble
        v-if="rating.rating === 5"
        :rating="rating"
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
