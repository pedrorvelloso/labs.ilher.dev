import { useEffect, useState } from 'react'
import { useTransition } from 'remix'
import { useKBar } from 'kbar'

import { Drawer } from '../components/drawer'
import { Icon } from '../components/icon'
import { NavAnchor } from '../components/nav-anchor'

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
          href="/articles"
          color="green"
          sideAnimation={onDrawer}
          className={onDrawer ? classNameDrawer : ''}
        >
          Articles
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
  const kbar = useKBar()

  useEffect(() => {
    if (transition.state === 'loading') setDrawerOpen(false)
  }, [transition.state])

  return (
    <>
      <div className="h-[87px] border-b border-neutral-800 z-50 relative bg-neutral-900">
        <nav className="max-w-3xl mx-auto px-8 flex items-center justify-between h-full">
          <Menu className="hidden lg:flex text-neutral-400 h-full" />
          <button
            className="py-3 pr-3"
            onClick={() => setDrawerOpen((prev) => !prev)}
          >
            <Icon
              name={drawerOpen ? 'close' : 'hamburger'}
              size={ICON_SIZE}
              className="text-neutral-400 flex lg:hidden"
            />
          </button>
          <button
            className="py-3 pl-3 text-neutral-400 hover:text-neutral-300 transition-colors"
            onClick={kbar.query.toggle}
          >
            <Icon name="command" size={ICON_SIZE} />
          </button>
        </nav>
      </div>
      <Drawer isOpen={drawerOpen}>
        <Menu onDrawer className="text-neutral-400" />
      </Drawer>
    </>
  )
}
