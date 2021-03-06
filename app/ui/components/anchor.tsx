import type { NavLinkProps } from '@remix-run/react'
import { Link, NavLink } from '@remix-run/react'

export interface AnchorProps {
  href: string
  className?: string | NavLinkProps['className']
  prefetch?: 'intent' | 'none' | 'render'
  target?: React.HTMLAttributeAnchorTarget
  isNav?: boolean
}

export const Anchor: React.FC<React.PropsWithChildren<AnchorProps>> = ({
  href,
  className,
  prefetch,
  target,
  children,
  isNav,
}) => {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  if (isExternal)
    return (
      <a
        href={href}
        rel={target === '_blank' ? 'noreferrer noopener' : undefined}
        target={target}
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
