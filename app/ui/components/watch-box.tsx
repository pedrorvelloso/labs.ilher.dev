import { BoxAnchor } from './box-anchor'
import { Icon } from './icon'

interface WatchBoxProps {
  url: string
  title: string
  content: string
}

export const WatchBox = ({ content, title, url }: WatchBoxProps) => {
  return (
    <BoxAnchor
      href={url}
      inline
      target="_blank"
      className="flex items-center justify-between"
    >
      <div className="flex flex-col gap-y-2 w-[85%] lg:w-fit">
        <span className="text-neutral-200 group-hover:text-neutral-800 flex gap-x-2 items-center">
          {title} <Icon name={url.includes('twitch') ? 'twitch' : 'watch'} />
        </span>
        <span className="text-neutral-400 group-hover:text-neutral-700">
          {content}
        </span>
      </div>
      <Icon
        name="arrowUpRight"
        className="text-lg text-neutral-400 group-hover:text-neutral-700"
      />
    </BoxAnchor>
  )
}
