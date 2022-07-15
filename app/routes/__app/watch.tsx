import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getWatch } from '~/server/cms/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { WatchList } from '~/ui/compositions/watch-list'
import { getPageSeo } from '~/utils/seo'
import { pageTitles } from '~/utils/misc'

export const meta: MetaFunction = ({ parentsData }) =>
  getPageSeo({
    parentsData,
    seo: { title: pageTitles.watch, imageTextKey: 'watch' },
  })

export const headers = getHeaders

export const loader = async () => {
  const links = await getWatch()

  return json(
    { links },
    {
      headers: {
        ...Swr,
      },
    },
  )
}

const WatchPage = () => {
  const { links } = useLoaderData<typeof loader>()

  return <WatchList links={links} />
}

export default WatchPage
