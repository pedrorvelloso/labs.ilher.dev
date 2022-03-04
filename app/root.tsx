import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction, LinksFunction } from 'remix'

import tailwindCss from '~/styles/tailwind.css'

export const meta: MetaFunction = () => {
  return { title: 'Pedro Reis', description: 'Pedro Reis personal website' }
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindCss },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-900">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
