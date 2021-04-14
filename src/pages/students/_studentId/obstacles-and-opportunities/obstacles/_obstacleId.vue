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

import ReadingPassageObstacle from '@/components/obstacles/ReadingPassageObstacle'
import SimpleObstacle from '@/components/obstacles/SimpleObstacle'

export default {
  components: {
    ReadingPassageObstacle,
    SimpleObstacle
  },
  async asyncData ({ params, store }) {
    const studentId = params.studentId
    const obstacleId = parseInt(params.obstacleId, 10)

    await store.dispatch('obstacles/fetchObstacles', { studentId })

    // TODO a better way to do this
    // const nextQuestions = obstacles.filter(o => o.id > id)

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
      obstacleId,
      studentId
    }
  },
  computed: {
    ...mapGetters('student', ['studentById']),
    ...mapGetters('obstacles', ['obstacleByStudentAndId', 'nextObstaclesByStudentAndId']),
    student () {
      return this.studentById(this.studentId)
    },
    obstacle () {
      return this.obstacleByStudentAndId(this.studentId, this.obstacleId)
    },
    nextQuestions () {
      return this.nextObstaclesByStudentAndId(this.studentId, this.obstacleId)
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
