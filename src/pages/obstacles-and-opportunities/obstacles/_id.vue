<template>
  <div>
    <h1>Obstacles Conversation</h1>

    <component
      :is="obstacle.type"
      v-bind="{ student, delays, nextQuestions, obstacle }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import obstacles from '@/assets/data/obstacles'
import SimpleObstacle from '@/components/obstacles/SimpleObstacle'

export default {
  components: {
    SimpleObstacle
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

    // TODO where does this come from? maybe we have a few page templates and an
    // "obstacle type" field which does dynamic dispatch to the correct page?
    const delays = [
      {
        section: 'answer',
        delay: 5000
      },
      {
        section: 'next-questions',
        delay: 3000
      }
    ]

    return {
      delays,
      nextQuestions,
      obstacle
    }
  },
  data () {
    return {
      showAnswer: false,
      showNextQuestions: false
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
</style>
