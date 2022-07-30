import { json } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'

import { getLinks } from '~/server/cms/graphcms.server'

import { adminRoutes } from '~/utils/menu'

import { Bookmark } from '~/ui/components/bookmark'
import { ListSection } from '~/ui/compositions/list-section'

export const loader = async () => {
  const links = await getLinks()

  return json({ watch: links.watch, bookmarks: links.bookmarks })
}

const LinksPage = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <ListSection title="Bookmarks links">
        {data.bookmarks.map((bookmark) => (
          <Bookmark
            key={bookmark.url}
            title={bookmark.title}
            url={bookmark.url}
            href={`${adminRoutes.links}/${bookmark.id}`}
          />
        ))}
      </ListSection>
      <Outlet />
    </>
  )
}

export default LinksPage
