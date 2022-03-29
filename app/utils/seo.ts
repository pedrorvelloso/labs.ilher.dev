import type { Params } from 'react-router'

import { RootLoaderData } from '~/root'
import { ArticleLoaderData } from '~/routes/__app/articles.$locale.$slug'

import { routes } from './menu'
import { getUrl, imageText } from './misc'

type SiteSectionType = 'website' | 'article'

interface GetSeoOptions {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: SiteSectionType
  imageTextKey?: keyof typeof imageText
  url: string
  origin: string
}

export const getSeo = ({
  title = 'Pedro Reis — Fullstack developer',
  description = 'Pedro Reis personal website',
  keywords = '',
  url,
  origin,
  type = 'website',
  imageTextKey = 'home',
  image = getSeoImage({ origin, from: imageTextKey, type }),
}: GetSeoOptions) => ({
  title,
  description,
  keywords,
  'og:url': url,
  'og:title': title,
  'og:description': description,
  'og:type': type,
  'og:image': image,
  'og:image:alt': title,
  'twitter:card': image ? 'summary_large_image' : 'sumamry',
  'twitter:image': image,
  'twitter:creator': '@ilher',
  'twitter:site': '@ilher',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:alt': title,
})

interface GetSeoImageOptions {
  origin: string
  from: string
  type?: SiteSectionType
  locale?: string
}

export const getSeoImage = ({
  origin,
  from,
  type = 'website',
  locale = 'en',
}: GetSeoImageOptions) => {
  const params = new URLSearchParams({ from, type, locale })

  return `${origin}/image/social?${params}`
}

interface SeoArticleMetaOptions {
  data: ArticleLoaderData
  parentsData: {
    root: RootLoaderData
  }
  params: Params<string>
}

export const getSeoArticleMeta = ({
  data,
  parentsData,
  params,
}: SeoArticleMetaOptions) => {
  if (!data)
    return { title: 'Page not found', description: 'This page does not exist!' }

  const { url } = parentsData.root

  return {
    ...getSeo({
      origin: url.origin,
      title: data.article.title,
      url: getUrl({
        origin: url.origin,
        path: `${routes.articles}/${params.locale}/${data.article.slug}`,
      }),
      description: data.article.excerpt,
      image: getSeoImage({
        origin: url.origin,
        from: data.article.slug,
        type: 'article',
        locale: params.locale,
      }),
      type: 'article',
    }),
  }
}
