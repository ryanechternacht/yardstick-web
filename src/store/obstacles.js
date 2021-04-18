export const state = () => ({
  obstacles: {}
})

export const getters = {
  getObstacleByStudentAndId: state => (studentId, obstacleId) =>
    state.obstacles[studentId] && state.obstacles[studentId].content.find(o => o.id === obstacleId),
  // TODO build this when loading obstacles?
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
  // TODO avoid refetching if data is fresh
  async fetchObstacles ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const obstacles = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/obstacles`)

    commit('loadObstacles', { studentId, obstacles: { content: obstacles } })
  }
}
