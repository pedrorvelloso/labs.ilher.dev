import { useNavigate } from 'remix'
import { useEffect } from 'react'
import { KBarProvider, useKBar } from 'kbar'

import { menuList, socials } from '~/utils/menu'

import { CommandBar } from './command-bar'

export const KBarActions = () => {
  const navigate = useNavigate()
  const kbar = useKBar()

  useEffect(() => {
    kbar.query.registerActions([
      ...menuList.map((menu) => ({
        id: menu.name,
        name: menu.name,
        shortcut: menu.shortcut,
        section: menu.section,
        keywords: menu.keywords,
        icon: menu.icon,
        perform: () => navigate(menu.href),
      })),
      ...socials.map((social) => ({
        id: social.name,
        name: social.name,
        section: social.section,
        keywords: social.keywords,
        icon: social.icon,
        perform: () => window.open(social.href, '_blank'),
      })),
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
