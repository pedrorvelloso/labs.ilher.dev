import clsx from 'clsx'

import { Anchor } from './anchor'
import { Heading, Text } from './typograph'

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
  // slug,
  tag,
  publishedAt,
  inline,
}: ArticleProps) => {
  return (
    <Anchor
      href="/"
      className={clsx(
        'group transition-all relative select-none before:bg-neutral-300 before:opacity-0 hover:before:opacity-100 before:block before:absolute before:-z-10 before:transition-all before:-inset-[15px] before:rounded-lg',
        {
          'col-span-full lg:col-span-4': !inline,
          'col-span-full': inline,
        },
      )}
    >
      <div className="flex items-center gap-x-4 mb-2 text-xs">
        <Text
          overrideColor
          className="bg-neutral-700 w-fit px-4 py-1 uppercase rounded-lg text-neutral-300 flex items-center"
        >
          {tag}
        </Text>
        <Text
          overrideColor
          className="text-neutral-400 group-hover:text-neutral-700"
        >
          {publishedAt || 'DRAFT'}
        </Text>
      </div>
      <Heading
        size="subtitle"
        as="h2"
        className="group-hover:text-neutral-800 mb-2"
      >
        {title}
      </Heading>
      <Text
        overrideColor
        className="text-neutral-400 group-hover:text-neutral-700 text-sm"
      >
        {excerpt}
      </Text>
    </Anchor>
  )
}
