import type { LinksFunction, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getArticle } from '~/server/cms/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'
import { formatDate } from '~/utils/dates'
import { locales } from '~/utils/locale'
import { getSeoArticleMeta } from '~/utils/seo'
import { getDomainUrl } from '~/utils/misc'
import { routes } from '~/utils/menu'

import prismCss from '~/styles/prism.css'

import { Error } from '~/ui/compositions/error'

import { Grid } from '~/ui/components/grid'
import { Heading, Text } from '~/ui/components/typograph'
import { Tag } from '~/ui/components/tag'
import { Anchor } from '~/ui/components/anchor'
import { Icon } from '~/ui/components/icon'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: prismCss },
]

export const headers = getHeaders

export const meta = getSeoArticleMeta

export const loader = async ({ params, request }: LoaderArgs) => {
  const { slug, locale } = params
  const origin = getDomainUrl(request)

  const article = await getArticle(slug as string, locale)

  if (!article) throw json({ message: 'not found' }, { status: 404 })

  return json(
    { article, origin },
    {
      headers: {
        ...Swr,
      },
    },
  )
}

const ArticlePage = () => {
  const { article, origin } = useLoaderData<typeof loader>()

  const tweetMessage = `Read "${article.title}" by @ilher\n\n`

  return (
    <>
      <Grid as="section" className="mb-5">
        <div className="col-span-full lg:col-span-10 lg:col-start-2">
          <Heading className="text-neutral-200 font-bold">
            {article.title}
          </Heading>
          <Text className="text-neutral-400" size="base">
            {article.publishedAt ? formatDate(article.publishedAt) : 'DRAFT'}
          </Text>
          <div className="flex items-center gap-2 mt-3">
            {article.localizations.map(({ locale }) => (
              <Anchor
                key={locale}
                href={`${routes.articles}/${locale}/${article.slug}`}
                prefetch="intent"
              >
                <Tag>Read in {locales[locale]}</Tag>
              </Anchor>
            ))}
          </div>
        </div>
      </Grid>
      <Grid
        as="article"
        className="mx-auto prose prose-invert prose-h2:my-4 prose-h2:text-neutral-300 prose-p:text-neutral-300 lg:prose-pre:col-span-full"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <Grid className="mt-28">
        <div className="col-span-full lg:col-span-10 lg:col-start-2">
          <Text className="text-neutral-400 text-sm mb-2">Tags:</Text>
          <div className="flex gap-2">
            {article.tags.map((tag) => (
              <Anchor
                key={tag.name}
                href={`${routes.articles}?q=${tag.name}&scope=tags`}
              >
                <Tag>{tag.name}</Tag>
              </Anchor>
            ))}
          </div>
          <Anchor
            href={`https://twitter.com/intent/tweet?${new URLSearchParams({
              url: `${origin}${routes.articles}/${article.locale}/${article.slug}`,
              text: tweetMessage,
            })}`}
            className="col-span-full flex items-center gap-x-2 text-neutral-500 hover:text-neutral-300 transition-colors mt-6"
          >
            Tweet this article <Icon name="twitter" />
          </Anchor>
        </div>
      </Grid>
    </>
  )
}

export const CatchBoundary = () => {
  return <Error code={404} message="Article not found!" />
}

export default ArticlePage
