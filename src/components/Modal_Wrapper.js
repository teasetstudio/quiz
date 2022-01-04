import { Dialog } from '@headlessui/react'
import { useRef } from 'react'

const ModalWrapper = ({ isOpen, closeModal, children, className }) => {
  let completeButtonRef = useRef(null)

  return (
    <Dialog
      initialFocus={completeButtonRef}
      open={isOpen}
      onClose={closeModal}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className={`${className} relative bg-white rounded-lg mx-auto`} ref={completeButtonRef}>
          {children}
        </div>
      </div>
      
    </Dialog>
  )
}

export default ModalWrapper
