import { Outlet } from 'remix'

import { KBarAppProvider } from '~/ui/components/kbar'

import { CommonLayout } from '~/ui/layout/common'

const AppLayout = () => {
  return (
    <KBarAppProvider>
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </KBarAppProvider>
  )
}

export default AppLayout
