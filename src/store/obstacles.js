export const state = () => ({
  obstacles: {}
})

export const getters = {
  obstacleByStudentAndId: state => (studentId, obstacleId) =>
    state.obstacles[studentId] && state.obstacles[studentId].find(o => o.id === obstacleId),
  obstaclesByStudent: state => studentId =>
    state.obstacles[studentId],
  // TODO build this when loading obstacles?
  nextObstaclesByStudentAndId: (state, getters) => (studentId, obstacleId) => {
    const obstacle = getters.obstacleByStudentAndId(studentId, obstacleId)
    return state.obstacles[studentId].filter(o => o.order > obstacle.order)
  }
}

export const mutations = {
  loadObstacles (state, { obstacles, studentId }) {
    state.obstacles[studentId] = obstacles
  }
}

export const actions = {
  // TODO avoid refetching if data is fresh
  async fetchObstacles ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const obstacles = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/obstacles`)

    commit('loadObstacles', { studentId, obstacles })
  }
}
