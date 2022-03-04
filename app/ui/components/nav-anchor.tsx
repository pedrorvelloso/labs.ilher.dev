import clsx from 'clsx'

import { Anchor, AnchorProps } from './anchor'

interface NavAnchorProps extends Omit<AnchorProps, 'isNav'> {
  color?: 'indigo' | 'green' | 'orange' | 'purple'
}

export const NavAnchor: React.FC<NavAnchorProps> = ({
  children,
  color = 'indigo',
  ...props
}) => (
  <Anchor
    {...props}
    isNav
    className={({ isActive }) =>
      clsx(
        'flex h-full items-center py-5 w-20 justify-center relative transition-colors after:absolute after:h-[2px] after:bottom-0 after:left-0 after:right-0 after:transition-all',
        {
          'after:w-0 hover:after:w-full hover:text-white hover:font-bold':
            !isActive,
          'after:w-full text-white font-bold': isActive,
          'after:bg-indigo-600': color === 'indigo',
          'after:bg-green-600': color === 'green',
          'after:bg-orange-600': color === 'orange',
          'after:bg-purple-600': color === 'purple',
        },
      )
    }
    // className="flex h-full items-center p-5 relative transition-colors after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:bg-indigo-600 hover:after:w-full hover:text-white"
  >
    {children}
  </Anchor>
)
