import type { GetHomeInfoQuery } from '~/generated/graphql'

import { Bookmark } from '../components/bookmark'

import { ListSection } from './list-section'

interface BookmarksProps {
  bookmarks: GetHomeInfoQuery['bookmarks']
  className?: string
}

export const Bookmarks = ({ bookmarks, className }: BookmarksProps) => {
  return (
    <ListSection title="Bookmarks" className={className}>
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.url}
          title={bookmark.title}
          url={bookmark.url}
        />
      ))}
    </ListSection>
  )
}
