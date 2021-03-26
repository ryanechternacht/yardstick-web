<template>
  <div>
    <h1>{{ assessment.name }} - {{ subject.name }}</h1>

    <h2 class="mt-50">
      Darryl is Consistently Meeting His Growth Goals in Math. All While Performing Well Above
      the Average For His Grade Level.
    </h2>

    <assessment-overview
      class="my-graph"
      :graph-data="graphData"
      height="600px"
      width="1200px"
    />

    <assessment-explanation
      :assessment="assessment"
      :open="showModal"
      @closeRequested="modalClosed"
    />
  </div>
</template>

<script>
import AssessmentExplanation from '@/components/assessment-explanation/AssessmentExplanation'
import AssessmentOverview from '@/components/graphs/AssessmentOverview'
import graphData from '@/assets/data/graph-data'

export default {
  components: {
    AssessmentExplanation,
    AssessmentOverview
  },
  asyncData () {
    graphData.slice(-1)[0].label = 'Now'

    return {
      graphData
    }
  },
  data () {
    return {
      showModal: true,
      // TODO where does these come from?
      assessment: {
        name: 'NWEA MAP',
        shortName: 'MAP'
      },
      subject: {
        name: 'Mathematics'
      }
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
.my-graph {
  @apply mt-100;
  height: 600px;
  width: 1200px;
}
</style>
