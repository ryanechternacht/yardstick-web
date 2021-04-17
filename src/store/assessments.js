export const state = () => ({
  overviews: {},
  results: {},
  explanations: {}
})

export const getters = {
  overviewsByStudent: state => studentId =>
    state.overviews[studentId],
  resultsByStudentAndId: state => (studentId, assessmentId) =>
    state.results[studentId] && state.results[studentId][assessmentId],
  explanationByStudentAndId: state => (studentId, assessmentId) =>
    state.explanations[studentId] && state.explanations[studentId][assessmentId]
}

export const mutations = {
  loadOverviews (state, { overviews, studentId }) {
    state.overviews[studentId] = overviews
  },
  loadResult (state, { result, assessmentId, studentId }) {
    if (!state.results[studentId]) {
      state.results[studentId] = {}
    }
    state.results[studentId][assessmentId] = result
  },
  loadExplanation (state, { explanation, assessmentId, studentId }) {
    if (!state.explanations[studentId]) {
      state.explanations[studentId] = {}
    }
    state.explanations[studentId][assessmentId] = explanation
  }
}

// TODO make subject an object instead of a flat prop
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
  async fetchResult ({ commit }, { studentId, assessmentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    // TODO change this url
    const result = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/assessment/${assessmentId}`)

    commit('loadResult', { studentId, assessmentId, result })
  },
  // TODO avoid refetching if data is fresh
  async fetchExplanation ({ commit }, { studentId, assessmentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    // TODO change this url
    const explanation = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/assessment/${assessmentId}/explanation`)

    commit('loadExplanation', { studentId, assessmentId, explanation })
  }
}
