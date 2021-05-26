import { differenceInMinutes } from 'date-fns'

export const state = () => ({
  opportunities: {}
})

export const getters = {
  getOpportunitiesByStudent: state => studentId =>
    state.opportunities[studentId].content
}

export const mutations = {
  loadOpportunities (state, { studentId, opportunities }) {
    state.opportunities[studentId] = opportunities
  }
}

export const actions = {
  async fetchOpportunities ({ commit, state }, { studentId, forceRefresh }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const now = Date.now()
    if (!state.opportunities[studentId] ||
        forceRefresh ||
        (differenceInMinutes(now, state.opportunities[studentId].generatedAt) >= 10)) {
      const opportunities = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/opportunities`, { withCredentials: true })

      commit('loadOpportunities', {
        studentId,
        opportunities: {
          content: opportunities,
          generatedAt: now
        }
      })
    }
  }
}
