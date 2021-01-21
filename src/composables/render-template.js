function renderStudentTemplate (student, template) {
  // eslint-disable-next-line no-eval
  return eval('`' + template + '`')
}

export function useRenderTemplate () {
  return {
    renderStudentTemplate
  }
}
