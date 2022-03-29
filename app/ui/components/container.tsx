import clsx from 'clsx'
import { PolymorphicComponentProps } from '~/types/polymorphic'

interface ContainerOwnProps {
  className?: string
  children?: React.ReactNode
}

type ContainerProps<Component extends React.ElementType> =
  PolymorphicComponentProps<Component, ContainerOwnProps>

const defaultElemet = 'div'

export const Container = <
  Component extends React.ElementType = typeof defaultElemet,
>({
  as,
  children,
  className,
  ...otherProps
}: ContainerProps<Component>) => {
  const Tag = as || defaultElemet

  return (
    <Tag className={clsx(className, 'max-w-3xl mx-auto px-8')} {...otherProps}>
      {children}
    </Tag>
  )
}
