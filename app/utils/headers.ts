const SECOND_PER_YEAR = 3.154e7

export const Swr = {
  'Cache-Control': `s-maxage=1, stale-while-revalidate=${SECOND_PER_YEAR}`,
}
