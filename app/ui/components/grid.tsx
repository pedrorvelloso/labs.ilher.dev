import clsx from 'clsx'
import { PolymorphicComponentProps } from '~/types/polymorphic'

interface GridOwnProps {
  className?: string
  children: React.ReactNode
  featured?: boolean
}

type GridProps<Component extends React.ElementType> = PolymorphicComponentProps<
  Component,
  GridOwnProps
>

const defaultElemet = 'div'

export const Grid = <
  Component extends React.ElementType = typeof defaultElemet,
>({
  children,
  as,
  className,
  featured = false,
}: GridProps<Component>) => {
  const Tag = as || defaultElemet

  return (
    <Tag
      className={clsx(
        'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 lg:gap-x-6',
        {
          'max-w-5xl mx-auto px-9 md:px-16': !featured,
          'max-w-5xl mx-auto px-6': featured,
        },
        className,
      )}
    >
      {children}
    </Tag>
  )
}
