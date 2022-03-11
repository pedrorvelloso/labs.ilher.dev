import { fetchFromGraphQL, gql } from '~/utils/graphql'

const GetPosts = gql`
  query GetPosts($first: Int) {
    posts(first: $first) {
      slug
    }
  }
`

export const getLatestPots = async () => {
  const result = await fetchFromGraphQL(GetPosts, { first: 3 })

  return result
}
