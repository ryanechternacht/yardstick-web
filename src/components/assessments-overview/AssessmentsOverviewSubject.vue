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
        <h5 class="subject">
          {{ subjectName }}
        </h5>
      </div>
      <assessments-overview-rating
        :rating="rating"
        :horizontal-border="topBorder && i === 0"
        :first="i === 0"
      />
    </fragment>
  </fragment>
</template>

<script>
import AssessmentsOverviewRating from '@/components/assessments-overview/AssessmentsOverviewRating'

export default {
  name: 'AssessmentsOverviewSubject',
  components: {
    AssessmentsOverviewRating
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
}
</style>
