export const state = () => ({
  student: null
})

export const getters = {
  student: state => state.student
}

export const mutations = {
  loadStudent (state, { student }) {
    state.student = student
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    const student = {
      name: {
        first: 'Darryl',
        last: 'Hurt',
        full: 'Darryl Hurt',
        possessive: 'Darryl\'s'
      },
      pronouns: {
        nominative: 'he',
        nominativeUpper: 'He',
        possessive: 'his',
        possessiveUpper: 'His',
        accusative: 'him',
        accusativeUpper: 'Him'
      },
      grade: {
        ordinal: '8th',
        cardinal: 8
      }
    }
    commit('loadStudent', { student })
  }
}
