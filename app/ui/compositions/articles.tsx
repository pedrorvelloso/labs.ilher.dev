import type { GetArticlesQuery } from '~/generated/graphql'

import { Article } from '../components/article'
import { Grid } from '../components/grid'
import { Heading } from '../components/typograph'

interface ArticlesProps {
  articles: GetArticlesQuery['articles']
  title: string
  inline?: boolean
}

export const Articles = ({
  title,
  articles,
  inline = false,
}: ArticlesProps) => {
  return (
    <>
      <Heading
        size="subtitle"
        as="h2"
        className="mb-6 col-span-full max-w-5xl mx-auto px-9 md:px-16 text-neutral-200"
      >
        {title}
      </Heading>
      <Grid as="section" className="text-neutral-300 mb-28 gap-y-10">
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
