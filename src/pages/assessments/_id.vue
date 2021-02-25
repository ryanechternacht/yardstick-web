<template>
  <div>
    <h1>NWEA MAP - Mathematics</h1>

    <h2 class="mt-50">
      Darryl is Consistently Meeting His Growth Goals in Math. All While Performing Well Above
      the Average For His Grade Level.
    </h2>

    <assessment-overview />

    <assessment-explanation
      :open="showModal"
      @closeRequested="modalClosed"
    />
  </div>
</template>

<script>
import AssessmentExplanation from '@/components/assessment-explanation/AssessmentExplanation'
import AssessmentOverview from '@/components/graphs/AssessmentOverview'

export default {
  components: {
    AssessmentExplanation,
    AssessmentOverview
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    modalClosed () {
      this.showModal = false
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

h2 {
  font-size: 32px;
  line-height: 38.4px;
}
</style>
