import { NavAnchorProps } from '~/ui/components/nav-anchor'

export const menuList: Array<{
  name: string
  href: string
  color?: NavAnchorProps['color']
}> = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Articles',
    href: '/articles',
    color: 'green',
  },
  {
    name: 'Bookmarks',
    href: '/bookmarks',
    color: 'orange',
  },
  {
    name: 'Watch',
    href: '/watch',
    color: 'purple',
  },
]
