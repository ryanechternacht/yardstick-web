<template>
  <div>
    <h1>Obstacles Conversation</h1>

    <component
      :is="obstacle.type"
      :key="obstacle.id"
      v-bind="{ student, delays, nextQuestions, obstacle }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import obstacles from '@/assets/data/obstacles'

import ReadingPassageObstacle from '@/components/obstacles/ReadingPassageObstacle'
import SimpleObstacle from '@/components/obstacles/SimpleObstacle'

export default {
  components: {
    ReadingPassageObstacle,
    SimpleObstacle
  },
  asyncData ({ params }) {
    const id = parseInt(params.id, 10)
    const obstacle = obstacles.find(o => o.id === id)
    const nextQuestions = obstacles.filter(o => o.id > id)

    // TODO where does this come from? maybe we have a few page templates and an
    // "obstacle type" field which does dynamic dispatch to the correct page?
    const delays = [
      {
        section: 'answer',
        delay: 1000
      },
      {
        section: 'next-questions',
        delay: 1000
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
    ...mapGetters('student', ['studentById']),
    ...mapGetters('settings', ['settings']),
    student () {
      return this.studentById(this.settings.currentStudent)
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
