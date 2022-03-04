import { Icon } from './icon'
import { NavAnchor } from './nav-anchor'

export const Header = () => {
  return (
    <div className="h-[87px] border-b border-neutral-800">
      <nav className="max-w-5xl mx-auto px-9 flex items-center justify-between h-full">
        <img src="/images/logo.png" alt="LABS logo" />
        <ul className="flex text-neutral-400 h-full">
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
