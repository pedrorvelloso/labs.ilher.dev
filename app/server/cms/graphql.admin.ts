import { gql } from '@urql/core'

export const UpdateLink = gql`
  mutation UpdateLink($id: ID!, $data: ExternalUrlUpdateInput!) {
    updateExternalUrl(where: { id: $id }, data: $data) {
      updatedAt
    }
  }
`

export const PublishLink = gql`
  mutation PublishLink($id: ID!) {
    publishExternalUrl(where: { id: $id }, to: [PUBLISHED]) {
      publishedAt
    }
  }
`
