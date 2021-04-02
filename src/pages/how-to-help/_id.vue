<template>
  <div class="mt-50">
    <h1>{{ actionPlan.title }}</h1>

    <h5 class="description">
      {{ actionPlan.subtitle }}
    </h5>

    <h5 class="description">
      {{ actionPlan.description }}
    </h5>

    <div class="steps">
      <div
        v-for="(s, i) in actionPlan.steps"
        :key="i"
        class="step"
      >
        <h2 class="uppercase font-bold">
          {{ s.title }}
        </h2>
        <h2 class="text-center mt-20">
          <!-- TODO this should have a link in it -->
          {{ renderTemplate(s.text, { student }) }}
        </h2>
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
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  data () {
    return {
      actionPlan
    }
  },
  computed: {
    ...mapGetters('student', ['studentById']),
    ...mapGetters('settings', ['settings']),
    student () {
      return this.studentById(this.settings.currentStudent)
    }
  }
}
</script>

<style scoped lang="postcss">
.description {
  @apply mt-20;
}

.steps {
  @apply grid grid-cols-2 mt-60;
  row-gap: 50px;
  column-gap: 50px;
}

.step {
  @apply flex flex-col items-center;
}
</style>
