<template>
  <div class="explanation">
    <h1>{{ pageOne.title }}</h1>
    <div class="explanation-text">
      {{ renderTemplate(pageOne.p1, { student }) }}
    </div>
    <div class="explanation-text">
      {{ renderTemplate(pageOne.p2, { student }) }}
    </div>
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
  computed: {
    ...mapGetters('student', ['student'])
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

.explanation {
  @apply flex flex-col items-center mt-40;
}

.explanation-text {
  @apply mt-40 text-center;
  font-size: 32px;
  line-height: 38.4px;
}
</style>
