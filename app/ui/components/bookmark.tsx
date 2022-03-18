import { BoxAnchor } from './box-anchor'
import { Icon } from './icon'

interface BookmarkProps {
  url: string
  title: string
}

export const Bookmark = ({ title, url }: BookmarkProps) => {
  const origin = new URL(url).origin

  return (
    <BoxAnchor
      href={url}
      inline
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center justify-between"
    >
      <div className="flex flex-col gap-y-2 w-[85%] lg:w-fit">
        <span className="text-neutral-200 group-hover:text-neutral-800">
          {title}
        </span>
        <span className="text-neutral-400 group-hover:text-neutral-700">
          {origin}/
        </span>
      </div>
      <Icon
        name="arrowUpRight"
        className="text-lg text-neutral-400 group-hover:text-neutral-700"
      />
    </BoxAnchor>
  )
}
