// This value is set during during the beginning of the nuxt
// page lifecycle, so we dont need to worry about
// consumers accessing this value before it is loaded

export const state = () => ({
  user: null
})

export const getters = {
  getUser: state => state.user,
  isLoggedIn: state => !!state.user
}

export const mutations = {
  loadUser (state, { user }) {
    state.user = user
  }
}
