import type { LoaderFunction } from 'remix'
import { redirect } from 'remix'
import { getArticle } from '~/server/graphcms.server'

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url)
  const locale = params['*']

  if (locale?.includes('/')) {
    return redirect(`${url.origin}/articles/${params.slug}`)
  }

  const { data } = await getArticle(params.slug as string, locale)

  console.log(data)

  return []
}

const ArticlePage = () => {
  return <div>ArticlePage</div>
}

export default ArticlePage
