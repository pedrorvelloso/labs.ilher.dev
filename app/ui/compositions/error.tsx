import { motion, type Variants } from 'framer-motion'

const container: Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item: Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const Typist = ({ word, className }: { word: string; className?: string }) => {
  const letters = word.split('')

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="visible"
      className="text-center"
    >
      {letters.map((letter, idx) => (
        <motion.span
          key={`${letter}-${idx}`}
          variants={item}
          className={className}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface ErrorProps {
  code: number
  message: string
}

export const Error = ({ code, message }: ErrorProps) => {
  return (
    <div className="font-mono min-h-error h-full flex-1 flex flex-col justify-center items-center p-3">
      <Typist word={message} className="text-xl" />
      <motion.h1
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl"
      >
        {code}
      </motion.h1>
    </div>
  )
}
