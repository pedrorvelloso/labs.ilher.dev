import type { GetArticlesQuery, GetArticleQuery } from '~/generated/graphql'
import { fetchFromGraphQL, gql } from '~/utils/graphql'

import { buildHtml } from './markdown.server'

const GetArticles = gql`
  query GetArticles($first: Int, $stage: Stage!) {
    articles(first: $first, stage: $stage) {
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

  const contentHtml = buildHtml(data.article.content)

  return { ...data.article, content: contentHtml }
}
