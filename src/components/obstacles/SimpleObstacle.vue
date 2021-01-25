<template>
  <div class="q-and-a">
    <div class="question">
      <span class="q-and-a-label">
        Question:
      </span>
      <span class="q-and-a-content">
        {{ renderStudentTemplate(student, obstacle.question) }}
      </span>
    </div>

    <!-- eslint-disable vue/no-v-html -->
    <div
      class="answer"
    >
      <span class="q-and-a-label">
        Answer:
      </span>
      <span
        class="q-and-a-content"
        v-html="renderStudentTemplate(student, obstacle.answer)"
      />
    </div>
    <!-- eslint-enable vue/no-v-html -->

    <div
      class="next-questions"
    >
      <h3>Ask Another Question:</h3>

      <div
        v-for="nq in nextQuestions"
        :key="nq.id"
        class="mt-24"
      >
        <div class="next-question">
          <nuxt-link
            :to="{ path: `/obstacles-and-opportunities/obstacles/${nq.id}` }"
          >
            {{ renderStudentTemplate(student, nq.question) }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRenderTemplate } from '@/composables/render-template'

export default {
  name: 'SimpleObstacle',
  props: {
    delays: {
      required: true,
      type: Array
    },
    nextQuestions: {
      required: true,
      type: Array
    },
    obstacle: {
      required: true,
      type: Object
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
  mounted () {
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      this.runNextAnimation()
    },
    runNextAnimation () {
      if (this.delays.length) {
        const d = this.delays.shift()
        setTimeout(() => {
          this.$anime({
            targets: `.${d.section}`,
            opacity: 1,
            duration: 1000,
            easing: 'linear'
          })
          this.runNextAnimation()
        }, d.delay)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.q-and-a {
  @apply grid grid-cols-2 gap-50 mt-50 auto-rows-auto;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "question        answer"
     "next-questions answer";
}

.q-and-a-label {
  @apply font-medium text-blue;
  font-size: 32px;
  line-height: 38.4px;
}

.q-and-a-content {
  @apply italic;
  font-size: 32px;
  line-height: 38.4px;
}

.question {
  grid-area: question;
}

.answer {
  grid-area: answer;
  opacity: 0;
}

.next-questions {
  grid-area: next-questions;
  opacity: 0;
}

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
</style>
