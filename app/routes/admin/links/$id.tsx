import { useEffect } from 'react'

import {
  json,
  type LoaderArgs,
  type ActionArgs,
  redirect,
} from '@remix-run/node'
import {
  useLoaderData,
  useNavigate,
  Form,
  useActionData,
} from '@remix-run/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { updateLink } from '~/server/cms/graphcms.admin.server'
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
  type: z.enum(['stream', 'bookmark']),
  title: z.string().min(1),
  url: z.string().url(),
  content: z.optional(z.string()),
})

export const action = async ({ request, params }: ActionArgs) => {
  const formData = await request.formData()

  const validate = linkSchema.safeParse(Object.fromEntries(formData))

  if (!validate.success) {
    return json({ error: true })
  }

  const { id, ...data } = validate.data

  await updateLink({
    data,
    id,
  })

  return redirect(adminRoutes.links + '/' + params.id)
}

const LinkIDPage = () => {
  const data = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()

  const navigate = useNavigate()
  const {
    register,
    formState: { errors, isDirty },
    reset,
    getFieldState,
  } = useForm({
    resolver: zodResolver(linkSchema),
    mode: 'onChange',
    defaultValues: {
      title: data.link?.title,
      url: data.link?.url,
    },
  })

  useEffect(() => {
    reset({ title: data.link?.title, url: data.link?.url })
  }, [data, reset])

  return (
    <Modal
      isOpen={!!data.link}
      title={
        data.link?.type === 'stream' ? 'Edit Watch Link' : 'Edit Bookmark Link'
      }
      onClose={() => navigate(adminRoutes.links)}
    >
      <Form method="post" noValidate>
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
              {...register('title')}
            />
            <Input
              placeholder="URL"
              defaultValue={data.link?.url}
              type="url"
              {...register('url')}
            />
            {data.link?.type === 'stream' && <textarea></textarea>}
          </div>
        </ModalContent>
        <ModalAction>
          <div className="flex gap-2">
            <Button color="success" type="submit" disabled={!isDirty}>
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
