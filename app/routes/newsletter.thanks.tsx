import { routes } from '~/utils/menu'

import { Anchor } from '~/ui/components/anchor'
import { Explosion } from '~/ui/components/explosion'
import { Heading, Text } from '~/ui/components/typograph'
import { Icon } from '~/ui/components/icon'

const NewsletterThanksPage = () => {
  return (
    <div className="h-screen relative overflow-hidden flex flex-col items-center justify-center gap-y-4">
      <img
        src="/images/avatar.png"
        alt="Pedro Reis"
        className="rounded-full w-[80px] md:w-[120px] md:mb-0"
      />
      <Explosion particles={['🎉', '🎈']} />
      <div className="text-center">
        <Heading className="font-bold">You&apos;re awesome!</Heading>
        <Text>You&apos;re officially subscribed to my newsletter!</Text>
      </div>
      <Anchor
        href={routes.home}
        className="col-span-full flex items-center gap-x-2 text-neutral-500 hover:text-neutral-300 transition-colors"
      >
        <Icon name="arrowRight" className="rotate-180" /> Back to website
      </Anchor>
    </div>
  )
}

export default NewsletterThanksPage
