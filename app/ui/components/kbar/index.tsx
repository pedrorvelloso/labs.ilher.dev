import { useNavigate } from 'remix'
import { KBarProvider, useKBar } from 'kbar'

import { Icon } from '../icon'
import { CommandBar } from './command-bar'
import { useEffect } from 'react'

export const KBarActions = () => {
  const navigate = useNavigate()
  const kbar = useKBar()

  useEffect(() => {
    kbar.query.registerActions([
      {
        id: 'home',
        name: 'Home',
        shortcut: ['g', 'h'],
        section: 'Navigation',
        keywords: 'home',
        icon: <Icon name="home" />,
        perform: () => navigate('/'),
      },
      {
        id: 'articles',
        name: 'Articles',
        shortcut: ['g', 'a'],
        section: 'Navigation',
        keywords: 'writing words',
        icon: <Icon name="pencil" />,
        perform: () => navigate('/articles'),
      },
      {
        id: 'watch',
        name: 'Watch',
        shortcut: ['g', 'w'],
        section: 'Navigation',
        keywords: 'watch streams live coding',
        icon: <Icon name="watch" />,
        perform: () => navigate('/'),
      },
      {
        id: 'github',
        name: 'Github',
        section: 'Socials',
        keywords: 'git code hub',
        icon: <Icon name="github" />,
        perform: () => window.open('https://github.com/pedrorvelloso'),
      },
      {
        id: 'twitter',
        name: 'Twitter',
        section: 'Socials',
        keywords: 'tweet twitter',
        icon: <Icon name="twitter" />,
        perform: () => window.open('https://twitter.com/ilher'),
      },
      {
        id: 'twitch',
        name: 'Twitch',
        section: 'Socials',
        keywords: 'twitch live livestream',
        icon: <Icon name="twitch" />,
        perform: () => window.open('https://twitch.tv/ilher'),
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export const KBarAppProvider: React.FC = ({ children }) => {
  return (
    <KBarProvider
      actions={[]}
      options={{
        animations: {
          enterMs: 200,
          exitMs: 100,
        },
      }}
    >
      <KBarActions />
      <CommandBar />
      {children}
    </KBarProvider>
  )
}
