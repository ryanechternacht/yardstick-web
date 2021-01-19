export const state = () => {
  console.log('state')

  return {
    student: {
      name: {
        first: 'Darryl',
        last: 'Hurt',
        full: 'Darryl Hurt',
        possessive: 'Darryl\'s'
      },
      pronouns: {
        possessive: 'his',
        possessiveUpper: 'His',
        nominative: 'he',
        nominativeUpper: 'He',
        accusative: 'him',
        accusativeUpper: 'Him'
      }
    }
  }
}

export const getters = {
  student: state => state.student
}
