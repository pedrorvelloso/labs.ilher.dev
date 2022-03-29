import { Icon } from '~/ui/components/icon'
import { NavAnchorProps } from '~/ui/components/nav-anchor'

enum Section {
  NAVIGATION = 'Navigation',
  SOCIALS = 'Socials',
}

interface CommonMenuItem {
  name: string
  href: string
  icon: React.ReactElement
  shortcut?: string[]
  keywords?: string
  section: Section
}

export const routes = {
  home: '/',
  articles: '/articles',
  bookmarks: '/bookmarks',
  watch: '/watch',
}

export const menuList: Array<
  CommonMenuItem & {
    color?: NavAnchorProps['color']
  }
> = [
  {
    name: 'Home',
    href: routes.home,
    icon: <Icon name="home" />,
    shortcut: ['g', 'h'],
    keywords: 'home',
    section: Section.NAVIGATION,
  },
  {
    name: 'Articles',
    href: routes.articles,
    color: 'green',
    icon: <Icon name="pencil" />,
    shortcut: ['g', 'a'],
    keywords: 'writing words',
    section: Section.NAVIGATION,
  },
  {
    name: 'Bookmarks',
    href: routes.bookmarks,
    color: 'orange',
    icon: <Icon name="bookmark" />,
    shortcut: ['g', 'b'],
    keywords: 'bookmarks remember',
    section: Section.NAVIGATION,
  },
  {
    name: 'Watch',
    href: routes.watch,
    color: 'purple',
    icon: <Icon name="watch" />,
    shortcut: ['g', 'w'],
    keywords: 'watch streams live coding',
    section: Section.NAVIGATION,
  },
]

export const socials: Array<CommonMenuItem> = [
  {
    name: 'GitHub',
    href: 'https://github.com/pedrorvelloso',
    icon: <Icon name="github" />,
    keywords: 'git code hub',
    section: Section.SOCIALS,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ilher',
    icon: <Icon name="twitter" />,
    keywords: 'tweet twitter',
    section: Section.SOCIALS,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/pedro-reis-043b30163/',
    icon: <Icon name="linkedin" />,
    keywords: 'linkedin cv',
    section: Section.SOCIALS,
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/ilher',
    icon: <Icon name="twitch" />,
    keywords: 'twitch live livestream',
    section: Section.SOCIALS,
  },
]
