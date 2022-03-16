import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
} from 'remix'
import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix'

import { getDomainUrl, getUrl } from './utils/misc'
import { getSeo } from './utils/seo'

import nProgressCss from '~/styles/nprogress.css'
import tailwindCss from '~/styles/tailwind.css'

import { Progress } from './ui/components/progress'

export type RootLoaderData = {
  url: {
    origin: string
    path: string
  }
}

export const meta: MetaFunction = ({ data }) => {
  const { url } = data as RootLoaderData

  return {
    ...getSeo({
      keywords: 'React, Remix, GraphCMS, Blog',
      url: getUrl(url),
    }),
  }
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindCss },
  { rel: 'stylesheet', href: nProgressCss },
]

export const loader: LoaderFunction = ({ request }) => {
  return json<RootLoaderData>({
    url: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
  })
}

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
        <Progress />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
