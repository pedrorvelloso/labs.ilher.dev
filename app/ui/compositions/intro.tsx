import { Grid } from '../components/grid'
import { Heading, Text } from '../components/typograph'

export const Intro = () => {
  return (
    <Grid className="mb-12 gap-y-6">
      <div className="row-start-2 md:row-start-1 col-span-5 lg:col-span-7">
        <Heading className="font-bold text-neutral-200">Pedro Reis</Heading>
        <Text>Senior Frontend Developer at South System</Text>
        <Text overrideColor className="text-neutral-400 mt-3">
          Creating fast and cool experiences. Posting about web development,
          Tailwind and React / Remix
        </Text>
      </div>
      <div className="row-start-1 col-span-1 md:col-span-2 lg:col-span-4 col-start-1 md:col-start-7 lg:col-start-9 md:justify-self-end">
        <img
          src="/images/avatar.png"
          alt="Pedro Reis"
          className="rounded-full w-[80px] md:w-[120px] md:mb-0 grayscale"
        />
      </div>
    </Grid>
  )
}
