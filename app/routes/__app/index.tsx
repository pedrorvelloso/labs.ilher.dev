import type { LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'

import type { GetArticlesQuery } from '~/generated/graphql'
import { getArticles } from '~/server/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { Articles } from '~/ui/compositions/articles'
import { Intro } from '~/ui/compositions/intro'

type IndexLoaderData = {
  articles: GetArticlesQuery['articles'] | null
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const articles = await getArticles()

  const headers = {
    ...Swr,
  }

  try {
    return json<IndexLoaderData>(
      { articles },
      {
        headers,
      },
    )
  } catch {
    return json<IndexLoaderData>({ articles: null }, { headers })
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
        />
      )}
      {data.articles && (
        <Articles
          title="Articles"
          articles={data.articles}
          inline
          className="mb-28"
        />
      )}
    </div>
  )
}

export default Index
