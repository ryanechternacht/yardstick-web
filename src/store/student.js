export const state = () => ({
  student: {
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
})

export const getters = {
  student: state => state.student
}
