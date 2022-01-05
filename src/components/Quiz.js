import { useState } from 'react'
import Button from './Button'
import ModalAlert from './Modal_Alert'
import ModalSendWithName from './Modal_SendWithName'
import { addItem } from '../api/config'
import { RESULTS_COLL } from '../res/CollectionNames'
import ModalLoading from './Modal_Loading'
import TestItem from './Quiz_TestItem'
import QuestionItem from './Quiz_QuetionItem'

const Quiz = ({ className, quiz }) => {
  const [result, setResult] = useState(Array(quiz.items.length).fill(null))
  const [error, setError] = useState(null)
  const [isReady, setReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultSended, setResultSended] = useState(false)

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
          <div className='absolute -top-3 right-0 bg-emerald-600 text-white px-2 rounded'>{itemId + 1}</div>
          
          {i.type === 'test' ? (
            <TestItem item={i} itemId={itemId} setResult={setResult} result={result} />
          ) : i.type === 'question' ? (
            <QuestionItem item={i} itemId={itemId} setResult={setResult} result={result} />
          ) : (
            <p>Ошибка: Нет данных.</p>
          )}
        </div>
      ))}

      <div className='text-center my-10'>
        <p className='text-gray-500'>Ответьте на все вопросы и нажмите кнопку "Готово".</p>
        <Button variant={1} className='mt-5' onClick={onReady}>Готово</Button>
      </div>

      <ModalAlert isOpen={Boolean(error)} closeModal={() => setError(null)}>
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
