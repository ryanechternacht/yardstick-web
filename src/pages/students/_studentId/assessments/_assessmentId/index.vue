<template>
  <div>
    <h1>{{ assessment.name }} - {{ assessment.subject.name }}</h1>

    <h2 class="mt-50">
      <!-- TODO where does this text come from? -->
      {{ student.name.first }} is Consistently Meeting {{ student.pronouns.possessiveUpper }} Growth Goals in {{ assessment.subject.name }}. All While Performing Well Above
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
  async asyncData ({ params, store }) {
    graphData.slice(-1)[0].label = 'Now'
    const assessmentId = parseInt(params.assessmentId)
    const studentId = params.studentId

    await store.dispatch('assessments/fetchResult', { studentId, assessmentId })
    await store.dispatch('assessments/fetchExplanation', { studentId, assessmentId })

    return {
      graphData,
      studentId,
      assessmentId
    }
  },
  data () {
    return {
      showModal: true
    }
  },
  computed: {
    ...mapGetters('students', ['getStudentById']),
    ...mapGetters('assessments', ['getExplanationByStudentAndId', 'getResultsByStudentAndId']),
    student () {
      return this.getStudentById(this.studentId)
    },
    // TODO lazy load this?
    explanation () {
      return this.getExplanationByStudentAndId(this.studentId, this.assessmentId)
    },
    assessment () {
      return this.getResultsByStudentAndId(this.studentId, this.assessmentId)
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
