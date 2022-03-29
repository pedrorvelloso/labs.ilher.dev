import { formatDate } from '~/utils/dates'
import { routes } from '~/utils/menu'

import { BoxAnchor } from './box-anchor'
import { Tag } from './tag'
import { Text } from './typograph'

interface ArticleProps {
  slug: string
  title: string
  tag: string
  excerpt: string
  publishedAt: string | null
  inline?: boolean
}

export const Article = ({
  title,
  excerpt,
  slug,
  tag,
  publishedAt,
  inline,
}: ArticleProps) => {
  return (
    <BoxAnchor
      href={`${routes.articles}/en/${slug}`}
      inline={inline}
      prefetch="intent"
    >
      <div className="flex items-center gap-x-4 mb-2">
        <Tag>{tag}</Tag>
        <Text
          size="xs"
          className="text-neutral-400 group-hover:text-neutral-700"
        >
          {publishedAt ? formatDate(publishedAt) : 'DRAFT'}
        </Text>
      </div>
      <Text
        size="xl"
        as="h2"
        className="group-hover:text-neutral-800 mb-2 text-neutral-200"
      >
        {title}
      </Text>
      <Text
        size="base"
        className="text-neutral-400 group-hover:text-neutral-700 text-sm"
      >
        {excerpt}
      </Text>
    </BoxAnchor>
  )
}
