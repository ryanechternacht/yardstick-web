<template>
  <div>
    <h1>Obstacles Conversation</h1>

    <div class="q-and-a">
      <div class="question">
        {{ renderStudentTemplate(student, obstacle.question) }}
      </div>

      <!-- eslint-disable vue/no-v-html -->
      <div
        class="answer"
        v-html="renderStudentTemplate(student, obstacle.answer)"
      />
      <!-- eslint-enable vue/no-v-html -->

      <div class="next-questions">
        <!-- TODO -->
        <nuxt-link
          to="/obstacles-and-opportunities/obstacles/2"
        >
          question 2
        </nuxt-link>
        <nuxt-link
          to="/obstacles-and-opportunities/obstacles/3"
        >
          question 3
        </nuxt-link>
        <nuxt-link
          to="/obstacles-and-opportunities/obstacles/4"
        >
          question 4
        </nuxt-link>
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

    return {
      obstacle
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
  @apply grid grid-cols-2 grid-rows-2;
  grid-template-areas:
    "question        answer"
     "next-questions answer";
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

</style>
