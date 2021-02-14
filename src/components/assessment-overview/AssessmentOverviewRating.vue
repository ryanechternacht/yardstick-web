<template>
  <fragment>
    <div :class="{'horizontal-border': horizontalBorder}">
      <div
        v-if="rating.score === 1"
        class="rating-bubble bg-red-off-track"
      >
        <div class="rating-text">
          {{ rating.name }}
        </div>
      </div>
    </div>
    <div
      class="vertical-border"
      :class="{'horizontal-border': horizontalBorder}"
    >
      <div
        v-if="rating.score === 2"
        class="rating-bubble bg-orange-at-risk"
      >
        <div class="rating-text">
          {{ rating.name }}
        </div>
      </div>
    </div>
    <div
      class="vertical-border"
      :class="{'horizontal-border': horizontalBorder}"
    >
      <div
        v-if="rating.score === 3"
        class="rating-bubble bg-yellow-likely-on-track"
      >
        <div class="rating-text">
          {{ rating.name }}
        </div>
      </div>
    </div>
    <div
      class="vertical-border"
      :class="{'horizontal-border': horizontalBorder}"
    >
      <div
        v-if="rating.score === 4"
        class="rating-bubble bg-green-on-track"
      >
        <div class="rating-text">
          {{ rating.name }}
        </div>
      </div>
    </div>
    <div
      class="vertical-border"
      :class="{'horizontal-border': horizontalBorder}"
    >
      <div
        v-if="rating.score === 5"
        class="rating-bubble bg-purple-advanced"
      >
        <div class="rating-text">
          {{ rating.name }}
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  name: 'AssessmentOverviewRating',
  props: {
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
.rating-bubble {
  @apply flex items-center h-60 rounded-md mx-10 mt-15 mb-25;
  box-shadow: 3px 10px 4px rgba(0, 0, 0, 0.25);
}

.rating-text {
  @apply text-center text-white font-bold w-full mx-10;
  font-size: 20px;
  line-height: 24px;
}

.vertical-border {
  @apply border-l border-gray-spacer;
}

.horizontal-border {
  @apply border-t-2 border-gray-spacer;
}
</style>
