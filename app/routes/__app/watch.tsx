import type { LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'
import { GetWatchQuery } from '~/generated/graphql'

import { getWatch } from '~/server/cms/graphcms.server'
import { WatchList } from '~/ui/compositions/watch-list'
import { Swr } from '~/utils/headers'

type WatchPageLoaderData = {
  links: GetWatchQuery['links']
}

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

  return (
    <div className="my-14">
      <WatchList links={links} />
    </div>
  )
}

export default WatchPage
