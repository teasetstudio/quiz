import { useRef, useState } from 'react'
import Button from './Button'
import ModalWrapper from './Modal_Wrapper'

const ModalSendWithName = ({ isOpen, closeModal, title, onSend }) => {
  const [error, setError] = useState(false)
  const inputRef = useRef(null)

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal} className='p-4 mx-4 max-w-sm'>
        <p className='text-green-500 uppercase font-black'>{title}</p>
        <p>Введите ваше имя и отправьте результат на проверку:</p>
        {error && (
          <p className='text-red-500 font-bold mt-4 -mb-2'>Введите Ваше имя</p>
        )}
        <input
          ref={inputRef}
          className="my-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          placeholder="Ваше Имя"
          onChange={() => {
            if (inputRef.current.value.length > 0) {
              setError(false)
            } else {
              setError(true)
            }
          }}
        />
        
        <Button variant={2} className='mt-2' bgClass='bg-green-500' onClick={() => {
          if (inputRef.current.value.length > 0) {
            setError(false)
            closeModal()
            onSend(inputRef.current.value)
          } else {
            setError(true)
          }
        }}>Отправить</Button>
      </ModalWrapper>
  )
}

export default ModalSendWithName
