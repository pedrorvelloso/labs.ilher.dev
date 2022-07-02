import { useEffect } from 'react'
import { Portal } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

interface DrawerProps {
  isOpen?: boolean
}

export const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  children,
  isOpen,
}) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]

    if (isOpen) {
      body.classList.add('fixed', 'overflow-hidden', 'right-0', 'left-0')
      window.scrollTo(0, 0)
    } else {
      body.classList.remove('fixed', 'overflow-hidden', 'right-0', 'left-0')
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal
          as={motion.div}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            bounce: false,
            duration: 0.15,
          }}
          className="overflow-x-hidden fixed top-0 pt-[87px] pb-20 h-screen w-screen visible lg:invisible bg-neutral-900 z-20 border-b border-neutral-800 overflow-auto"
        >
          {children}
        </Portal>
      )}
    </AnimatePresence>
  )
}
