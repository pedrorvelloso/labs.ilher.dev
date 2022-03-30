import type { GetBookmarksQuery } from '~/generated/graphql'
import type { LoaderFunction, MetaFunction } from 'remix'
import { json, useLoaderData } from 'remix'

import { getBookmarks } from '~/server/cms/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'
import { getPageSeo } from '~/utils/seo'

import { Bookmarks } from '~/ui/compositions/bookmarks'

type BookmarksLoaderData = {
  bookmarks: GetBookmarksQuery['bookmarks']
}

export const meta: MetaFunction = ({ parentsData }) =>
  getPageSeo({ parentsData, seo: { title: 'Bookmarks' } })

export const headers = getHeaders

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
