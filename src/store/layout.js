export const state = () => ({
  site: {}
})

export const getters = {
  getLayout: state => state.site.layout,
  getObstaclesAndOpportunities: state => state.site.obstaclesAndOpportunities,
  getAssessment: state => state.site.assessment,
  getHome: state => state.site.home
}

export const mutations = {
  loadLayout (state, { layout }) {
    state.site = layout
  }
}
