import { menuList, socials } from '~/utils/menu'

import { Container } from '../components/container'
import { Grid } from '../components/grid'
import { Anchor } from '../components/anchor'

export const Footer = () => {
  return (
    <>
      <hr className="border-t border-neutral-800" />
      <Container as="footer" className="w-full">
        <div className="col-span-full pt-14 pb-16">
          <Grid onlyGrid className="gap-y-4">
            <ul className="col-span-full lg:col-span-4 flex flex-col gap-y-4">
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
            <ul className="col-span-full lg:col-span-4 lg:col-start-5 flex flex-col gap-y-4">
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
          </Grid>
        </div>
      </Container>
    </>
  )
}
