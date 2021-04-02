export const state = () => ({
  settings: {}
})

export const getters = {
  settings: state => state.settings
}

export const mutations = {
  loadSettings (state, { settings }) {
    state.settings = settings
  }
}
