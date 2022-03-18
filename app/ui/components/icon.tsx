import { IconBaseProps } from 'react-icons'

import { FaBars, FaTimes, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  FiGithub,
  FiTwitter,
  FiStar,
  FiInstagram,
  FiCommand,
  FiTwitch,
  FiPlayCircle,
  FiArrowUpRight,
} from 'react-icons/fi'
import { GoLocation, GoHome, GoPencil } from 'react-icons/go'
import { SiTypescript } from 'react-icons/si'

const iconMap = {
  twitter: FiTwitter,
  github: FiGithub,
  stargazer: FiStar,
  hamburger: FaBars,
  close: FaTimes,
  pin: GoLocation,
  node: FaNodeJs,
  react: FaReact,
  typescript: SiTypescript,
  home: GoHome,
  pencil: GoPencil,
  instagram: FiInstagram,
  command: FiCommand,
  twitch: FiTwitch,
  watch: FiPlayCircle,
  arrowUpRight: FiArrowUpRight,
}

interface IconProps extends IconBaseProps {
  name: keyof typeof iconMap
}

export const Icon = ({ name, ...iconProps }: IconProps) => {
  const IconTag = iconMap[name]

  return <IconTag {...iconProps} />
}
