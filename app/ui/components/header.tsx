import { Icon } from './icon'

const NavLink = () => (
  <div className="flex h-full items-center p-5 relative transition-colors after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:bg-indigo-600 hover:after:w-full hover:text-white">
    Home
  </div>
)

export const Header = () => {
  return (
    <div className="h-[87px] border-b border-neutral-800">
      <nav className="max-w-5xl mx-auto px-9 flex items-center justify-between h-full">
        <img src="/images/logo.png" alt="LABS logo" />
        <ul className="flex text-neutral-400 h-full">
          <li>
            <NavLink />
          </li>
          <li>
            <NavLink />
          </li>
          <li>
            <NavLink />
          </li>
          <li>
            <NavLink />
          </li>
        </ul>
        <ul className="flex text-neutral-400 gap-5">
          <li>
            <Icon name="twitter" />
          </li>
          <li>
            <Icon name="stargazer" />
          </li>
          <li>
            <Icon name="github" />
          </li>
        </ul>
      </nav>
    </div>
  )
}
