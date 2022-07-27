import type { NavLinkProps } from '@remix-run/react'
import { Link, NavLink } from '@remix-run/react'
import { isExternal } from '~/utils/misc'

export interface AnchorProps {
  href: string
  className?: string | NavLinkProps['className']
  prefetch?: 'intent' | 'none' | 'render'
  isNav?: boolean
}

export const Anchor: React.FC<React.PropsWithChildren<AnchorProps>> = ({
  href,
  className,
  prefetch,
  children,
  isNav,
}) => {
  const isExternalUrl = isExternal(href)

  if (isExternalUrl)
    return (
      <a
        href={href}
        rel="noreferrer noopener"
        target="_blank"
        className={className?.toString()}
      >
        {children}
      </a>
    )

  if (isNav)
    return (
      <NavLink to={href} prefetch={prefetch} className={className}>
        {children}
      </NavLink>
    )

  return (
    <Link to={href} prefetch={prefetch} className={className?.toString()}>
      {children}
    </Link>
  )
}
