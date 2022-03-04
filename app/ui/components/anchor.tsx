import type { NavLinkProps } from 'remix'
import { Link, NavLink } from 'remix'

export interface AnchorProps {
  href: string
  className?: string | NavLinkProps['className']
  prefetch?: 'intent' | 'none' | 'render'
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
  isNav?: boolean
}

export const Anchor: React.FC<AnchorProps> = ({
  href,
  className,
  prefetch,
  rel,
  target,
  children,
  isNav,
}) => {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  if (isExternal)
    return (
      <a
        href={href}
        rel={rel}
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
