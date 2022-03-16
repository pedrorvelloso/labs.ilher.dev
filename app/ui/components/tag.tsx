import clsx from 'clsx'

import { Text } from './typograph'

interface TagProps {
  className?: string
}

export const Tag: React.FC<TagProps> = ({ className, children }) => {
  return (
    <Text
      overrideColor
      size="xs"
      className={clsx(
        className,
        'bg-neutral-700 w-fit px-4 py-1 uppercase rounded-lg text-neutral-300 flex items-center',
      )}
    >
      {children}
    </Text>
  )
}
