import MarkdownIt from 'markdown-it'

export const buildHtml = async (content: string) => {
  const [{ lowlight }, { toHtml }] = await Promise.all([
    await import('lowlight'),
    await import('hast-util-to-html'),
  ])

  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && lowlight.registered(lang)) {
        try {
          const hast = lowlight.highlight(lang, str)

          return toHtml(hast)
        } catch (__) {}
      }

      return ''
    },
  })

  return md.render(content)
}
