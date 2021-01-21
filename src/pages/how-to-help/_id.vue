<template>
  <div class="mt-50">
    <h1>{{ actionPlan.title }}</h1>

    <p class="description">
      {{ actionPlan.subtitle }}
    </p>

    <p class="description">
      {{ actionPlan.description }}
    </p>

    <div class="steps">
      <div
        v-for="(s, i) in actionPlan.steps"
        :key="i"
        class="step"
      >
        <h3>{{ s.title }}</h3>
        <p class="step-text">
          <!-- TODO this should have a link in it -->
          {{ renderStudentTemplate(student, s.text) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import actionPlan from '@/assets/data/gist-action-plan'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  setup () {
    const { renderStudentTemplate } = useRenderTemplate()

    return {
      renderStudentTemplate
    }
  },
  data () {
    return {
      actionPlan
    }
  },
  computed: {
    ...mapGetters('student', ['student'])
  }
}
</script>

<style scoped lang="postcss">
h1 {
  @apply text-blue;
  font-size: 40px;
  line-height: 48px;
}

.description {
  @apply mt-20;
  font-size: 20px;
  line-height: 24px;
}

.steps {
  @apply grid grid-cols-2 mt-60;
  row-gap: 50px;
  column-gap: 50px;
}

.step {
  @apply flex flex-col items-center;
}

h3 {
  @apply uppercase font-bold;
  font-size: 32px;
  line-height: 38px;
}

.step-text {
  @apply text-center mt-20;
  font-size: 32px;
  line-height: 38px;
}
</style>
