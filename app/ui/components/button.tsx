import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'ghost'
  color?: 'primary' | 'error' | 'success'
}

export const Button = ({
  children,
  variant = 'solid',
  color = 'primary',
  type = 'button',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        'inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2',
        {
          border: variant === 'outline',
          'border-neutral-200 bg-transparent text-neutral-200 hover:bg-neutral-200 hover:text-neutral-900':
            color === 'primary' && variant === 'outline',
          'border-red-200': color === 'error' && variant === 'outline',
          'border-green-200': color === 'success' && variant === 'outline',
          'border border-transparent':
            variant === 'solid' || variant === 'ghost',
          'bg-neutral-200 hover:bg-neutral-400 text-neutral-900':
            color === 'primary' && variant === 'solid',
          'bg-red-200 hover:bg-red-400 text-red-900':
            color === 'error' && variant === 'solid',
          'bg-green-200 hover:bg-green-400 text-green-900':
            color === 'success' && variant === 'solid',
        },
        {
          'bg-transparent text-red-200 hover:bg-red-200 hover:text-red-900':
            color === 'error' && (variant === 'outline' || variant === 'ghost'),
          'bg-transparent text-green-200 hover:bg-green-200 hover:text-green-900':
            color === 'success' &&
            (variant === 'outline' || variant === 'ghost'),
        },
        className,
      )}
    >
      {children}
    </button>
  )
}
