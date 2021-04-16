export const state = () => ({
  overviews: {},
  explanations: {}
})

export const getters = {
  overviewsByStudent: state => studentId =>
    state.overviews[studentId],
  explanationByStudentAndId: state => (studentId, assessmentId) =>
    state.explanations[studentId] && state.explanations[studentId].find(e => e.assessmentId === assessmentId)

}

export const mutations = {
  loadOverviews (state, { overviews, studentId }) {
    state.overviews[studentId] = overviews
  },
  loadExplanations (state, { explanations, studentId }) {
    state.explanations[studentId] = explanations
  }
}

export const actions = {
  // TODO avoid refetching if data is fresh
  async fetchOverviews ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const overviews = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/assessments`)

    commit('loadOverviews', { studentId, overviews })
  },
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
