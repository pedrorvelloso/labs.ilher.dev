import { createClient } from '@urql/core'
import type {
  UpdateLinkMutation,
  UpdateLinkMutationVariables,
} from '~/generated/graphql'

import { getEnv } from '~/utils/misc'
import { UpdateLink } from './graphql.admin'

const graphCmsAdminClient = createClient({
  url: getEnv('GCMS_URL'),
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${getEnv('GCMS_TOKEN_MANAGEMENT')}`,
    },
  },
})

export const updateLink = async (payload: UpdateLinkMutationVariables) => {
  const result = await graphCmsAdminClient
    .mutation<UpdateLinkMutation, UpdateLinkMutationVariables>(
      UpdateLink,
      payload,
    )
    .toPromise()

  const { error, data } = result

  if (error || !data) throw new Error('error updating link')

  return data.updateExternalUrl
}
