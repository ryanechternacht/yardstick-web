<template>
  <base-modal
    :open="open"
  >
    <template #default="">
      <base-spinner @pageChanged="pageChanged">
        <template #item-1>
          <assessment-explanation-overview
            :assessment="assessment"
            :content="explanation.overview"
            :student="student"
          />
        </template>
        <template #item-2>
          <assessment-explanation-type
            :assessment="assessment"
            :content="explanation.type"
            :student="student"
          />
        </template>
        <template #item-3>
          <assessment-explanation-traits
            :assessment="assessment"
            :content="explanation.traits"
            :student="student"
          />
        </template>
      </base-spinner>
      <img
        v-if="pageIndex === 2"
        src="~/assets/svg/close.svg"
        class="close-button"
        @click="closeRequested"
      >
    </template>
  </base-modal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import BaseSpinner from '@/components/BaseSpinner'

import AssessmentExplanationOverview from '@/components/assessment-explanation/AssessmentExplanationOverview'
import AssessmentExplanationType from '@/components/assessment-explanation/AssessmentExplanationType'
import AssessmentExplanationTraits from '@/components/assessment-explanation/AssessmentExplanationTraits'

export default {
  name: 'AssessmentExplanation',
  components: {
    BaseModal,
    BaseSpinner,
    AssessmentExplanationOverview,
    AssessmentExplanationType,
    AssessmentExplanationTraits
  },
  props: {
    assessment: {
      type: Object,
      required: true
    },
    explanation: {
      type: Object,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    },
    student: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      pageIndex: 0
    }
  },
  methods: {
    closeRequested () {
      this.$emit('closeRequested', {})
    },
    pageChanged ({ newIndex }) {
      this.pageIndex = newIndex
    }
  }
}
</script>

<style lang="postcss" scoped>
.close-button {
  @apply absolute mt-15 mr-15 top-0 right-0 p-10 cursor-pointer;
  width: 50px;
  height: 50px;
}
</style>
