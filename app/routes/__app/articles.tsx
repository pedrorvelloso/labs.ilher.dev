import type { LoaderFunction } from 'remix'
import { useLoaderData, json } from 'remix'

import type { GetArticlesQuery } from '~/generated/graphql'

import { getHeaders, Swr } from '~/utils/headers'
import { getArticles } from '~/server/cms/graphcms.server'

import { Articles } from '~/ui/compositions/articles'

type ArticlesLoaderData = {
  articles: GetArticlesQuery['articles']
}

export const headers = getHeaders

export const loader: LoaderFunction = async () => {
  const articles = await getArticles()

  const headers = {
    ...Swr,
  }

  return json<ArticlesLoaderData>(
    { articles },
    {
      headers,
    },
  )
}

const Blog = () => {
  const data = useLoaderData<ArticlesLoaderData>()

  return (
    <div className="my-14">
      <Articles
        title="Articles"
        articles={data.articles}
        inline
        className="mb-14"
      />
    </div>
  )
}

export default Blog
