import clsx from 'clsx'

import type { GetHomeInfoQuery } from '~/generated/graphql'

import { Bookmark } from '../components/bookmark'
import { Grid } from '../components/grid'
import { Heading } from '../components/typograph'

interface BookmarksProps {
  bookmarks: GetHomeInfoQuery['bookmarks']
  className?: string
}

export const Bookmarks = ({ bookmarks, className }: BookmarksProps) => {
  return (
    <>
      <Heading
        size="subtitle"
        as="h2"
        className="mb-6 max-w-3xl mx-auto px-8 text-neutral-200 font-bold"
      >
        Bookmarks
      </Heading>
      <Grid
        as="section"
        className={clsx('text-neutral-300 gap-y-10', className)}
      >
        {bookmarks.map((bookmark) => (
          <Bookmark
            key={bookmark.url}
            title={bookmark.title}
            url={bookmark.url}
          />
        ))}
      </Grid>
    </>
  )
}
