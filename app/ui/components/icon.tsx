import { IconBaseProps } from 'react-icons'
import { FaTwitter, FaGithub, FaStar } from 'react-icons/fa'

const iconMap = {
  twitter: FaTwitter,
  github: FaGithub,
  stargazer: FaStar,
}

interface IconProps extends IconBaseProps {
  name: keyof typeof iconMap
}

export const Icon = ({ name, ...iconProps }: IconProps) => {
  const IconTag = iconMap[name]

  return <IconTag {...iconProps} />
}
