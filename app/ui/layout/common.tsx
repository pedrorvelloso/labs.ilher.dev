import { Header } from '../compositions/header'

export const CommonLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
