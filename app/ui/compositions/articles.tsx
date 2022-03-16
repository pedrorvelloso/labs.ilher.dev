import clsx from 'clsx'

import type { GetArticlesQuery } from '~/generated/graphql'

import { Article } from '../components/article'
import { Grid } from '../components/grid'
import { Heading } from '../components/typograph'

interface ArticlesProps {
  articles: GetArticlesQuery['articles']
  title: string
  inline?: boolean
  className?: string
}

export const Articles = ({
  title,
  articles,
  inline = false,
  className,
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
      </Grid>
    </>
  )
}
