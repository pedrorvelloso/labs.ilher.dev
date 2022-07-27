import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Heading } from './typograph'
import { Button } from './button'

interface ModalProps {
  isOpen: boolean
  onClose(): void
  title: string
  actions?: React.ReactNode
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  actions,
}: React.PropsWithChildren<ModalProps>) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-[60]">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="flex min-h-full w-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform bg-neutral-900 p-6 rounded-2xl">
                <Dialog.Title as={Heading} size="subtitle">
                  {title}
                </Dialog.Title>
                <div className="mt-5">{children}</div>
                {actions && <div className="mt-5">{actions}</div>}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
