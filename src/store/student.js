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
