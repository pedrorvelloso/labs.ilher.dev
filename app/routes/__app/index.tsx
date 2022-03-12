import type { LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'

import type { GetPostsQuery } from '~/generated/graphql'
import { getPosts } from '~/server/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'

import { Articles } from '~/ui/compositions/articles'
import { Hero } from '~/ui/compositions/hero'
import { Stack } from '~/ui/compositions/stack'

export type LoaderIndexData = {
  posts: GetPostsQuery['posts']
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const { data } = await getPosts()

  const headers = {
    ...Swr,
  }

  if (data.errors)
    return json<LoaderIndexData>(
      { posts: [] },
      {
        headers,
      },
    )

  return json<LoaderIndexData>(
    { posts: data.posts },
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
      <Articles title="Latest Articles" articles={data.posts} />
    </div>
  )
}

export default Index
