import clsx from 'clsx'

import { Anchor, AnchorProps } from './anchor'

interface BoxAnchorProps extends Pick<AnchorProps, 'rel' | 'target'> {
  href: string
  inline?: boolean
  className?: string
}

export const BoxAnchor: React.FC<BoxAnchorProps> = ({
  href,
  inline,
  children,
  className,
  ...anchorProps
}) => {
  return (
    <Anchor
      href={href}
      className={clsx(
        'group transition-all relative select-none before:bg-neutral-300 before:opacity-0 hover:before:opacity-100 before:block before:absolute before:-z-10 before:transition-all before:-inset-[15px] before:rounded-lg',
        {
          'col-span-full lg:col-span-4': !inline,
          'col-span-full': inline,
        },
        className,
      )}
      {...anchorProps}
    >
      {children}
    </Anchor>
  )
}
