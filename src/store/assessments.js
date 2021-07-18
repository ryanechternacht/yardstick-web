import { differenceInMinutes } from 'date-fns'

export const state = () => ({
  overviews: {},
  results: {},
  explanations: {}
})

export const getters = {
  getOverviewsByStudent: state => studentId =>
    state.overviews[studentId].content,
  getResultsByStudentAndId: state => (studentId, assessmentId) =>
    state.results[studentId] && state.results[studentId][assessmentId].content,
  getExplanationByStudentAndId: state => (studentId, assessmentId) =>
    state.explanations[studentId] && state.explanations[studentId][assessmentId].content
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

export const actions = {
  async fetchOverviews ({ commit, state }, { studentId, forceRefresh }) {
    if (this.$config.staticRuntime) {
      return
    }

    const now = Date.now()
    if (!state.overviews[studentId] ||
        forceRefresh ||
        (differenceInMinutes(now, state.overviews[studentId].generatedAt) >= 10)) {
      const overviews = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/assessments`)

      commit('loadOverviews', {
        studentId,
        overviews: {
          content: overviews,
          generatedAt: now
        }
      })
    }
  },

  async fetchResult ({ commit, state }, { studentId, assessmentId, forceRefresh }) {
    if (this.$config.staticRuntime) {
      return
    }

    const now = Date.now()
    if (!state.results[studentId] ||
        forceRefresh ||
        (differenceInMinutes(now, state.results[studentId].generatedAt) >= 10)) {
      const result = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/assessment/${assessmentId}`)

      commit('loadResult', {
        studentId,
        assessmentId,
        result: {
          content: result,
          generatedAt: now
        }
      })
    }
  },
  async fetchExplanation ({ commit, state }, { studentId, assessmentId, forceRefresh }) {
    if (this.$config.staticRuntime) {
      return
    }

    const now = Date.now()
    if (!state.explanations[studentId] ||
        forceRefresh ||
        (differenceInMinutes(now, state.explanations[studentId].generatedAt) >= 10)) {
      const explanation = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/assessment/${assessmentId}/explanation`)

      commit('loadExplanation', {
        studentId,
        assessmentId,
        explanation: {
          content: explanation,
          generatedAt: now
        }
      })
    }
  }
}
