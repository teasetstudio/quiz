import Button from './Button'
import ModalWrapper from './Modal_Wrapper'

const ModalAlert = ({ isOpen, closeModal, children }) => {
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal} className='p-4 mx-4 max-w-sm'>
      {children}

      <Button variant={2} className='mt-2' bgClass='bg-yellow-500' onClick={closeModal}>Закрыть</Button>
    </ModalWrapper>
  )
}

export default ModalAlert
