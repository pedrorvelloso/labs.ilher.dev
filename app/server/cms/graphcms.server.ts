import { createClient } from '@urql/core'

import type {
  GetArticlesQuery,
  GetArticleQuery,
  GetArticleTitleQuery,
  GetHomeInfoQuery,
  GetBookmarksQuery,
  GetWatchQuery,
  GetLinkQuery,
  GetLinksQuery,
} from '~/generated/graphql'
import { getEnv } from '~/utils/misc'

import { buildHtml } from '../markdown.server'

import {
  GetArticle,
  GetArticles,
  GetArticleTitle,
  GetBookmarks,
  GetHomeInfo,
  GetLink,
  GetLinks,
  GetWatch,
} from './graphql'

const graphCmsClient = createClient({
  url: getEnv('GCMS_URL'),
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${getEnv('GCMS_TOKEN')}`,
    },
  },
})

export const getArticlesWhere = (
  query?: string,
  scope: 'all' | 'tags' = 'all',
) => {
  const OR = []

  const contentWhere = { _search: query }
  const tagPrep = query?.split(' ').map((value) => ({ name_contains: value }))
  const tagWhere = tagPrep && { tags_some: { OR: [...tagPrep] } }

  if (query && scope === 'all') OR.push(contentWhere)
  if (tagWhere) OR.push(tagWhere)

  return { OR }
}

export const getArticles = async (
  first = 3,
  options?: { query?: string; scope: 'all' | 'tags' },
): Promise<GetArticlesQuery['articles']> => {
  // get where based on scope
  // filters based on content/title/tags if all
  // otherwise filters only base on tags
  const where = getArticlesWhere(options?.query, options?.scope)

  const result = await graphCmsClient
    .query<GetArticlesQuery>(GetArticles, {
      first,
      where,
    })
    .toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching artitcles')

  return data.articles
}

export const getArticle = async (
  slug: string,
  locale?: string | null,
): Promise<GetArticleQuery['article']> => {
  const language = locale || 'en'

  const result = await graphCmsClient
    .query<GetArticleQuery>(GetArticle, {
      slug,
      locale: [language],
    })
    .toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching article')

  if (!data.article) return null

  const contentHtml = await buildHtml(data.article.content)

  return { ...data.article, content: contentHtml }
}

export const getArticleTitle = async (
  slug: string,
  locale?: string | null,
): Promise<GetArticleTitleQuery['article']> => {
  const language = locale || 'en'
  const result = await graphCmsClient
    .query<GetArticleTitleQuery>(GetArticleTitle, {
      slug,
      locale: [language],
    })
    .toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching article')

  return data.article
}

export const getHomeInfo = async (): Promise<GetHomeInfoQuery> => {
  const result = await graphCmsClient
    .query<GetHomeInfoQuery>(GetHomeInfo)
    .toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching home info')

  return {
    articles: data.articles,
    bookmarks: data.bookmarks,
  }
}

export const getBookmarks = async (
  first = 3,
): Promise<GetBookmarksQuery['bookmarks']> => {
  const result = await graphCmsClient
    .query<GetBookmarksQuery>(GetBookmarks, { first })
    .toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching bookmarks')

  return data.bookmarks
}

export const getWatch = async (first = 3): Promise<GetWatchQuery['links']> => {
  const result = await graphCmsClient
    .query<GetWatchQuery>(GetWatch, { first })
    .toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching bookmarks')

  return data.links
}

export const getLinks = async () => {
  const result = await graphCmsClient.query<GetLinksQuery>(GetLinks).toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching links')

  return data
}

export const getLink = async (id: string): Promise<GetLinkQuery['link']> => {
  const result = await graphCmsClient
    .query<GetLinkQuery>(GetLink, {
      id,
    })
    .toPromise()

  const { data, error } = result

  if (error || !data) throw new Error('error fetching link')

  return data.link
}
