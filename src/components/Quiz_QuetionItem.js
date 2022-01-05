import TextArea from './Input_TextArea'

const QuestionItem = ({ item, itemId, setResult, result }) => {
  return (
    <>
      <p className='mb-3 text-2xl font-bold'>{item.question}</p>

      <TextArea placeholder="Ответ..." onChange={(value) => {
        const updatedResult = [...result]
        updatedResult[itemId] = value || null
        setResult(updatedResult)
      }} />
      
      {item.clue && (
        <div className='mt-2'>Подсказка: {item.clue}</div>
      )}
    </>
  )
}

export default QuestionItem
