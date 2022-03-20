import type { LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'

import type { GetHomeInfoQuery } from '~/generated/graphql'
import { getHomeInfo } from '~/server/cms/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { Articles } from '~/ui/compositions/articles'
import { Intro } from '~/ui/compositions/intro'
import { Bookmarks } from '~/ui/compositions/bookmarks'

type IndexLoaderData = {
  articles: GetHomeInfoQuery['articles'] | null
  bookmarks: GetHomeInfoQuery['bookmarks'] | null
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const { articles, bookmarks } = await getHomeInfo()

  const headers = {
    ...Swr,
  }

  try {
    return json<IndexLoaderData>(
      { articles, bookmarks },
      {
        headers,
      },
    )
  } catch {
    return json<IndexLoaderData>(
      { articles: null, bookmarks: null },
      { headers },
    )
  }
}

const Index = () => {
  const data = useLoaderData<IndexLoaderData>()

  return (
    <div className="my-14">
      <Intro />
      {data.articles && (
        <Articles
          title="Featured Articles"
          articles={data.articles}
          className="mb-14"
          showReadAll
        />
      )}
      {data.bookmarks && <Bookmarks bookmarks={data.bookmarks} />}
    </div>
  )
}

export default Index
