import type { GetWatchQuery } from '~/generated/graphql'

import { WatchBox } from '../components/watch-box'
import { ListSection } from './list-section'

interface WatchListProps {
  links: GetWatchQuery['links']
  className?: string
}

export const WatchList = ({ links, className }: WatchListProps) => {
  return (
    <ListSection title="Watch these amazing content!" className={className}>
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
