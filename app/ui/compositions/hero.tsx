import { Anchor } from '../components/anchor'
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
        <Text
          overrideColor
          className="text-sm flex items-center gap-x-1 text-neutral-400 mb-2"
        >
          <Icon name="pin" className="text-red-500 animate-bounce" /> Brasília,
          Brazil
        </Text>
        <Heading className="text-neutral-200">Hello</Heading>
        <Heading className="text-neutral-200">
          I&apos;m <span className="text-indigo-400">Pedro Reis</span>
        </Heading>
        <Text className="my-4 lg:my-6">
          I&apos;m a Software Developer based in Brazil. Currently, I&apos;m
          working at an amazing place called{' '}
          <Anchor
            href="https://southsystem.com.br/"
            className="text-south-system hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            South System
          </Anchor>{' '}
          with an incredible team.
        </Text>
        <Text>
          I also love retro gaming and live streaming at Twitch! I usually do
          The Legend of Zelda: Ocarina of time speedruns at my channel. If you
          want to follow me make sure to click{' '}
          <Anchor
            href="https://twitch.tv/ilher"
            className="text-purple-400 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            this link
          </Anchor>{' '}
          😄.
        </Text>
      </div>
    </Grid>
  )
}
