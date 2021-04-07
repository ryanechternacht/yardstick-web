export const state = () => ({
  supports: {}
})

export const getters = {
  supportById: state => supportId => state.supports[supportId],
  allSupports: state => state.supports
}

export const mutations = {
  loadSupports (state, { supports }) {
    for (const s of supports) {
      state.supports[s.id] = s
    }
  }
}

export const actions = {
  // TODO avoid refetching if data is fresh
  async fetchSupports ({ commit }, { studentId }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    // TODO do the work
    const supports = await this.$axios.$get(
      `http://localhost:3001/v0.1/student/${studentId}/supports`)

    commit('loadSupports', { supports })
  }
}
