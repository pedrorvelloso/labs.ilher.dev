import { IconBaseProps } from 'react-icons'

import {
  FaTwitter,
  FaGithub,
  FaStar,
  FaBars,
  FaTimes,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { SiTypescript } from 'react-icons/si'

const iconMap = {
  twitter: FaTwitter,
  github: FaGithub,
  stargazer: FaStar,
  hamburger: FaBars,
  close: FaTimes,
  pin: GoLocation,
  node: FaNodeJs,
  react: FaReact,
  typescript: SiTypescript,
}

interface IconProps extends IconBaseProps {
  name: keyof typeof iconMap
}

export const Icon = ({ name, ...iconProps }: IconProps) => {
  const IconTag = iconMap[name]

  return <IconTag {...iconProps} />
}
