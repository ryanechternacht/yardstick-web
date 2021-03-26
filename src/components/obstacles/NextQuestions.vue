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

    <h4 v-if="nextQuestions.length">
      Ask Another Question:
    </h4>

    <div
      v-for="nq in nextQuestions"
      :key="nq.id"
      class="mt-24"
    >
      <div class="next-question">
        <nuxt-link :to="{ path: `/obstacles-and-opportunities/obstacles/${nq.id}` }">
          {{ renderTemplate(nq.question, { student }) }}
        </nuxt-link>
      </div>
    </div>

    <div
      v-if="ctaBelow"
      class="mt-50"
    >
      <h4>Or</h4>
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
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
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
h4 {
  @apply font-medium;
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
