import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const minMax = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const Particle: React.FC = ({ children }) => (
  <motion.span
    animate={{
      y: [
        -Math.ceil(Math.random() * 40),
        -Math.ceil(Math.random() * 500),
        Math.ceil(Math.random() * 500),
      ],
      x: minMax(100, 350) * (Math.round(Math.random()) ? 1 : -1),
      opacity: 0,
      transition: { duration: 1.5 },
    }}
    exit={{ opacity: 0 }}
    className="absolute z-10 scale-50"
  >
    {children}
  </motion.span>
)

interface ExplosionProps {
  particles: Array<string>
  particleAmount?: number
}

export const Explosion = ({
  particles,
  particleAmount = 10,
}: ExplosionProps) => {
  const arrayValue = Array.from({ length: particleAmount }, (_, i) => i + 1)
  const [isExploding, setExploding] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setExploding(false), 1800)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isExploding &&
        particles.map((particle) =>
          arrayValue.map((v) => (
            <Particle key={`${particle}-${v}`}>{particle}</Particle>
          )),
        )}
    </AnimatePresence>
  )
}
