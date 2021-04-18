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
  // TODO avoid refetching if data is fresh
  async fetchOpportunities ({ commit, state }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const now = Date.now()
    // TODO pull out the 5?
    // TODO roll this out
    if (!state.opportunities[studentId] ||
        (differenceInMinutes(now, state.opportunities[studentId].generatedAt) >= 5)) {
      const opportunities = await this.$axios.$get(
        `http://localhost:3001/v0.1/student/${studentId}/opportunities`)

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
