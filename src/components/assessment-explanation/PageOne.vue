<template>
  <div class="explanation">
    <h1>{{ renderTemplate(pageOne.title, { assessment }) }}</h1>
    <h2 class="explanation-text">
      {{ renderTemplate(pageOne.p1, { student, assessment }) }}
    </h2>
    <h2 class="explanation-text">
      {{ renderTemplate(pageOne.p2, { student, assessment }) }}
    </h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import pageOne from '@/assets/data/page-one'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'PageOne',
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate,
      pageOne
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

.explanation-text {
  @apply mt-40 text-center;
}
</style>
