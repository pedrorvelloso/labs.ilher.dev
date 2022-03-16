import clsx from 'clsx'

import { Anchor, AnchorProps } from './anchor'

interface NavAnchorProps extends Omit<AnchorProps, 'isNav'> {
  color?: 'indigo' | 'green' | 'orange' | 'purple'
  sideAnimation?: boolean
}

export const NavAnchor: React.FC<NavAnchorProps> = ({
  children,
  color = 'indigo',
  sideAnimation,
  className,
  ...props
}) => (
  <Anchor
    {...props}
    isNav
    className={({ isActive }) =>
      clsx(
        'flex h-full items-center py-5 relative transition-colors after:absolute after:transition-all',
        {
          'after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:right-0 justify-center w-20':
            !sideAnimation,
          'hover:after:w-full hover:text-white': !sideAnimation && !isActive,
          'after:w-full text-white font-bold': !sideAnimation && isActive,
          // side bar
          'after:h-0 after:w-1 after:bottom-0 after:right-0 px-5':
            sideAnimation,
          // side bar hover w/o active
          'hover:after:h-full hover:text-white': sideAnimation && !isActive,
          // side bar active
          'after:h-full text-white': sideAnimation && isActive,
          // color scheme
          'after:bg-indigo-600': color === 'indigo',
          'after:bg-green-600': color === 'green',
          'after:bg-orange-600': color === 'orange',
          'after:bg-purple-600': color === 'purple',
        },
        className,
      )
    }
  >
    {children}
  </Anchor>
)
