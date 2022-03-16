import type { ActionFunction } from 'remix'
import { getEnv } from '~/utils/misc'

export const createConvertKitAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  // subscriber info
  const email = formData.get('email')
  // form info
  const formId = formData.get('formId')

  const body = {
    email,
    api_key: getEnv('CK_PUBLIC_API_KEY'),
  }

  const response = await fetch(
    `${getEnv('CK_BASE_URL')}/forms/${formId}/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(body),
    },
  )

  return response.json()
}
