import clsx from 'clsx'
import { PolymorphicComponentProps } from '~/types/polymorphic'

interface TextOwnProps {
  className?: string
  children?: React.ReactNode
  overrideColor?: boolean
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
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
  size = 'base',
  ...otherProps
}: TextProps<Component>) => {
  const Tag = as || 'p'

  return (
    <Tag
      className={clsx(className, {
        'text-neutral-300': !overrideColor,
        'text-lg': size === 'lg',
        'text-xs': size === 'xs',
        'text-sm': size === 'lg',
        'text-base': size === 'base',
        'text-xl': size === 'xl',
      })}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}

interface HeadingOwnProps extends Omit<TextOwnProps, 'overrideColor' | 'size'> {
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
