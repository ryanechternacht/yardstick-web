import { differenceInMinutes } from 'date-fns'

export const state = () => ({
  obstacles: {}
})

export const getters = {
  getObstacleByStudentAndId: state => (studentId, obstacleId) =>
    state.obstacles[studentId] && state.obstacles[studentId].content.find(o => o.id === obstacleId),
  // TODO build this when loading obstacles?
  // TODO build ctas here too
  getNextObstaclesByStudentAndId: (state, getters) => (studentId, obstacleId) => {
    const obstacle = getters.getObstacleByStudentAndId(studentId, obstacleId)
    return state.obstacles[studentId].content.filter(o => o.order > obstacle.order)
  }
}

export const mutations = {
  loadObstacles (state, { obstacles, studentId }) {
    state.obstacles[studentId] = obstacles
  }
}

export const actions = {
  async fetchObstacles ({ commit, state }, { studentId, forceRefresh }) {
    if (this.$config.staticRuntime) {
      return
    }

    const now = Date.now()
    if (!state.obstacles[studentId] ||
        forceRefresh ||
        (differenceInMinutes(now, state.obstacles[studentId].generatedAt) >= 10)) {
      const obstacles = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/obstacles`)

      commit('loadObstacles', {
        studentId,
        obstacles: {
          content: obstacles,
          generatedAt: now
        }
      })
    }
  }
}
