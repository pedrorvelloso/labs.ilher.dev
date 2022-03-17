import {
  KBarAnimator,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar'

import { Result } from './result'

export const CommandBar: React.FC = ({ children }) => {
  return (
    <>
      <KBarPortal>
        <KBarPositioner className="fixed z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <KBarAnimator className="overflow-hidden transition-all w-screen max-w-md bg-neutral-900 rounded-lg shadow-xl">
            <KBarSearch className="pb-2 pt-4 px-6 w-full bg-transparent rounded focus:border-primary outline-none text-neutral-300" />
            <div className="relative pb-4">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </>
  )
}

const RenderResults = () => {
  const { results } = useMatches()

  return <KBarResults items={results} onRender={Result} />
}
