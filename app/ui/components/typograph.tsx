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
