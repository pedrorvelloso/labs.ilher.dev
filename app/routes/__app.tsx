import { Outlet } from 'remix'

import { CommonLayout } from '~/ui/layout/common'

const AppLayout = () => {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  )
}

export default AppLayout
