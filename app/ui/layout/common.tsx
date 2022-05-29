import { Footer } from '../compositions/footer'
import { Header } from '../compositions/header'

export const CommonLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="my-20 flex-auto">{children}</div>
      <Footer />
    </div>
  )
}
