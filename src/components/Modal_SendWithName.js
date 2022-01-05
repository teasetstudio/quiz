import { useRef, useState } from 'react'
import Button from './Button'
import Input from './Input'
import ModalWrapper from './Modal_Wrapper'

const ModalSendWithName = ({ isOpen, closeModal, title, onSend }) => {
  const [error, setError] = useState(false)
  const inputValue = useRef(null)

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal} className='p-4 mx-4 max-w-sm'>
        <p className='text-green-500 uppercase font-black'>{title}</p>
        <p>Введите ваше имя и отправьте результат на проверку:</p>
        {error && (
          <p className='text-red-500 font-bold mt-4 -mb-2'>Введите Ваше имя</p>
        )}
        <Input
          placeholder="Ваше Имя"
          className='my-4'
          onChange={(value) => {
            if (value.length > 0) {
              inputValue.current = value
              setError(false)
            } else {
              inputValue.current = null
              setError(true)
            }
          }}
        />
        
        <Button variant={2}
          className='mt-2'
          bgClass='bg-green-500'
          onClick={() => {
            if (inputValue.current && inputValue.current.length > 0) {
              setError(false)
              closeModal()
              onSend(inputValue.current)
            } else {
              setError(true)
            }
          }}
        >
          Отправить
        </Button>
      </ModalWrapper>
  )
}

export default ModalSendWithName
