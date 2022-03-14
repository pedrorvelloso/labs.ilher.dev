import type { LoaderFunction, LinksFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import type { Tag as ArticleTag } from '~/generated/graphql'
import { getArticle } from '~/server/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'
import { formatDate } from '~/utils/dates'
import { locales } from '~/utils/locale'

import proseCss from '~/styles/prose.css'
import prismCss from '~/styles/prism.css'

import { Grid } from '~/ui/components/grid'
import { Heading, Text } from '~/ui/components/typograph'
import { Tag } from '~/ui/components/tag'
import { Anchor } from '~/ui/components/anchor'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: proseCss },
  { rel: 'stylesheet', href: prismCss },
]

type ArticleLoaderData = {
  article: {
    title: string
    excerpt: string
    publishedAt?: string | null
    tags: Array<Pick<ArticleTag, 'name'>>
    content: string
    slug: string
    localizations: Array<{ locale: 'ptbr' | 'en' }>
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
    <div className="my-28">
      <Grid as="section" className="mb-5">
        <Heading className="text-neutral-300 col-span-full">
          {article.title}
        </Heading>
        <Text className="col-span-full text-neutral-400" overrideColor>
          {article.publishedAt ? formatDate(article.publishedAt) : 'DRAFT'}
        </Text>
        <div className="col-span-full flex items-center gap-2 mt-3">
          {article.localizations.map(({ locale }) => (
            <Anchor key={locale} href={`/articles/${locale}/${article.slug}`}>
              <Tag>Read in {locales[locale]}</Tag>
            </Anchor>
          ))}
        </div>
      </Grid>
      <Grid
        as="article"
        className="mx-auto prose prose-invert prose-h2:my-4 prose-h2:text-neutral-300 prose-p:text-neutral-300"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <Grid className="mt-28">
        <Text overrideColor className="text-neutral-400 text-sm mb-2">
          Tags:
        </Text>
        <div className="col-span-full flex gap-2">
          {article.tags.map((tag) => (
            <Anchor key={tag.name} href="/">
              <Tag>{tag.name}</Tag>
            </Anchor>
          ))}
        </div>
      </Grid>
    </div>
  )
}

export default ArticlePage
