<template>
  <div>
    <h1>Obstacles Conversation</h1>

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
      </div>
      <!-- eslint-enable vue/no-v-html -->

      <div class="next-questions">
        <h3>Ask Another Question:</h3>

        <div
          v-for="nq in nextQuestions"
          :key="nq.id"
          class="mt-24"
        >
          <nuxt-link
            class="next-question"
            :to="{ path: `/obstacles-and-opportunities/obstacles/${nq.id}` }"
          >
            {{ nq.question }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import obstacles from '@/assets/data/obstacles'
import { useRenderTemplate } from '@/composables/render-template'

export default {
  setup () {
    const { renderStudentTemplate } = useRenderTemplate()

    return {
      renderStudentTemplate
    }
  },
  asyncData ({ params }) {
    const id = parseInt(params.id, 10)
    const obstacle = obstacles.find(o => o.id === id)

    // TODO
    const nextQuestions = [
      {
        id: 2,
        question: 'Question 2'
      },
      {
        id: 3,
        question: 'Question 3'
      },
      {
        id: 4,
        question: 'Question 4'
      }
    ]

    return {
      obstacle,
      nextQuestions
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

.q-and-a {
  @apply grid grid-cols-2 grid-rows-2 gap-50 mt-50;
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
}

.next-questions {
  grid-area: next-questions;
}

h3 {
  @apply font-medium;
  font-size: 24px;
  line-height: 28.8px;
}

.next-question {
  @apply rounded-lg bg-gray-graph py-6 px-10;
  font-size: 18px;
  line-height: 21.6px;
}
</style>
