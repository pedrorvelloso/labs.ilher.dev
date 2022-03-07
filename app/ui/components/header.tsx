import { useEffect, useState } from 'react'
import { useTransition } from 'remix'

import { Drawer } from './drawer'
import { Icon } from './icon'
import { NavAnchor } from './nav-anchor'

const ICON_SIZE = 20

const Menu = ({
  onDrawer,
  className,
}: {
  onDrawer?: boolean
  className?: string
}) => {
  const classNameDrawer =
    'bg-gradient-to-tl from-neutral-900 to-neutral-800 ml-5 my-5 rounded-l-md select-none'

  return (
    <ul className={className}>
      <li>
        <NavAnchor
          href="/"
          sideAnimation={onDrawer}
          className={onDrawer ? classNameDrawer : ''}
        >
          Home
        </NavAnchor>
      </li>
      <li>
        <NavAnchor
          href="/blog"
          color="green"
          sideAnimation={onDrawer}
          className={onDrawer ? classNameDrawer : ''}
        >
          Blog
        </NavAnchor>
      </li>
      <li>
        <NavAnchor
          href="/watch"
          color="purple"
          sideAnimation={onDrawer}
          className={onDrawer ? classNameDrawer : ''}
        >
          Watch
        </NavAnchor>
      </li>
      <li>
        <NavAnchor
          href="/about"
          color="orange"
          sideAnimation={onDrawer}
          className={onDrawer ? classNameDrawer : ''}
        >
          About
        </NavAnchor>
      </li>
    </ul>
  )
}

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const transition = useTransition()

  useEffect(() => {
    if (transition.state === 'loading') setDrawerOpen(false)
  }, [transition.state])

  return (
    <>
      <div className="h-[87px] border-b border-neutral-800 z-50 relative bg-neutral-900">
        <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between h-full">
          <img
            src="/images/Icon.svg"
            alt="LABS logo"
            className="block lg:hidden"
          />
          <img
            src="/images/logo.png"
            alt="LABS logo"
            className="lg:block hidden"
          />
          <Menu className="hidden lg:flex text-neutral-400 h-full" />
          <ul className="hidden lg:flex text-neutral-400 gap-5">
            <li>
              <Icon name="twitter" size={ICON_SIZE} />
            </li>
            <li>
              <Icon name="stargazer" size={ICON_SIZE} />
            </li>
            <li>
              <Icon name="github" size={ICON_SIZE} />
            </li>
          </ul>
          <Icon
            name={drawerOpen ? 'close' : 'hamburger'}
            size={ICON_SIZE}
            className="text-neutral-400 flex lg:hidden"
            onClick={() => setDrawerOpen((prev) => !prev)}
          />
        </nav>
      </div>
      <Drawer isOpen={drawerOpen}>
        <Menu onDrawer className="text-neutral-400" />
      </Drawer>
    </>
  )
}
