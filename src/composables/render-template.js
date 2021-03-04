function renderTemplate (template, { student }) {
  // eslint-disable-next-line no-eval
  return eval('`' + template + '`')
}

export function useRenderTemplate () {
  return {
    renderTemplate
  }
}
