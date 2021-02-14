<template>
  <fragment>
    <fragment
      v-for="(rating, i) in subject"
      :key="rating.name"
    >
      <div
        v-if="i === 0"
        :style="`grid-row-end: span ${subject.length}`"
        class="subject-header"
      >
        <div class="subject">
          {{ subjectName }}
        </div>
      </div>
      <assessment-overview-rating
        :rating="rating"
        :horizontal-border="topBorder && i === 0"
      />
    </fragment>
  </fragment>
</template>

<script>
import AssessmentOverviewRating from '@/components/assessment-overview/AssessmentOverviewRating'

export default {
  name: 'AssessmentOverviewSubject',
  components: {
    AssessmentOverviewRating
  },
  props: {
    subject: {
      type: Array,
      required: true
    },
    subjectName: {
      type: String,
      required: true
    },
    topBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="postcss">
.subject-header {
  @apply flex items-center;
}

.subject {
  @apply w-full text-center mr-20;
  font-size: 20px;
  line-height: 24px;
}
</style>
