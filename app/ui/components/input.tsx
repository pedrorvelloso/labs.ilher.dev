import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rightContent?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ rightContent, ...inputProps }, ref) => {
    return (
      <div className="bg-neutral-800 w-full p-3 rounded-lg flex items-center justify-between text-neutral-300 gap-x-4">
        <input
          className="w-full appearance-none bg-neutral-800 outline-none placeholder:text-neutral-500"
          {...inputProps}
          ref={ref}
        />
        {rightContent}
      </div>
    )
  },
)
Input.displayName = 'Input'
