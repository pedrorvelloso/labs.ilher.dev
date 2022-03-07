import clsx from 'clsx'
import { PolymorphicComponentProps } from '~/types/polymorphic'

interface GridOwnProps {
  className?: string
  children: React.ReactNode
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
}: GridProps<Component>) => {
  const Tag = as || defaultElemet

  return (
    <Tag
      className={clsx(
        'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 lg:gap-x-6',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
