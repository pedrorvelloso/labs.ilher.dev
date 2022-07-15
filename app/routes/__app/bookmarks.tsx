import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getBookmarks } from '~/server/cms/graphcms.server'

import { getHeaders, Swr } from '~/utils/headers'
import { getPageSeo } from '~/utils/seo'
import { pageTitles } from '~/utils/misc'

import { Bookmarks } from '~/ui/compositions/bookmarks'

export const meta: MetaFunction = ({ parentsData }) =>
  getPageSeo({
    parentsData,
    seo: { title: pageTitles.bookmarks, imageTextKey: 'bookmarks' },
  })

export const headers = getHeaders

export const loader = async () => {
  const bookmarks = await getBookmarks(10)

  const headers = {
    ...Swr,
  }

  return json(
    { bookmarks },
    {
      headers,
    },
  )
}

const BookmarksPage = () => {
  const data = useLoaderData<typeof loader>()

  return <Bookmarks bookmarks={data.bookmarks} />
}

export default BookmarksPage
