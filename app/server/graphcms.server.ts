import { fetchFromGraphQL, gql } from '~/utils/graphql'

const GetPosts = gql`
  query GetPosts($first: Int) {
    posts(first: $first) {
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

export const getPosts = async (first = 3) => {
  const result = await fetchFromGraphQL(GetPosts, { first })

  return result
}
