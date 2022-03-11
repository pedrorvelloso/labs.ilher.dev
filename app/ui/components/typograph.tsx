import clsx from 'clsx'
import { PolymorphicComponentProps } from '~/types/polymorphic'

interface TextOwnProps {
  className?: string
  children?: React.ReactNode
  overrideColor?: boolean
}

type TextProps<Component extends React.ElementType> = PolymorphicComponentProps<
  Component,
  TextOwnProps
>

// Should be polymorphic for animation purposes
export const Text = <Component extends React.ElementType>({
  as,
  className,
  children,
  overrideColor = false,
  ...otherProps
}: TextProps<Component>) => {
  const Tag = as || 'p'

  return (
    <Tag
      className={clsx(className, {
        'text-grey-300': !overrideColor,
      })}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}

interface HeadingOwnProps extends Omit<TextOwnProps, 'overrideColor'> {
  size?: 'title' | 'subtitle'
}

type HeadingProps<Component extends React.ElementType> =
  PolymorphicComponentProps<Component, HeadingOwnProps>

export const Heading = <Component extends React.ElementType>({
  as,
  className,
  children,
  size = 'title',
  ...otherProps
}: HeadingProps<Component>) => {
  const Tag = as || 'h1'

  return (
    <Tag
      className={clsx(className, {
        'text-2xl lg:text-4xl': size === 'title',
        'text-xl lg:text-2xl': size === 'subtitle',
      })}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}
