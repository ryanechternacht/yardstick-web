<template>
  <div class="mt-50">
    <h1>{{ support.details.title }}</h1>

    <h5 class="description">
      {{ support.details.subtitle }}
    </h5>

    <h5 class="description">
      {{ support.details.description }}
    </h5>

    <div class="steps">
      <div
        v-for="(s, i) in support.details.steps"
        :key="i"
        class="step"
      >
        <h2 class="uppercase font-bold">
          {{ s.title }}
        </h2>
        <!-- eslint-disable vue/no-v-html -->
        <h2
          class="step-explanation"
          v-html="renderTemplate(s.text, { student })"
        />
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { useRenderTemplate } from '@/composables/render-template'

export default {
  setup () {
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
    }
  },
  async asyncData ({ params, store }) {
    const studentId = params.studentId
    const supportId = parseInt(params.supportId, 10)

    await store.dispatch('supports/fetchSupports', { studentId })

    return {
      studentId,
      supportId
    }
  },
  computed: {
    ...mapGetters('students', ['getStudentById']),
    ...mapGetters('supports', ['getSupportByStudentAndId']),
    student () {
      return this.getStudentById(this.studentId)
    },
    support () {
      return this.getSupportByStudentAndId(this.studentId, this.supportId)
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

.step-explanation {
  @apply mt-20 text-center;
}

.step-explanation >>> a {
  color: blue;
}
</style>
