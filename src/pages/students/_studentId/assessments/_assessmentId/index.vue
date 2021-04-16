<template>
  <div>
    <h1>{{ assessment.name }} - {{ assessment.subject }}</h1>

    <h2 class="mt-50">
      <!-- TODO where does this text come from? -->
      {{ student.name.first }} is Consistently Meeting {{ student.pronouns.possessiveUpper }} Growth Goals in {{ assessment.subject }}. All While Performing Well Above
      the Average For {{ student.pronouns.possessiveUpper }} Grade Level.
    </h2>

    <assessment-overview
      class="my-graph"
      :graph-data="graphData"
      height="600px"
      width="1200px"
    />

    <assessment-explanation
      :assessment="assessment"
      :explanation="explanation"
      :open="showModal"
      :student="student"
      @closeRequested="modalClosed"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AssessmentExplanation from '@/components/assessment-explanation/AssessmentExplanation'
import AssessmentOverview from '@/components/graphs/AssessmentOverview'
import graphData from '@/assets/data/graph-data'

export default {
  components: {
    AssessmentExplanation,
    AssessmentOverview
  },
  asyncData ({ params }) {
    graphData.slice(-1)[0].label = 'Now'
    const assessmentId = parseInt(params.assessmentId)

    return {
      graphData,
      studentId: params.studentId,
      assessmentId
    }
  },
  data () {
    return {
      showModal: true
    }
  },
  computed: {
    ...mapGetters('student', ['studentById']),
    ...mapGetters('assessments', ['explanationByStudentAndId', 'resultsByStudentAndId']),
    student () {
      return this.studentById(this.studentId)
    },
    explanation () {
      return this.explanationByStudentAndId(this.studentId, this.assessmentId)
    },
    assessment () {
      return this.resultsByStudentAndId(this.studentId, this.assessmentId)
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
