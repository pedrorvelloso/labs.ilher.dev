import { useEffect, useState } from 'react'
import { useTransition } from '@remix-run/react'
import { motion, type Variants } from 'framer-motion'
import { useKBar } from 'kbar'

import { menuList } from '~/utils/menu'

import { Drawer } from '../components/drawer'
import { Icon } from '../components/icon'
import { NavAnchor } from '../components/nav-anchor'

const ICON_SIZE = 20

const list: Variants = {
  initial: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  initial: { opacity: 0, x: 400 },
  visible: { opacity: 1, x: 0, transition: { bounce: false } },
}

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
    <motion.ul
      variants={list}
      initial={onDrawer ? 'initial' : 'visible'}
      animate="visible"
      className={className}
    >
      {menuList.map((menuItem) => (
        <motion.li variants={item} key={menuItem.href}>
          <NavAnchor
            href={menuItem.href}
            color={menuItem.color}
            sideAnimation={onDrawer}
            className={onDrawer ? classNameDrawer : ''}
          >
            {menuItem.name}
          </NavAnchor>
        </motion.li>
      ))}
    </motion.ul>
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
