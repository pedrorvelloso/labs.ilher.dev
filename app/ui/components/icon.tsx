import { IconBaseProps } from 'react-icons'
import { FaTwitter, FaGithub, FaStar, FaHamburger } from 'react-icons/fa'

const iconMap = {
  twitter: FaTwitter,
  github: FaGithub,
  stargazer: FaStar,
  hamburger: FaHamburger
}

interface IconProps extends IconBaseProps {
  name: keyof typeof iconMap
}

export const Icon = ({ name, ...iconProps }: IconProps) => {
  const IconTag = iconMap[name]

  return <IconTag {...iconProps} />
}
