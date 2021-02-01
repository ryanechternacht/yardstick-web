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
    <div class="answer">
      <span class="q-and-a-label">
        Answer:
      </span>
      <span
        class="q-and-a-content"
        v-html="renderStudentTemplate(student, obstacle.answer)"
      />
      <div class="passages gap-x-50">
        <div class="passage">
          <div class="passage-title">
            {{ student.name.first }}
          </div>
          <div class="passage-text">
            {{ samples.reading[6] /* TODO */ }}
          </div>
        </div>
        <div class="passage">
          <div class="passage-title">
            On Track Reader
          </div>
          <div class="passage-text">
            {{ samples.reading[student.grade.cardinal] }}
          </div>
        </div>
      </div>

      <div class="q-and-a-content">
        As you can see both the vocabulary and structure are more complex
        in the “On Track Reader” passage.
      </div>
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

import samples from '@/assets/data/samples'

export default {
  name: 'ReadingPassageObstacle',
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
      renderStudentTemplate,
      samples
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
  @apply grid gap-50 mt-50 auto-rows-auto;
  grid-template-columns: 2fr 3fr;
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
  @apply italic font-light;
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

.passages {
  @apply flex flex-row my-30;
}

.passage {
  @apply bg-gray-graph h-full w-full flex flex-col;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.passage-title {
  @apply text-center mt-10;
  font-size: 21px;
  line-height: 25.2px;
}

.passage-text {
  @apply my-20 px-10 text-justify;
  font-size: 14px;
  line-height: 16.8px;
}

.next-questions {
  grid-area: next-questions;
  opacity: 0;
}
</style>