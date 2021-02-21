<template>
  <div>
    <h1>assessment</h1>
    <assessment-explanation
      :open="showModal"
      @closeRequested="modalClosed"
    />
  </div>
</template>

<script>
import AssessmentExplanation from '@/components/assessment-explanation/AssessmentExplanation'

export default {
  components: {
    AssessmentExplanation
  },
  data () {
    return {
      showModal: true
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

</style>
