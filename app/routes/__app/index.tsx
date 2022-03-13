import type { LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'

import type { GetArticlesQuery } from '~/generated/graphql'
import { getArticles } from '~/server/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { Articles } from '~/ui/compositions/articles'
import { Hero } from '~/ui/compositions/hero'
import { Stack } from '~/ui/compositions/stack'

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
    <div>
      <Hero />
      <Stack />
      {data.articles && (
        <Articles title="Latest Articles" articles={data.articles} />
      )}
    </div>
  )
}

export default Index
