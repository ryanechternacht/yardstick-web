export const state = () => ({
  overviews: {},
  explanations: {},
  results: {}
})

export const getters = {
  overviewsByStudent: state => studentId =>
    state.overviews[studentId],
  explanationByStudentAndId: state => (studentId, assessmentId) =>
    state.explanations[studentId] && state.explanations[studentId].find(e => e.assessmentId === assessmentId),
  resultsByStudentAndId: state => (studentId, assessmentId) =>
    state.results[studentId] && state.results[studentId].find(r => r.id === assessmentId)
}

export const mutations = {
  loadOverviews (state, { overviews, studentId }) {
    state.overviews[studentId] = overviews
  },
  loadExplanations (state, { explanations, studentId }) {
    state.explanations[studentId] = explanations
  },
  loadResults (state, { results, studentId }) {
    state.results[studentId] = results
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

    // TODO change this url
    const explanations = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/explanations`)

    commit('loadExplanations', { studentId, explanations })
  },
  // TODO avoid refetching if data is fresh
  async fetchResults ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    // TODO change this url
    const results = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/results`)

    commit('loadResults', { studentId, results })
  }
}
