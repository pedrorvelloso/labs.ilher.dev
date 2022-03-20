import clsx from 'clsx'

import type { GetArticlesQuery } from '~/generated/graphql'

import { Anchor } from '../components/anchor'
import { Article } from '../components/article'
import { Grid } from '../components/grid'
import { Icon } from '../components/icon'
import { Heading } from '../components/typograph'

interface ArticlesProps {
  articles: GetArticlesQuery['articles']
  title: string
  inline?: boolean
  className?: string
  showReadAll?: boolean
}

export const Articles = ({
  title,
  articles,
  inline = false,
  className,
  showReadAll = false,
}: ArticlesProps) => {
  return (
    <>
      <Heading
        size="subtitle"
        as="h2"
        className="mb-6 max-w-3xl mx-auto px-8 text-neutral-200 font-bold"
      >
        {title}
      </Heading>
      <Grid
        as="section"
        className={clsx('text-neutral-300 gap-y-10', className)}
      >
        {articles.map((article) => (
          <Article
            key={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            publishedAt={article.publishedAt}
            slug={article.slug}
            tag={article.tags[0].name}
            inline={inline}
          />
        ))}
        {showReadAll && (
          <Anchor
            href="/articles"
            className="col-span-full flex items-center gap-x-2 text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            Read All Artciles <Icon name="arrowRight" />
          </Anchor>
        )}
      </Grid>
    </>
  )
}
