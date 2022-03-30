import type { LoaderFunction } from 'remix'

export const loader: LoaderFunction = () => {
  const script =
    "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GK57XT0TG7');"
  return new Response(script, {
    headers: {
      'Content-Type': 'text/javascript',
    },
  })
}
