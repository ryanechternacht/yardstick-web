<template>
  <div>
    <div
      v-if="ctaAbove"
      class="mb-50"
    >
      <p class="small cta">
        <nuxt-link :to="`/${student.id}/how-to-help`">
          Learn How to Help
        </nuxt-link>
      </p>
    </div>

    <h4 v-if="nextQuestions.length">
      Ask Another Question:
    </h4>

    <div
      v-for="nq in nextQuestions"
      :key="nq.id"
      class="mt-24"
    >
      <p class="next-question">
        <nuxt-link :to="`/students/${student.id}/obstacles-and-opportunities/obstacles/${nq.id}`">
          {{ renderTemplate(nq.question, { student }) }}
        </nuxt-link>
      </p>
    </div>

    <div
      v-if="ctaBelow"
      class="mt-50"
    >
      <h4>Or</h4>
      <p class="small cta mt-24">
        <nuxt-link :to="`/${student.id}/how-to-help`">
          Learn How to Help
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'NextQuestions',
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
    ...mapGetters('settings', ['settings']),
    ctaAbove () {
      return this.cta && this.cta.position === 'above'
    },
    ctaBelow () {
      return this.cta && this.cta.position === 'below'
    },
    studentId () {
      return this.settings.currentStudent
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
}

.cta {
  @apply inline-block text-white rounded-lg bg-red py-10 px-16 uppercase;
}
</style>
