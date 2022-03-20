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

export const getArticles = async (
  first = 3,
  stage: 'DRAFT' | 'PUBLISHED' = 'PUBLISHED',
): Promise<GetArticlesQuery['articles']> => {
  const result = await fetchFromGraphQL(GetArticles, {
    first,
    stage,
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

export const getHomeInfo = async (
  stage: 'DRAFT' | 'PUBLISHED' = 'PUBLISHED',
): Promise<GetHomeInfoQuery> => {
  const result = await fetchFromGraphQL(GetHomeInfo, { stage })

  const { data, errors } = result

  if (errors) throw new Error('error fetching home info')

  return {
    articles: data.articles,
    bookmarks: data.bookmarks,
  }
}

export const getBookmarks = async (
  first = 3,
  stage: 'DRAFT' | 'PUBLISHED' = 'PUBLISHED',
): Promise<GetBookmarksQuery['bookmarks']> => {
  const result = await fetchFromGraphQL(GetBookmarks, { first, stage })

  const { data, errors } = result

  if (errors) throw new Error('error fetching bookmarks')

  return data.bookmarks
}

export const getWatch = async (
  first = 3,
  stage: 'DRAFT' | 'PUBLISHED' = 'PUBLISHED',
): Promise<GetWatchQuery['links']> => {
  const result = await fetchFromGraphQL(GetWatch, { first, stage })

  const { data, errors } = result

  if (errors) throw new Error('error fetching bookmarks')

  return data.links
}
