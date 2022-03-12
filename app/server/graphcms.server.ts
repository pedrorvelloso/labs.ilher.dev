import { fetchFromGraphQL, gql } from '~/utils/graphql'

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
) => {
  const result = await fetchFromGraphQL(GetArticles, {
    first,
    stage,
  })

  return result
}

const GetArticle = gql`
  query GetArticle($slug: String!, $locale: [Locale!]!) {
    article(locales: $locale, where: { slug: $slug }) {
      title
      publishedAt
      slug
      content
      tags {
        name
      }
      localizations {
        locale
      }
    }
  }
`

export const getArticle = async (slug: string, locale?: string | null) => {
  const language = locale || 'en'
  const result = await fetchFromGraphQL(GetArticle, {
    slug,
    locale: [language],
  })

  return result
}
