export const state = () => ({
  opportunities: {}
})

export const getters = {
  getOpportunitiesByStudent: state => studentId =>
    state.opportunities[studentId]
}

export const mutations = {
  loadOpportunities (state, { studentId, opportunities }) {
    state.opportunities[studentId] = opportunities
  }
}

export const actions = {
  // TODO avoid refetching if data is fresh
  async fetchOpportunities ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const opportunities = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/opportunities`)

    commit('loadOpportunities', { studentId, opportunities })
  }
}
