import type { LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'
import type { GetWatchQuery } from '~/generated/graphql'

import { getWatch } from '~/server/cms/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { WatchList } from '~/ui/compositions/watch-list'

type WatchPageLoaderData = {
  links: GetWatchQuery['links']
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const links = await getWatch()

  return json<WatchPageLoaderData>(
    { links },
    {
      headers: {
        ...Swr,
      },
    },
  )
}

const WatchPage = () => {
  const { links } = useLoaderData<WatchPageLoaderData>()

  return <WatchList links={links} />
}

export default WatchPage
