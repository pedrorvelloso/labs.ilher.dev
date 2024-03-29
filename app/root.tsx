import { useEffect } from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLocation,
} from '@remix-run/react'
import { json } from '@remix-run/node'
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/node'

import { env, getDomainUrl, getUrl } from './utils/misc'
import { getSeo } from './utils/seo'
import * as gtag from '~/utils/gtags'

import nProgressCss from '~/styles/nprogress.css'
import tailwindCss from '~/styles/tailwind.css'
import noScriptCss from '~/styles/no-script.css'

import { Error } from './ui/compositions/error'
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
      origin: url.origin,
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
  const location = useLocation()

  useEffect(() => {
    gtag.pageview(location.pathname)
  }, [location])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <noscript>
          <link rel="stylesheet" href={noScriptCss} />
        </noscript>
      </head>
      <body className="bg-neutral-900 text-neutral-300">
        <Outlet />
        <Progress />
        <ScrollRestoration />
        <Scripts />
        {env('development') ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          </>
        )}
        <LiveReload />
      </body>
    </html>
  )
}

export const CatchBoundary = () => {
  const caught = useCatch()
  const location = useLocation()

  if (caught.status === 404) {
    return (
      <html lang="en">
        <head>
          <title>Oh no...</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Links />
          <noscript>
            <link rel="stylesheet" href={noScriptCss} />
          </noscript>
        </head>
        <body className="bg-neutral-900 text-neutral-300">
          <div className="h-screen">
            <Error
              code={caught.status}
              message={`Page ${location.pathname} does not exists!`}
            />
          </div>
          <Scripts />
        </body>
      </html>
    )
  }
}

export const ErrorBoundary = () => {
  return (
    <html lang="en">
      <head>
        <title>Oh no...</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Links />
        <noscript>
          <link rel="stylesheet" href={noScriptCss} />
        </noscript>
      </head>
      <body className="bg-neutral-900 text-neutral-300">
        <div className="h-screen">
          <Error
            code={500}
            message="Something went wrong! Please try again later."
          />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
