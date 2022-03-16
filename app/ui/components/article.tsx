import clsx from 'clsx'

import { formatDate } from '~/utils/dates'

import { Anchor } from './anchor'
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
    <Anchor
      href={`/articles/en/${slug}`}
      className={clsx(
        'group transition-all relative select-none before:bg-neutral-300 before:opacity-0 hover:before:opacity-100 before:block before:absolute before:-z-10 before:transition-all before:-inset-[15px] before:rounded-lg',
        {
          'col-span-full lg:col-span-4': !inline,
          'col-span-full': inline,
        },
      )}
    >
      <div className="flex items-center gap-x-4 mb-2">
        <Tag>{tag}</Tag>
        <Text
          overrideColor
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
        overrideColor
        size="base"
        className="text-neutral-400 group-hover:text-neutral-700 text-sm"
      >
        {excerpt}
      </Text>
    </Anchor>
  )
}
