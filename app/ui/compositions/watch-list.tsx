import type { GetWatchQuery } from '~/generated/graphql'

import { WatchBox } from '../components/watch-box'
import { ListSection } from './list-section'

interface WatchListProps {
  title?: string
  links: GetWatchQuery['links']
  className?: string
}

export const WatchList = ({
  title = 'Watch these amazing content!',
  links,
  className,
}: WatchListProps) => {
  return (
    <ListSection title={title} className={className}>
      {links.map((link) => (
        <WatchBox
          key={link.url}
          title={link.title}
          url={link.url}
          content={link.content || ''}
        />
      ))}
    </ListSection>
  )
}
