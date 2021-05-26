import { differenceInMinutes } from 'date-fns'

export const state = () => ({
  supports: {}
})

export const getters = {
  getSupportByStudentAndId: state => (studentId, supportId) =>
    state.supports[studentId] && state.supports[studentId].content.find(s => s.id === supportId),
  getSupportsByStudent: state => studentId =>
    state.supports[studentId].content
}

export const mutations = {
  loadSupports (state, { supports, studentId }) {
    state.supports[studentId] = supports
  }
}

export const actions = {
  // TODO avoid refetching if data is fresh
  async fetchSupports ({ commit, state }, { studentId, forceRefresh }) {
    if (process.env.NUXT_ENV_STATIC) {
      return
    }

    const now = Date.now()
    if (!state.supports[studentId] ||
        forceRefresh ||
        (differenceInMinutes(now, state.supports[studentId].generatedAt) >= 10)) {
      const supports = await this.$axios.$get(
        `/api/v0.1/student/${studentId}/supports`)

      commit('loadSupports', {
        studentId,
        supports: {
          content: supports,
          generatedAt: now
        }
      })
    }
  }
}
