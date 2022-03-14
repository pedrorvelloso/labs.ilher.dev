import MarkdownIt from 'markdown-it'

export const buildHtml = async (content: string) => {
  const [{ refractor }, { toHtml }] = await Promise.all([
    await import('refractor'),
    await import('hast-util-to-html'),
  ])

  const [{ default: tsx }, { default: jsx }] = await Promise.all([
    await import('refractor/lang/tsx.js'),
    await import('refractor/lang/jsx.js'),
  ])

  refractor.register(tsx)
  refractor.register(jsx)

  console.log(refractor.registered(''))

  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && refractor.registered(lang)) {
        try {
          const hast = refractor.highlight(str, lang)
          return toHtml(hast)
        } catch (__) {}
      }

      return ''
    },
  })

  return md.render(content)
}
