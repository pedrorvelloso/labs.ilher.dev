import type { LoaderFunction } from 'remix'
import { useLoaderData, json, Form } from 'remix'

import type { GetArticlesQuery } from '~/generated/graphql'

import { getHeaders, Swr } from '~/utils/headers'
import { getArticles } from '~/server/cms/graphcms.server'

import { Articles } from '~/ui/compositions/articles'
import { Grid } from '~/ui/components/grid'
import { Icon } from '~/ui/components/icon'

type ArticlesLoaderData = {
  articles: GetArticlesQuery['articles']
  term?: string
  scope: 'all' | 'tags'
}

export const headers = getHeaders

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('q') ?? undefined
  const scope = (url.searchParams.get('scope') as 'all' | 'tags') ?? 'all'

  const articles = await getArticles(100, { query, scope })

  const headers = {
    ...Swr,
  }

  return json<ArticlesLoaderData>(
    { articles, term: query, scope },
    {
      headers,
    },
  )
}

const Blog = () => {
  const data = useLoaderData<ArticlesLoaderData>()

  return (
    <div className="my-14">
      <Grid>
        <Form method="get" role="search" className="col-span-full mb-6">
          <div className="bg-neutral-800 w-full p-3 rounded-lg flex items-center justify-between text-neutral-300 gap-x-4">
            <input
              type="search"
              name="q"
              defaultValue={data.term}
              className="w-full appearance-none bg-neutral-800 outline-none placeholder:text-neutral-500"
              placeholder="Search articles"
            />
            <button type="submit">
              <Icon name="search" size={22} />
            </button>
          </div>
        </Form>
      </Grid>
      <Articles
        title="Articles"
        articles={data.articles}
        subtitle={
          data.term && (
            <>
              Showing {data.articles.length}{' '}
              {data.articles.length > 1 ? 'articles' : 'article'} for the{' '}
              {data.scope === 'all' ? 'query' : 'tag'} <b>{data.term}</b>.
            </>
          )
        }
        inline
        className="mb-14"
      />
    </div>
  )
}

export default Blog
