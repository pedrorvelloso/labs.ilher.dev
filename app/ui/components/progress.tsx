import { useEffect } from 'react'
import { useTransition } from 'remix'

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

export const Progress = () => {
  const transition = useTransition()
  useEffect(() => {
    if (transition.state === 'idle') NProgress.done()
    else NProgress.start()
  }, [transition.state])

  return <></>
}
