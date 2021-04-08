export const state = () => ({
  supports: {}
})

export const getters = {
  supportByStudentAndId: state => (studentId, supportId) =>
    state.supports[studentId] && state.supports[studentId][supportId],
  supportsByStudent: state => studentId =>
    state.supports[studentId]
}

export const mutations = {
  loadSupports (state, { supports, studentId }) {
    // TODO delete old recors before adding new ones
    for (const s of supports) {
      supports[s.id] = s
    }
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
