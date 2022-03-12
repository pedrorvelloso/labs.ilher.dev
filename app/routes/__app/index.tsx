import type { LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'

import type { Post } from '~/generated/graphql'

import { getPosts } from '~/server/graphcms.server'

import { Articles } from '~/ui/compositions/articles'
import { Hero } from '~/ui/compositions/hero'
import { Stack } from '~/ui/compositions/stack'

export type LoaderIndexData = {
  posts: Array<Post>
}

export const loader: LoaderFunction = async () => {
  const { data } = await getPosts()

  if (data.errors) return json<LoaderIndexData>({ posts: [] })

  return json<LoaderIndexData>({ posts: data.posts })
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
