import { gql } from '~/utils/graphql'

// get articles
export const GetArticles = gql`
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

// get article details + content
export const GetArticle = gql`
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

// get article title
export const GetArticleTitle = gql`
  query GetArticleTitle($slug: String!, $locale: [Locale!]!) {
    article(locales: $locale, where: { slug: $slug }) {
      title
    }
  }
`

export const GetHomeInfo = gql`
  query GetHomeInfo($stage: Stage!) {
    articles(
      first: 3
      stage: $stage
      orderBy: publishedAt_DESC
      where: { featured: true }
    ) {
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
      stage: $stage
      orderBy: publishedAt_DESC
      where: { type: bookmark }
    ) {
      url
      title
    }
  }
`

export const GetBookmarks = gql`
  query GetBookmarks($stage: Stage!, $limit: Int) {
    bookmarks: externalUrls(
      stage: $stage
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
  query GetWatch($stage: Stage!, $first: Int) {
    links: externalUrls(where: { type: stream }, stage: $stage, first: $first) {
      title
      url
      content
    }
  }
`
