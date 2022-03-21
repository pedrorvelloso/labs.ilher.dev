import type { GetArticlesQuery } from '~/generated/graphql'

import { Anchor } from '../components/anchor'
import { Article } from '../components/article'
import { Icon } from '../components/icon'

import { ListSection } from './list-section'

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
    <ListSection title={title} className={className}>
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
    </ListSection>
  )
}
