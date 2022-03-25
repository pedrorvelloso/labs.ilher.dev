import { useFetcher } from 'remix'
import { Icon } from '../icon'

interface ConvertKitInputFormProps {
  formId: string
}

export const ConvertKitInputForm = ({ formId }: ConvertKitInputFormProps) => {
  const convertKit = useFetcher()

  return (
    <convertKit.Form method="post" action="/action/convert-kit">
      <input type="hidden" value={formId} name="formId" />
      <div className="bg-neutral-800 w-full p-3 rounded-lg flex items-center justify-between text-neutral-300 gap-x-4">
        <input
          type="email"
          name="email"
          autoComplete="off"
          className="w-full appearance-none bg-neutral-800 outline-none placeholder:text-neutral-500"
          placeholder="E-mail"
        />
      </div>
      <button
        type="submit"
        className="text-neutral-500 hover:text-neutral-300 transition-colors mt-4 flex items-center gap-x-2 font-normal"
      >
        Sign me up <Icon name="arrowRight" />
      </button>
    </convertKit.Form>
  )
}
