import { menuList, socials } from '~/utils/menu'

import { Container } from '../components/container'
import { Grid } from '../components/grid'
import { Anchor } from '../components/anchor'
import { Text } from '../components/typograph'
import { ConvertKitInputForm } from '../components/convert-kit/input-form'

export const Footer = () => {
  return (
    <>
      <hr className="border-t border-neutral-800" />
      <Container as="footer" className="w-full">
        <div className="col-span-full pt-14 pb-16">
          <Grid onlyGrid className="gap-y-4">
            <ul className="col-span-full lg:col-span-3 flex flex-col gap-y-4">
              <li className="font-bold">Website</li>
              {menuList.map(({ name, href }) => (
                <li key={name}>
                  <Anchor
                    href={href}
                    className="text-neutral-400/90 hover:text-neutral-300 transition-colors"
                  >
                    {name}
                  </Anchor>
                </li>
              ))}
            </ul>
            <ul className="col-span-full lg:col-span-3 lg:col-start-4 flex flex-col gap-y-4">
              <li className="font-bold mt-4 lg:mt-0">Socials</li>
              {socials.map(({ name, href }) => (
                <li key={name}>
                  <Anchor
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-neutral-400/90 hover:text-neutral-300 transition-colors"
                  >
                    {name}
                  </Anchor>
                </li>
              ))}
            </ul>
            <div className="row-start-1 col-span-full lg:col-span-6 lg:col-start-7 flex flex-col gap-y-4 mb-4 lg:mb-0">
              <Text className="font-bold">Stay up to date</Text>
              <Text className="text-neutral-400">
                Subscribe to the newsletter to stay up to date with articles and
                much more!
              </Text>
              <ConvertKitInputForm formId="3034146" />
            </div>
          </Grid>
        </div>
      </Container>
    </>
  )
}
