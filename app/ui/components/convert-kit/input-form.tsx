import { useRef, useEffect } from 'react'
import { useFetcher } from '@remix-run/react'
import { motion } from 'framer-motion'

import type { ConvertKitSubscriptionResponse } from '~/types/convertKit'

import { Icon } from '../icon'
import { Input } from '../input'

interface ConvertKitInputFormProps {
  formId: string
}

export const ConvertKitInputForm = ({ formId }: ConvertKitInputFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const convertKit = useFetcher<ConvertKitSubscriptionResponse>()

  const state: 'idle' | 'success' | 'error' | 'submitting' =
    (!convertKit.data || convertKit.data?.status === 'error') &&
    convertKit.submission
      ? 'submitting'
      : convertKit.data?.status === 'error'
      ? 'error'
      : convertKit.data?.status === 'success'
      ? 'success'
      : 'idle'

  useEffect(() => {
    if (state === 'error') {
      inputRef.current?.focus()
    }
  }, [state])

  return (
    <convertKit.Form method="post" action="/action/convert-kit">
      <input type="hidden" value={formId} name="formId" />
      <div className="relative">
        {state === 'success' && (
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0, opacity: 0 }}
            className="absolute bg-green-600 top-0 bottom-0 right-0 left-0 rounded-lg text-white flex justify-center items-center font-bold select-none"
          >
            Success, check your e-mail!
          </motion.div>
        )}
        <Input
          ref={inputRef}
          type="text"
          name="email"
          autoComplete="off"
          placeholder="E-mail"
        />
      </div>
      <button
        type="submit"
        disabled={state === 'submitting' || state === 'success'}
        className="text-neutral-500 hover:text-neutral-300 transition-colors mt-4 flex items-center gap-x-2 font-normal disabled:hover:text-neutral-500"
      >
        {state === 'submitting' && 'Submitting...'}
        {state === 'idle' && (
          <>
            Sign me up <Icon name="arrowRight" />
          </>
        )}
        {state === 'success' && 'Sent!'}
      </button>
    </convertKit.Form>
  )
}
