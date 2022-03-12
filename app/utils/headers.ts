import type { HeadersFunction } from 'remix'

export const getHeaders: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers()
  // useful headers to reuse in doc caching
  const usefulHeaders = ['Cache-Control']

  for (const headerName of usefulHeaders) {
    if (loaderHeaders.has(headerName)) {
      headers.set(headerName, loaderHeaders.get(headerName)!)
    }
  }

  return headers
}

const SECOND_PER_YEAR = 3.154e7

export const Swr = {
  'Cache-Control': `s-maxage=1, stale-while-revalidate=${SECOND_PER_YEAR}`,
}
