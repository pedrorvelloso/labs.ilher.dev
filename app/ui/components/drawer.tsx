import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface DrawerProps {
  isOpen?: boolean
}

export const Drawer: React.FC<DrawerProps> = ({ children, isOpen }) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]

    if (isOpen) {
      body.style.overflowY = 'hidden'
      window.scrollTo(0, 0)
    } else {
      body.style.overflowY = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            bounce: false,
            duration: 0.15,
          }}
          className="fixed top-0 pt-[87px] h-screen w-screen visible lg:invisible bg-neutral-900 z-20 border-b border-neutral-800"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
