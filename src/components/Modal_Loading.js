import ModalWrapper from './Modal_Wrapper'
import Spinner from './Spinner'

const ModalLoading = ({ isOpen }) => {
  return (
    <ModalWrapper isOpen={isOpen} closeModal={() => null} className='p-4 mx-4 max-w-sm'>
      <div>
        <Spinner />
      </div>
    </ModalWrapper>
  )
}

export default ModalLoading
