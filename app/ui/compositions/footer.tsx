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
        <div className="flex flex-col gap-y-12 lg:gap-y-24 pt-14 pb-16">
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
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end gap-y-8">
            <Text className="text-neutral-400 lg:text-base" size="sm">
              All rights reserved © Pedro R. Santos {new Date().getFullYear()}
            </Text>
            <div className="select-none cursor-pointer">
              <Anchor href="https://remix.run/" target="_blank">
                <Text size="sm" className="text-white">
                  Built with
                </Text>
                <img
                  src="/images/remix-dark.svg"
                  alt="Remix logo"
                  className="h-6"
                  height="24"
                  width="96"
                />
              </Anchor>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
