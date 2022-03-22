import clsx from 'clsx'

import { Grid } from '../components/grid'
import { Heading, Text } from '../components/typograph'

interface ListSectionProps {
  title: string
  subtitle?: React.ReactNode
  className?: string
}

export const ListSection: React.FC<ListSectionProps> = ({
  title,
  subtitle,
  children,
  className,
}) => {
  return (
    <>
      <Heading
        size="subtitle"
        as="h2"
        className={clsx('max-w-3xl mx-auto px-8 text-neutral-200 font-bold', {
          'mb-6': !subtitle,
          'mb-2': !!subtitle,
        })}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          overrideColor
          className="mb-6 max-w-3xl mx-auto px-8 text-neutral-500"
        >
          {subtitle}
        </Text>
      )}
      <Grid
        as="section"
        className={clsx('text-neutral-300 gap-y-10', className)}
      >
        {children}
      </Grid>
    </>
  )
}
