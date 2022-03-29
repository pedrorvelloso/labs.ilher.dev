import type { GetHomeInfoQuery } from '~/generated/graphql'

import { routes } from '~/utils/menu'

import { Bookmark } from '../components/bookmark'
import { Anchor } from '../components/anchor'
import { Icon } from '../components/icon'

import { ListSection } from './list-section'

interface BookmarksProps {
  title?: string
  bookmarks: GetHomeInfoQuery['bookmarks']
  className?: string
  showReadAll?: boolean
  subtitle?: React.ReactNode
}

export const Bookmarks = ({
  title = 'Bookmarks',
  bookmarks,
  className,
  showReadAll,
  subtitle,
}: BookmarksProps) => {
  return (
    <ListSection title={title} className={className} subtitle={subtitle}>
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.url}
          title={bookmark.title}
          url={bookmark.url}
        />
      ))}
      {showReadAll && (
        <Anchor
          href={routes.bookmarks}
          className="col-span-full flex items-center gap-x-2 text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          See All Bookmarks <Icon name="arrowRight" />
        </Anchor>
      )}
    </ListSection>
  )
}
