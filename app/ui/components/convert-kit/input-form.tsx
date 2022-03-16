import { useFetcher } from 'remix'

interface ConvertKitInputFormProps {
  formId: string
}

export const ConvertKitInputForm = ({ formId }: ConvertKitInputFormProps) => {
  const convertKit = useFetcher()

  return (
    <convertKit.Form method="post" action="/action/convert-kit">
      <input type="hidden" value={formId} name="formId" />
      <input type="email" name="email" autoComplete="off" />
      <button type="submit">Send</button>
    </convertKit.Form>
  )
}
