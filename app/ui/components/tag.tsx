import clsx from 'clsx'
import React from 'react'

import { Text } from './typograph'

interface TagProps {
  className?: string
}

export const Tag = ({
  className,
  children,
}: React.PropsWithChildren<TagProps>) => {
  return (
    <Text
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
