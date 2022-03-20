import clsx from 'clsx'

import type { GetWatchQuery } from '~/generated/graphql'

import { Grid } from '../components/grid'
import { Heading } from '../components/typograph'
import { WatchBox } from '../components/watch-box'

interface WatchListProps {
  links: GetWatchQuery['links']
  className?: string
}

export const WatchList = ({ links, className }: WatchListProps) => {
  return (
    <>
      <Heading
        size="subtitle"
        as="h2"
        className="mb-6 max-w-3xl mx-auto px-8 text-neutral-200 font-bold"
      >
        Watch these amazing content!
      </Heading>
      <Grid
        as="section"
        className={clsx('text-neutral-300 gap-y-10', className)}
      >
        {links.map((link) => (
          <WatchBox
            key={link.url}
            title={link.title}
            url={link.url}
            content={link.content || ''}
          />
        ))}
      </Grid>
    </>
  )
}
