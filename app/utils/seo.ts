interface GetSeoOptions {
  title?: string
  description?: string
  keywords?: string
  url: string
  // origin: string
  // TODO add SEO images
}

export const getSeo = ({
  title = 'Pedro Reis — Fullstack developer',
  description = 'Pedro Reis personal website',
  keywords = '',
  url,
}: GetSeoOptions) => ({
  title,
  description,
  keywords,
  'og:url': url,
  'og:title': title,
  'og:description': description,
  'twitter:creator': '@ilher',
  'twitter:site': '@ilher',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:alt': title,
})
