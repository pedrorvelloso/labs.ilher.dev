import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getHomeInfo } from '~/server/cms/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { Articles } from '~/ui/compositions/articles'
import { Intro } from '~/ui/compositions/intro'
import { Bookmarks } from '~/ui/compositions/bookmarks'

export const headers = getHeaders

export const loader = async () => {
  const { articles, bookmarks } = await getHomeInfo()

  const headers = {
    ...Swr,
  }

  try {
    return json(
      { articles, bookmarks },
      {
        headers,
      },
    )
  } catch {
    return json({ articles: null, bookmarks: null }, { headers })
  }
}

const Index = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <Intro />
      {data.articles && (
        <Articles
          title="Featured Articles"
          articles={data.articles}
          className="mb-14"
          showReadAll
        />
      )}
      {data.bookmarks && (
        <Bookmarks
          title="Recent Bookmarks"
          bookmarks={data.bookmarks}
          subtitle="Latest bookmarked links."
          showReadAll
        />
      )}
    </>
  )
}

export default Index
