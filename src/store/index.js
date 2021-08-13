// TODO Load these on the fly
import studentData from '@/assets/static-data/student'
import supports from '@/assets/static-data/supports'
import opportunities from '@/assets/static-data/opportunities'
import obstacles from '@/assets/static-data/obstacles'
import explanations from '@/assets/static-data/assessment-explanations'
import overviews from '@/assets/static-data/assessment-overviews'
import results from '@/assets/static-data/assessment-results'
import user from '@/assets/static-data/user'

// TODO consume this here
// import graphData from '@/assets/static-data/graph-data'

const studentId = 1
const prefixedSettings = {
  currentStudent: studentId
}

const assessmentIds = [1, 2, 3, 4, 5]

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    if (this.$config.staticRuntime) {
      commit('user/loadUser', { user })
      commit('students/loadStudents', { students: [studentData] })
      commit('settings/loadSettings', { settings: prefixedSettings })
      commit('supports/loadSupports', { supports: { content: supports }, studentId })
      commit('opportunities/loadOpportunities', { opportunities: { content: opportunities }, studentId })
      commit('obstacles/loadObstacles', { obstacles: { content: obstacles }, studentId })
      commit('assessments/loadOverviews', { overviews: { content: overviews }, studentId })
      assessmentIds.forEach((id) => {
        commit('assessments/loadExplanation', {
          explanation: {
            content: explanations.find(e => e.assessmentId === id)
          },
          assessmentId: id,
          studentId
        })
        commit('assessments/loadResult', {
          result: {
            content: results.find(r => r.id === id)
          },
          assessmentId: id,
          studentId
        })
      })
    } else {
      // TODO This also needs to support loading multiple at a time
      const [userReq, studentsReq, settingsReq] =
        await Promise.allSettled([
          $axios.get('/api/v0.1/users/me'),
          $axios.get('/api/v0.1/students'),
          $axios.get('/api/v0.1/settings')
        ])

      if (userReq.status === 'rejected') {
        commit('user/loadUser', { user: null })
      } else {
        commit('user/loadUser', { user: userReq.value.data })
        commit('students/loadStudents', { students: studentsReq.value.data })
        commit('settings/loadSettings', { settings: settingsReq.value.data })
      }
    }
  }
}
