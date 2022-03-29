import { Grid } from '../components/grid'
import { Icon } from '../components/icon'
import { Text, Heading } from '../components/typograph'

export const Hero = () => {
  return (
    <Grid
      as="section"
      className="pt-16 lg:pt-0 lg:mb-0 lg:min-h-index-hero gap-y-5 md:gap-y-10"
    >
      <div className="col-span-full md:col-start-5 md:col-span-4 lg:col-start-8 lg:col-span-5 flex justify-center md:justify-end items-center">
        <img
          src="/images/avatar.png"
          alt="Pedro Reis"
          className="rounded-full h-48 md:h-64 lg:h-auto mb-16 lg:mb-0"
        />
      </div>
      <div className="md:row-start-1 col-span-full md:col-span-4 lg:col-span-5 text-neutral-300 flex flex-col lg:justify-center">
        <Text className="text-sm flex items-center gap-x-1 text-neutral-400 mb-2">
          <Icon name="pin" className="text-red-500 animate-bounce" /> Brasília,
          Brazil
        </Text>
        <Heading className="text-neutral-200">Hello</Heading>
        <Heading className="text-neutral-200">
          I&apos;m <span className="text-indigo-400">Pedro Reis</span>
        </Heading>
        <Text>Senior Frontend Developer at South System</Text>
      </div>
    </Grid>
  )
}
