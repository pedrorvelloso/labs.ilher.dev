import type { GetBookmarksQuery } from '~/generated/graphql'
import type { LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import { getBookmarks } from '~/server/cms/graphcms.server'
import { Swr } from '~/utils/headers'
import { Bookmarks } from '~/ui/compositions/bookmarks'

type BookmarksLoaderData = {
  bookmarks: GetBookmarksQuery['bookmarks']
}

export const loader: LoaderFunction = async () => {
  const bookmarks = await getBookmarks(10)

  const headers = {
    ...Swr,
  }

  return json<BookmarksLoaderData>(
    { bookmarks },
    {
      headers,
    },
  )
}

const BookmarksPage = () => {
  const data = useLoaderData<BookmarksLoaderData>()

  return <Bookmarks bookmarks={data.bookmarks} />
}

export default BookmarksPage
