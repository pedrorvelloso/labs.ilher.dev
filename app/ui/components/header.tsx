import { Icon } from './icon'
import { NavAnchor } from './nav-anchor'

const ICON_SIZE = 20

export const Header = () => {
  return (
    <div className="h-[87px] border-b border-neutral-800">
      <nav className="max-w-5xl mx-auto px-9 flex items-center justify-between h-full">
        <img src="/images/Icon.svg" alt="LABS logo" className="block lg:hidden" />
        <img src="/images/logo.png" alt="LABS logo" className="lg:block hidden" />
        <ul className="hidden lg:flex text-neutral-400 h-full">
          <li>
            <NavAnchor href="/">Home</NavAnchor>
          </li>
          <li>
            <NavAnchor href="/blog" color="green">
              Blog
            </NavAnchor>
          </li>
          <li>
            <NavAnchor href="/watch" color="purple">
              Watch
            </NavAnchor>
          </li>
          <li>
            <NavAnchor href="/about" color="orange">
              About
            </NavAnchor>
          </li>
        </ul>
        <ul className="hidden lg:flex text-neutral-400 gap-5">
          <li>
            <Icon name="twitter" size={ICON_SIZE} />
          </li>
          <li>
            <Icon name="stargazer" size={ICON_SIZE} />
          </li>
          <li>
            <Icon name="github" size={ICON_SIZE} />
          </li>
        </ul>
        <Icon name="hamburger" size={ICON_SIZE} className="text-neutral-400 flex lg:hidden" />
      </nav>
    </div>
  )
}
