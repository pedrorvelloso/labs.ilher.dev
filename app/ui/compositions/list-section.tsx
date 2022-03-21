import clsx from 'clsx'

import { Grid } from '../components/grid'
import { Heading } from '../components/typograph'

interface ListSectionProps {
  title: string
  className?: string
}

export const ListSection: React.FC<ListSectionProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <>
      <Heading
        size="subtitle"
        as="h2"
        className="mb-6 max-w-3xl mx-auto px-8 text-neutral-200 font-bold"
      >
        {title}
      </Heading>
      <Grid
        as="section"
        className={clsx('text-neutral-300 gap-y-10', className)}
      >
        {children}
      </Grid>
    </>
  )
}
