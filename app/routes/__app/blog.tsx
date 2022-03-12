import { useLoaderData } from 'remix'
import { getHeaders } from '~/utils/headers'

import { Articles } from '~/ui/compositions/articles'

import { LoaderIndexData, loader as indexLoader } from './index'

export const headers = getHeaders

export const loader = indexLoader

const Blog = () => {
  const data = useLoaderData<LoaderIndexData>()

  return (
    <div className="my-28">
      <Articles title="Articles" articles={data.posts} inline />
    </div>
  )
}

export default Blog
