import { parseISO, add, format } from 'date-fns'

export const formatDate = (dateString: string) => {
  return format(
    add(parseISO(dateString), {
      minutes: new Date().getTimezoneOffset(),
    }),
    'PP',
  )
}
