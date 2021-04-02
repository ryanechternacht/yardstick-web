<template>
  <base-modal
    :open="open"
  >
    <template #default="">
      <base-spinner @pageChanged="pageChanged">
        <template #item-1>
          <page-one
            :assessment="assessment"
            :student="student"
          />
        </template>
        <template #item-2>
          <page-two
            :assessment="assessment"
            :student="student"
          />
        </template>
        <template #item-3>
          <page-three
            :assessment="assessment"
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

import PageOne from '@/components/assessment-explanation/PageOne'
import PageTwo from '@/components/assessment-explanation/PageTwo'
import PageThree from '@/components/assessment-explanation/PageThree'

export default {
  name: 'AssessmentExplanation',
  components: {
    BaseModal,
    BaseSpinner,
    PageOne,
    PageTwo,
    PageThree
  },
  props: {
    assessment: {
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
