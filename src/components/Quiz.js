import quiz from './quiz.json'
import { useState } from 'react'

const Quiz = ({ className }) => {
  const [state, setState] = useState(Array(quiz.length).fill(null))

  const onAnswer = (itemId, answerId) => {
    const updatedState = [...state]
    updatedState[itemId] = answerId
    setState(updatedState)
  }

  console.log(state);

  return (
    <div className={className}>
      {quiz.map((i, itemId)=> (
        <div key={itemId} className='mt-5 bg-gray-200 p-2 rounded-lg relative'>
          <p className='mb-3 text-2xl font-bold'>{i.question}</p>
          <div className='absolute -top-3 right-0 bg-emerald-600 text-white px-2 rounded'>{itemId + 1}</div>

          <div className='flex flex-col space-y-1'>
            {i.answers.map((i, answerId) => (
              <button
                key={answerId}
                className={`${state[itemId] === answerId && i.isCorrect === true
                  ? 'bg-emerald-600' : state[itemId] === answerId && i.isCorrect === false
                  ? 'bg-red-500' : state[itemId] !== null && i.isCorrect === true
                  ? 'bg-emerald-900 text-white' : 'bg-gray-300' }
                  p-4 rounded transition text-left`}
                onClick={() => onAnswer(itemId, answerId)}
                disabled={state[itemId] !== null ? true : false}
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
    </div>
  )
}

export default Quiz
