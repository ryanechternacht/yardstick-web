<template>
  <div>
    <div
      v-if="ctaAbove"
      class="mb-50"
    >
      <div class="cta">
        <nuxt-link to="/how-to-help">
          Learn How to Help
        </nuxt-link>
      </div>
    </div>

    <h3 v-if="nextQuestions.length">
      Ask Another Question:
    </h3>

    <div
      v-for="nq in nextQuestions"
      :key="nq.id"
      class="mt-24"
    >
      <div class="next-question">
        <nuxt-link :to="{ path: `/obstacles-and-opportunities/obstacles/${nq.id}` }">
          {{ renderStudentTemplate(student, nq.question) }}
        </nuxt-link>
      </div>
    </div>

    <div
      v-if="ctaBelow"
      class="mt-50"
    >
      <h3>Or</h3>
      <div class="cta mt-24">
        <nuxt-link to="/how-to-help">
          Learn How to Help
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useRenderTemplate } from '@/composables/render-template'

export default {
  props: {
    cta: {
      default: null,
      type: Object
    },
    nextQuestions: {
      required: true,
      type: Array
    },
    student: {
      required: true,
      type: Object
    }
  },
  setup () {
    const { renderStudentTemplate } = useRenderTemplate()

    return {
      renderStudentTemplate
    }
  },
  computed: {
    ctaAbove () {
      return this.cta && this.cta.position === 'above'
    },
    ctaBelow () {
      return this.cta && this.cta.position === 'below'
    }
  }
}
</script>

<style lang="postcss" scoped>
h3 {
  @apply font-medium;
  font-size: 24px;
  line-height: 28.8px;
}

.next-question {
  @apply inline-block rounded-lg bg-gray-graph py-6 px-10;
  font-size: 18px;
  line-height: 21.6px;
}

.cta {
  @apply inline-block text-white rounded-lg bg-red py-10 px-16 uppercase;
  font-size: 14px;
  line-height: 16.8px;
}
</style>
