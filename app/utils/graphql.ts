import { getEnv } from './misc'

export const fetchFromGraphQL = async (
  query: string,
  variables?: Record<string, any>,
) => {
  const body: any = { query }
  const Authorization = `Bearer ${getEnv('GCMS_TOKEN')}`

  if (variables) body.variables = variables

  const response = await fetch(getEnv('GCMS_URL'), {
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json', Authorization },
    method: 'POST',
  })

  return response.json()
}

export const gql = String.raw
