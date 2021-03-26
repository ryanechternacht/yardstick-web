<template>
  <div class="explanation">
    <h1 class="text-center">
      {{ renderTemplate(pageTwo.title, { assessment }) }}
    </h1>
    <div class="flex flex-row space-x-50 mt-50">
      <div
        class="flex-grow"
        style="flex-basis: 0"
      >
        <div class="flex flex-col items-center space-y-50">
          <h2>{{ renderTemplate(pageTwo.p1, { student, assessment }) }}</h2>
          <img
            src="~/assets/svg/growth-icon.svg"
            class="growth-image"
          >
        </div>
      </div>
      <div
        class="flex-grow"
        style="flex-basis: 0"
      >
        <div class="flex flex-col items-center space-y-50">
          <h2>{{ renderTemplate(pageTwo.p2, { student, assessment }) }}</h2>
          <!-- eslint-disable vue/no-v-html -->
          <div
            class="sub-text"
            v-html="renderTemplate(pageTwo.p3, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import pageTwo from '@/assets/data/page-two'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'PageTwo',
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate,
      pageTwo
    }
  },
  props: {
    assessment: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('student', ['student'])
  }
}
</script>

<style lang="postcss" scoped>
.explanation {
  @apply flex flex-col items-center mt-40;
}

.growth-image {
  max-width: 200px;
}

h2 {
  @apply text-center;
}

.sub-text {
  @apply text-center italic;
  font-size: 28px;
  line-height: 33.6px;
}
</style>
