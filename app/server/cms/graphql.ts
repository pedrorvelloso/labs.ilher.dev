import { gql } from '~/utils/graphql'

// get articles
export const GetArticles = gql`
  query GetArticles($first: Int, $where: ArticleWhereInput) {
    articles(first: $first, orderBy: publishedAt_DESC, where: $where) {
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

// get article details + content
export const GetArticle = gql`
  query GetArticle($slug: String!, $locale: [Locale!]!) {
    article(locales: $locale, where: { slug: $slug }) {
      title
      locale
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

// get article title
export const GetArticleTitle = gql`
  query GetArticleTitle($slug: String!, $locale: [Locale!]!) {
    article(locales: $locale, where: { slug: $slug }) {
      title
    }
  }
`

export const GetHomeInfo = gql`
  query GetHomeInfo {
    articles(first: 3, orderBy: publishedAt_DESC, where: { featured: true }) {
      title
      excerpt
      slug
      tags(first: 1) {
        id
        name
      }
      publishedAt
    }
    bookmarks: externalUrls(
      first: 5
      orderBy: publishedAt_DESC
      where: { type: bookmark }
    ) {
      url
      title
    }
  }
`

export const GetBookmarks = gql`
  query GetBookmarks($limit: Int) {
    bookmarks: externalUrls(
      first: $limit
      orderBy: publishedAt_DESC
      where: { type: bookmark }
    ) {
      title
      url
    }
  }
`

export const GetWatch = gql`
  query GetWatch($first: Int) {
    links: externalUrls(where: { type: stream }, first: $first) {
      title
      url
      content
    }
  }
`
