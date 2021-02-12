<template>
  <fragment>
    <fragment
      v-for="(rating, i) in subject"
      :key="rating.name"
    >
      <div
        v-if="i === 0"
        :style="`grid-row-end: span ${subject.length}`"
      >
        {{ subjectName }}
      </div>
      <assessment-overview-rating :rating="rating" />
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
    subjectName: {
      type: String,
      required: true
    },
    subject: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="postcss">

</style>
