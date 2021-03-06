import type { LoaderFunction } from '@remix-run/node'
import { buildUrl, setConfig } from 'cloudinary-build-url'

import { getArticleTitle } from '~/server/cms/graphcms.server'

import { doubleEncode, pageTitles } from '~/utils/misc'
import { MaxAge } from '~/utils/headers'

setConfig({
  cloudName: 'ilher-dev',
})

export const loader: LoaderFunction = async ({ request }) => {
  const requestUrl = new URL(request.url)

  const type = requestUrl.searchParams.get('type')
  const from = requestUrl.searchParams.get('from')
  const locale = requestUrl.searchParams.get('locale') || 'en'

  let text = pageTitles.home

  if (type === 'website' && from)
    text = pageTitles[from as keyof typeof pageTitles] ?? pageTitles.home

  if (type === 'article' && from) {
    const result = await getArticleTitle(from, locale)

    text = result ? result.title : pageTitles.home
  }

  const url = buildUrl('social-image-labs', {
    transformations: {
      format: 'png',
      chaining: [
        {
          resize: {
            type: 'fit',
            width: 1010,
            height: 250,
          },
          gravity: 'north_west',
          overlay: `text:ibm.ttf_86:${doubleEncode(text)},co_rgb:D1D5DB`,
          position: {
            x: 95,
            y: 62,
          },
        },
      ],
    },
  })

  const socialImageCloudinary = await fetch(url)
  const imageBuffer = await socialImageCloudinary.arrayBuffer()
  return new Response(Buffer.from(imageBuffer), {
    headers: {
      'Content-Type': 'image/png',
      ...MaxAge(2419200),
    },
  })
}
