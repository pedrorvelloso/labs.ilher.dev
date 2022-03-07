import { Grid } from '../components/grid'
import { Icon } from '../components/icon'
import { Text } from '../components/typograph'

export const Hero = () => {
  return (
    <Grid className="max-w-5xl px-9 md:px-16 mx-auto pt-16 lg:pt-0 lg:mb-0 lg:min-h-index-hero gap-y-5 md:gap-y-10">
      <div className="col-span-full md:col-start-5 md:col-span-4 lg:col-start-8 lg:col-span-5 flex justify-center lg:justify-end items-center">
        <img
          src="/images/avatar.png"
          alt="Pedro Reis"
          className="rounded-full h-48 md:h-64 lg:h-auto mb-16 lg:mb-0"
        />
      </div>
      <div className="md:row-start-1 col-span-full md:col-span-4 lg:col-span-5 text-gray-300 flex flex-col lg:justify-center">
        <Text
          overrideColor
          className="text-sm flex items-center gap-x-1 text-neutral-400 mb-2 group"
        >
          <Icon
            name="pin"
            className="text-red-500 group-hover:animate-bounce"
          />{' '}
          Brasília, Brazil
        </Text>
        <h1 className="text-2xl lg:text-4xl">Hello</h1>
        <h1 className="text-2xl lg:text-4xl">
          I&apos;m <span className="text-indigo-400">Pedro Reis</span>
        </h1>
        <Text className="my-4 lg:my-6">
          I&apos;m a Software Developer based in Brazil. Currently, I&apos;m
          working at an amazing place called South System with an incredible
          team.
        </Text>
        <Text>
          I also love retro gaming and live streaming at Twitch! I usually do
          The Legend of Zelda: Ocarina of time speedruns at my channel. If you
          want to follow me make sure to click this link 😄.
        </Text>
      </div>
    </Grid>
  )
}
