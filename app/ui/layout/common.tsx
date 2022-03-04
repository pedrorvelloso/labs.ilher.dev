import { Header } from '../components/header'

export const CommonLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
