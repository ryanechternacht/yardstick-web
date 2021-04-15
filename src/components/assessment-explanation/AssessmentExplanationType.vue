<template>
  <div class="explanation">
    <h1 class="text-center">
      {{ renderTemplate(content.title, { assessment }) }}
    </h1>
    <div class="flex flex-row space-x-50 mt-50">
      <div
        class="flex-grow"
        style="flex-basis: 0"
      >
        <div class="flex flex-col items-center space-y-50">
          <h2 class="text-center">
            {{ renderTemplate(content.p1, { student, assessment }) }}
          </h2>
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
          <h2 class="text-center">
            {{ renderTemplate(content.p2, { student, assessment }) }}
          </h2>
          <!-- eslint-disable vue/no-v-html -->
          <h4
            class="text-center italic"
            v-html="renderTemplate(content.p3, { student, assessment })"
          />
          <!-- eslint-enable vue/no-v-html -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'AssessmentExplanationType',
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  props: {
    assessment: {
      type: Object,
      required: true
    },
    content: {
      type: Object,
      required: true
    },
    student: {
      type: Object,
      required: true
    }
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
</style>
