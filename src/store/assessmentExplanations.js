export const state = () => ({
  explanations: {}
})

export const getters = {
  explanationByStudentAndId: state => (studentId, assessmentId) =>
    state.explanations[studentId] && state.explanations[studentId].find(e => e.assessmentId === assessmentId)
}

export const mutations = {
  loadExplanations (state, { explanations, studentId }) {
    state.explanations[studentId] = explanations
  }
}

export const actions = {
  // TODO avoid refetching if data is fresh
  async fetchExplanations ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const explanations = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/explanations`)

    commit('loadExplanations', { studentId, explanations })
  }
}
