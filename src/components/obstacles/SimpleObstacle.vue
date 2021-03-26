<template>
  <div class="q-and-a">
    <div class="question">
      <h2 class="q-and-a-label">
        Question:
      </h2>
      <h2 class="q-and-a-content">
        {{ renderTemplate(obstacle.question, { student }) }}
      </h2>
    </div>

    <!-- eslint-disable vue/no-v-html -->
    <div
      class="answer"
    >
      <h2 class="q-and-a-label">
        Answer:
      </h2>
      <h2
        class="q-and-a-content"
        v-html="renderTemplate(obstacle.answer, { student })"
      />
    </div>
    <!-- eslint-enable vue/no-v-html -->

    <next-questions
      class="next-questions"
      :cta="obstacle.cta"
      :next-questions="nextQuestions"
      :student="student"
    />
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
    const { renderTemplate } = useRenderTemplate()

    return {
      renderTemplate
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
  @apply font-medium text-blue inline;
}

.q-and-a-content {
  @apply italic font-light inline;
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
</style>
