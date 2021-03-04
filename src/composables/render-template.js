function renderTemplate (template, { student, assessment }) {
  // eslint-disable-next-line no-eval
  return eval('`' + template + '`')
}

export function useRenderTemplate () {
  return {
    renderTemplate
  }
}
