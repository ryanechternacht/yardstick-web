<template>
  <div class="explanation">
    <h1>{{ renderTemplate(content.title, { assessment }) }}</h1>
    <h2 class="explanation-text">
      {{ renderTemplate(content.p1, { student, assessment }) }}
    </h2>
    <h2 class="explanation-text">
      {{ renderTemplate(content.p2, { student, assessment }) }}
    </h2>
  </div>
</template>

<script>
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'AssessmentExplanationOverview',
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

.explanation-text {
  @apply mt-40 text-center;
}
</style>
