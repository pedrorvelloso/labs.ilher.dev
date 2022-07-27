import { Outlet } from '@remix-run/react'

import { KBarAppProvider } from '~/ui/components/kbar'
import { AdminLayout } from '~/ui/layout/admin'

const AdmLayout = () => {
  return (
    <KBarAppProvider>
      <AdminLayout>
        <Outlet />
      </AdminLayout>
    </KBarAppProvider>
  )
}

export default AdmLayout
