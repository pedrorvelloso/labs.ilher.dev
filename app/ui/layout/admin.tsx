import { adminMenuList } from '~/utils/menu'

import { Header } from '../compositions/header'

export const AdminLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header routes={adminMenuList} />
      <div className="my-20 flex-auto">{children}</div>
    </div>
  )
}
