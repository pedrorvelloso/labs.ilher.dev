import { Anchor } from '../components/anchor'
import { Text } from '../components/typograph'

export const About = () => {
  return (
    <>
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
        I also love retro gaming and live streaming at Twitch! I usually do The
        Legend of Zelda: Ocarina of time speedruns at my channel. If you want to
        follow me make sure to click{' '}
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
    </>
  )
}
