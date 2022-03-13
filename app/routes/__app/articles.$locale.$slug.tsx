import type { LoaderFunction, LinksFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import type { Tag } from '~/generated/graphql'
import { getArticle } from '~/server/graphcms.server'
import { getHeaders, Swr } from '~/utils/headers'

import proseCss from '~/styles/prose.css'
import hljsCss from '~/styles/hljs.css'

import { Grid } from '~/ui/components/grid'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: proseCss },
  { rel: 'stylesheet', href: hljsCss },
]

type ArticleLoaderData = {
  article: {
    title: string
    excerpt: string
    publishedAt?: string | null
    tags: Array<Pick<Tag, 'name'>>
    content: string
    slug: string
  }
}

export const headers = getHeaders

export const loader: LoaderFunction = async ({ params }) => {
  const { slug, locale } = params

  const article = await getArticle(slug as string, locale)

  if (!article) throw json({ message: 'not found' }, { status: 404 })

  return json<ArticleLoaderData>(
    { article },
    {
      headers: {
        ...Swr,
      },
    },
  )
}

const ArticlePage = () => {
  const { article } = useLoaderData<ArticleLoaderData>()

  return (
    <Grid
      as="article"
      className="mx-auto prose prose-invert prose-h2:my-4 prose-h2:text-neutral-300 prose-p:text-neutral-300"
      dangerouslySetInnerHTML={{ __html: article.content }}
    />
  )
}

export default ArticlePage
