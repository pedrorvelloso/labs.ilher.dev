import type {
  GetArticlesQuery,
  GetArticleQuery,
  GetArticleTitleQuery,
} from '~/generated/graphql'
import { fetchFromGraphQL, gql } from '~/utils/graphql'

import { buildHtml } from './markdown.server'

const GetArticles = gql`
  query GetArticles($first: Int, $stage: Stage!) {
    articles(first: $first, stage: $stage, orderBy: publishedAt_DESC) {
      title
      excerpt
      slug
      tags {
        id
        name
      }
      publishedAt
    }
  }
`

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

const GetArticle = gql`
  query GetArticle($slug: String!, $locale: [Locale!]!) {
    article(locales: $locale, where: { slug: $slug }) {
      title
      publishedAt
      slug
      content
      excerpt
      tags {
        name
      }
      localizations {
        locale
      }
    }
  }
`

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

const GetArticleTitle = gql`
  query GetArticleTitle($slug: String!, $locale: [Locale!]!) {
    article(locales: $locale, where: { slug: $slug }) {
      title
    }
  }
`

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
