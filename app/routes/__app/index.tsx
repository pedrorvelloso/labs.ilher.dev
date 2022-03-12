import type { LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'

import type { GetArticlesQuery } from '~/generated/graphql'
import { getArticles } from '~/server/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { Articles } from '~/ui/compositions/articles'
import { Hero } from '~/ui/compositions/hero'
import { Stack } from '~/ui/compositions/stack'

export type LoaderIndexData = {
  articles: GetArticlesQuery['articles']
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const { data } = await getArticles()

  const headers = {
    ...Swr,
  }

  if (data.errors)
    return json<LoaderIndexData>(
      { articles: [] },
      {
        headers,
      },
    )

  return json<LoaderIndexData>(
    { articles: data.articles },
    {
      headers,
    },
  )
}

const Index = () => {
  const data = useLoaderData<LoaderIndexData>()

  return (
    <div>
      <Hero />
      <Stack />
      <Articles title="Latest Articles" articles={data.articles} />
    </div>
  )
}

export default Index
