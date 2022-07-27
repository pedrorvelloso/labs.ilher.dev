import clsx from 'clsx'
import { PolymorphicComponentProps } from '~/types/polymorphic'

interface GridOwnProps {
  className?: string
  children?: React.ReactNode
  onlyGrid?: boolean
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
  onlyGrid = false,
  ...otherProps
}: GridProps<Component>) => {
  const Tag = as || defaultElemet

  return (
    <Tag
      className={clsx(
        'grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 lg:gap-x-8',
        {
          'max-w-3xl mx-auto px-8': !onlyGrid,
        },
        className,
      )}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}
