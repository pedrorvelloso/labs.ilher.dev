import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export const buildHtml = (content: string) => {
  const md = new MarkdownIt({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch (__) {}
      }

      return ''
    },
  })

  return md.render(content)
}
