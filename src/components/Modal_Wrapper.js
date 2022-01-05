import Modal from 'react-modal';

const ModalWrapper = ({ isOpen, closeModal, children, className }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
      className={`${className} relative bg-white rounded-lg`}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  )
}

export default ModalWrapper
