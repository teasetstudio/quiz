import { useState } from 'react'
import Button from './Button'
import ModalAlert from './Modal_Alert'
import ModalSendWithName from './Modal_SendWithName'
import { addItem } from '../api/config'
import { RESULTS_COLL } from '../res/CollectionNames'
import ModalLoading from './Modal_Loading'

const Quiz = ({ className, quiz }) => {
  const [result, setResult] = useState(Array(quiz.items.length).fill(null))
  const [error, setError] = useState(null)
  const [isReady, setReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultSended, setResultSended] = useState(false)

  const onAnswer = (itemId, answerId) => {
    const updatedResult = [...result]
    updatedResult[itemId] = answerId
    setResult(updatedResult)
  }

  const onReady = () => {
    const isReady = result.findIndex(i => i === null)
    if (isReady === -1) {
      setReady(true)
    } else {
      setError('Вы не ответили на все вопросы.')
    }
  }

  if (resultSended) {
    return (
      <div className='mx-2 mt-5 text-center'>
        <p className='font-semibold'>Ваши ответы отправлены на проверку.</p>
        <p>Результаты будут в Воскресенье.</p>
        <p className='mt-5 text-3xl font-bold tracking-widest'>До встречи!</p>
      </div>
    )
  }

  return (
    <div className={className}>
      {quiz.items.map((i, itemId)=> (
        <div key={itemId} className='mt-5 bg-gray-200 p-2 rounded-lg relative'>
          <p className='mb-3 text-2xl font-bold'>{i.question}</p>
          <div className='absolute -top-3 right-0 bg-emerald-600 text-white px-2 rounded'>{itemId + 1}</div>

          <div className='flex flex-col space-y-1'>
            {i.answers.map((i, answerId) => (
              <button
                key={answerId}
                className={`${result[itemId] === answerId && i.isCorrect === true
                  ? 'bg-emerald-600' : result[itemId] === answerId && i.isCorrect === false
                  ? 'bg-red-500' : result[itemId] !== null && i.isCorrect === true
                  ? 'bg-emerald-900 text-white' : 'bg-gray-300' }
                  p-4 rounded transition text-left`}
                onClick={() => onAnswer(itemId, answerId)}
                disabled={result[itemId] !== null ? true : false}
              >
                {answerId + 1}. {i.text}
              </button>
            ))}
          </div>

          {i.clue && (
            <div className='mt-4'>Подсказка: {i.clue}</div>
          )}
        </div>
      ))}

      <div className='text-center my-10'>
        <p className='text-gray-500'>Ответьте на все вопросы и нажмите кнопку "Готово".</p>
        <Button variant={1} className='mt-5' onClick={onReady}>Готово</Button>
      </div>

      <ModalAlert isOpen={!!error} closeModal={() => setError(null)}>
        <p className='text-yellow-500 font-black'>ВНИМАНИЕ!</p>
        <p className='font-bold'>Вы не ответили на все вопросы.</p>
        <p>Закройте это окно и убедитесь что Вы ответили на все вопросы!</p>
      </ModalAlert>

      <ModalSendWithName
        title='Teст пройдет!'
        isOpen={isReady}
        closeModal={() => setReady(false)}
        onSend={(name) => {
          setLoading(true)
          addItem({
            collectionName: RESULTS_COLL,
            item: {
              name,
              result,
              quizId: quiz.id,
              date: Date.now()
            }
          }).then(() => {
            setLoading(false)
            setResultSended(true)
          })
        }}
      />

      <ModalLoading isOpen={loading} />
    </div>
  )
}

export default Quiz
