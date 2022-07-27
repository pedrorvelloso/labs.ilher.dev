import { gql } from '@urql/core'

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

const CommonLinkFieldsFragment = gql`
  fragment CommonLinkFieldsFragment on ExternalUrl {
    id
    title
    url
  }
`

export const GetBookmarks = gql`
  query GetBookmarks($limit: Int) {
    bookmarks: externalUrls(
      first: $limit
      orderBy: publishedAt_DESC
      where: { type: bookmark }
    ) {
      ...CommonLinkFieldsFragment
    }
  }

  ${CommonLinkFieldsFragment}
`

export const GetWatch = gql`
  query GetWatch($first: Int) {
    links: externalUrls(where: { type: stream }, first: $first) {
      ...CommonLinkFieldsFragment
      content
    }
  }

  ${CommonLinkFieldsFragment}
`

export const GetLinks = gql`
  query GetLinks {
    watch: externalUrls(where: { type: stream }) {
      ...CommonLinkFieldsFragment
      content
    }
    bookmarks: externalUrls(where: { type: bookmark }) {
      ...CommonLinkFieldsFragment
    }

    ${CommonLinkFieldsFragment}
  }
`

export const GetLink = gql`
  query GetLink($id: ID!) {
    link: externalUrl(where: { id: $id }) {
      ...CommonLinkFieldsFragment
      content
      type
    }
  }

  ${CommonLinkFieldsFragment}
`
