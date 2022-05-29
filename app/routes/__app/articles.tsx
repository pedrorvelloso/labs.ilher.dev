import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData, Form } from '@remix-run/react'

import type { GetArticlesQuery } from '~/generated/graphql'

import { getHeaders, Swr } from '~/utils/headers'
import { getPageSeo } from '~/utils/seo'
import { pageTitles } from '~/utils/misc'
import { getArticles } from '~/server/cms/graphcms.server'

import { Articles } from '~/ui/compositions/articles'
import { Grid } from '~/ui/components/grid'
import { Icon } from '~/ui/components/icon'
import { Input } from '~/ui/components/input'

type ArticlesLoaderData = {
  articles: GetArticlesQuery['articles']
  term?: string
  scope: 'all' | 'tags'
}

export const meta: MetaFunction = ({ parentsData }) =>
  getPageSeo({
    parentsData,
    seo: { title: pageTitles.articles, imageTextKey: 'articles' },
  })

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
    <>
      <Grid>
        <Form method="get" role="search" className="col-span-full mb-14">
          <Input
            type="search"
            name="q"
            defaultValue={data.term}
            placeholder="Search articles"
            rightContent={
              <button type="submit">
                <Icon name="search" size={22} />
              </button>
            }
          />
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
    </>
  )
}

export default Blog
