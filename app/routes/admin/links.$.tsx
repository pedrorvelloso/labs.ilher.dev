import { json, type LoaderArgs } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'

import { getLink, getLinks } from '~/server/cms/graphcms.server'

import { adminRoutes } from '~/utils/menu'

import { Bookmark } from '~/ui/components/bookmark'
import { ListSection } from '~/ui/compositions/list-section'
import { Modal } from '~/ui/components/modal'
import { Input } from '~/ui/components/input'
import { Button } from '~/ui/components/button'

export const loader = async ({ params }: LoaderArgs) => {
  const [links, link] = await Promise.all([
    getLinks(),
    (function () {
      if (params['*']) {
        return getLink(params['*'])
      }
      return null
    })(),
  ])

  return json({ watch: links.watch, bookmarks: links.bookmarks, link })
}

const LinksPage = () => {
  const data = useLoaderData<typeof loader>()
  const navigate = useNavigate()

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
      <Modal
        isOpen={!!data.link}
        title={
          data.link?.type === 'stream'
            ? 'Edit Watch Link'
            : 'Edit Bookmark Link'
        }
        onClose={() => navigate('/admin/links')}
        actions={
          <div className="flex gap-2">
            <Button onClick={() => console.log('save')} color="success">
              Save
            </Button>
            <Button
              onClick={() => console.log('cancel')}
              variant="ghost"
              color="error"
            >
              Cancel
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-3">
          <Input defaultValue={data.link?.title} placeholder="Title" />
          <Input defaultValue={data.link?.url} placeholder="URL" type="url" />
        </div>
      </Modal>
    </>
  )
}

export default LinksPage
