import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { ConvertKitSubscriptionResponse } from '~/types/convertKit'
import { getEnv } from '~/utils/misc'

interface ConvertKitSubscription {
  error?: string
  message?: string
  subscription?: {
    state: string
  }
}

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

  const { error, message }: ConvertKitSubscription = await response.json()

  if (error) {
    return json<ConvertKitSubscriptionResponse>(
      {
        status: 'error',
        error: message,
      },
      { status: 400 },
    )
  }

  return json<ConvertKitSubscriptionResponse>({ status: 'success' })
}
