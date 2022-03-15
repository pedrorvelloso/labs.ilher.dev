import { Grid } from '../components/grid'
import { Heading, Text } from '../components/typograph'

export const Intro = () => {
  return (
    <Grid className="mb-12">
      <div className="col-span-6">
        <Heading className="font-bold text-neutral-200">Pedro Reis</Heading>
        <Text>Senior Frontend Developer at South System</Text>
        <Text overrideColor className="text-neutral-400 mt-3">
          Creating fast and cool experiences. Posting about web development,
          Tailwind and React / Remix
        </Text>
      </div>
    </Grid>
  )
}
