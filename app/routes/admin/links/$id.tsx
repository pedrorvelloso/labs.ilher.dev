import { json, type LoaderArgs, type ActionArgs } from '@remix-run/node'
import { useLoaderData, useNavigate, Form } from '@remix-run/react'
import { z } from 'zod'

// import { updateLink } from '~/server/cms/graphcms.admin.server'
import { getLink } from '~/server/cms/graphcms.server'

import { Button } from '~/ui/components/button'
import { Input } from '~/ui/components/input'
import { Modal, ModalAction, ModalContent } from '~/ui/components/modal'
import { adminRoutes } from '~/utils/menu'

export const loader = async ({ params }: LoaderArgs) => {
  const link = await getLink(params.id as string)

  return json({ link })
}

const linkSchema = z.object({
  id: z.string(),
  type: z.string(),
  title: z.string(),
  url: z.string().url(),
  content: z.optional(z.string()),
})

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()

  const validate = linkSchema.safeParse(Object.fromEntries(formData))

  if (!validate.success) return null

  // await updateLink({
  //   data: { type: 'bookmark' },
  //   id: formData.get('id') as string,
  // })

  return null
}

const LinkIDPage = () => {
  const data = useLoaderData<typeof loader>()
  const navigate = useNavigate()

  return (
    <Modal
      isOpen={!!data.link}
      title={
        data.link?.type === 'stream' ? 'Edit Watch Link' : 'Edit Bookmark Link'
      }
      onClose={() => navigate(adminRoutes.links)}
    >
      <Form method="post">
        <ModalContent>
          <div className="flex flex-col gap-3">
            <input type="hidden" value={data.link?.id} name="id" />
            <input
              type="hidden"
              value={data.link?.type || 'bookmark'}
              name="type"
            />
            <Input
              defaultValue={data.link?.title}
              placeholder="Title"
              name="title"
            />
            <Input
              defaultValue={data.link?.url}
              placeholder="URL"
              // type="url"
              name="url"
            />
            {data.link?.type === 'stream' && <textarea></textarea>}
          </div>
        </ModalContent>
        <ModalAction>
          <div className="flex gap-2">
            <Button color="success" type="submit">
              Save
            </Button>
            <Button
              onClick={() => navigate(adminRoutes.links)}
              variant="ghost"
              color="error"
            >
              Cancel
            </Button>
          </div>
        </ModalAction>
      </Form>
    </Modal>
  )
}

export default LinkIDPage
