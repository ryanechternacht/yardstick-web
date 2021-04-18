export const state = () => ({
  supports: {}
})

export const getters = {
  getSupportByStudentAndId: state => (studentId, supportId) =>
    state.supports[studentId] && state.supports[studentId].find(s => s.id === supportId),
  getSupportsByStudent: state => studentId =>
    state.supports[studentId]
}

export const mutations = {
  loadSupports (state, { supports, studentId }) {
    state.supports[studentId] = supports
  }
}

export const actions = {
  // TODO avoid refetching if data is fresh
  async fetchSupports ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const supports = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/supports`)

    commit('loadSupports', { studentId, supports })
  }
}
