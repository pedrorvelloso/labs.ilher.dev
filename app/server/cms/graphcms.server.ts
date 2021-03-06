import type {
  GetArticlesQuery,
  GetArticleQuery,
  GetArticleTitleQuery,
  GetHomeInfoQuery,
  GetBookmarksQuery,
  GetWatchQuery,
} from '~/generated/graphql'
import { fetchFromGraphQL } from '~/utils/graphql'

import { buildHtml } from '../markdown.server'

import {
  GetArticle,
  GetArticles,
  GetArticleTitle,
  GetBookmarks,
  GetHomeInfo,
  GetWatch,
} from './graphql'

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

  const result = await fetchFromGraphQL(GetArticles, {
    first,
    where,
  })

  const { data, errors } = result

  if (errors) throw new Error('error fetching artitcles')

  return data.articles
}

export const getArticle = async (
  slug: string,
  locale?: string | null,
): Promise<GetArticleQuery['article']> => {
  const language = locale || 'en'
  const result = await fetchFromGraphQL(GetArticle, {
    slug,
    locale: [language],
  })

  const { data, errors } = result

  if (errors) throw new Error('error fetching article')

  if (!data.article) return null

  const contentHtml = await buildHtml(data.article.content)

  return { ...data.article, content: contentHtml }
}

export const getArticleTitle = async (
  slug: string,
  locale?: string | null,
): Promise<GetArticleTitleQuery['article']> => {
  const language = locale || 'en'
  const result = await fetchFromGraphQL(GetArticleTitle, {
    slug,
    locale: [language],
  })

  const { data, errors } = result

  if (errors) throw new Error('error fetching article')

  return data.article
}

export const getHomeInfo = async (): Promise<GetHomeInfoQuery> => {
  const result = await fetchFromGraphQL(GetHomeInfo)

  const { data, errors } = result

  if (errors) throw new Error('error fetching home info')

  return {
    articles: data.articles,
    bookmarks: data.bookmarks,
  }
}

export const getBookmarks = async (
  first = 3,
): Promise<GetBookmarksQuery['bookmarks']> => {
  const result = await fetchFromGraphQL(GetBookmarks, { first })

  const { data, errors } = result

  if (errors) throw new Error('error fetching bookmarks')

  return data.bookmarks
}

export const getWatch = async (first = 3): Promise<GetWatchQuery['links']> => {
  const result = await fetchFromGraphQL(GetWatch, { first })

  const { data, errors } = result

  if (errors) throw new Error('error fetching bookmarks')

  return data.links
}
