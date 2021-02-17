<template>
  <base-modal
    :open="open"
    @closeRequested="closeRequested"
  >
    <template #default="{}">
      <base-spinner>
        <template #item-1>
          <page-one />
        </template>
        <template #item-2>
          <page-two />
        </template>
        <template #item-3>
          <page-three />
        </template>
      </base-spinner>
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
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeRequested () {
      this.$emit('closeRequested', {})
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
