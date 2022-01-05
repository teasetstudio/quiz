const TestItem = ({ item, itemId, setResult, result }) => {
  const onChange = (itemId, answerId) => {
    const updatedResult = [...result]
    updatedResult[itemId] = answerId
    setResult(updatedResult)
  }

  return (
    <>
      <p className='mb-3 text-2xl font-bold'>{item.question}</p>

      <div className='flex flex-col space-y-1'>
        {item.answers.map((i, answerId) => (
          <button
            key={answerId}
            className={`${result[itemId] === answerId ? 'bg-gray-500 text-white font-black' : 'bg-gray-300' }
              p-4 rounded transition text-left`}
            onClick={() => onChange(itemId, answerId)}
          >
            {answerId + 1}. {i.text}
          </button>
        ))}
      </div>

      {item.clue && (
        <div className='mt-4'>Подсказка: {item.clue}</div>
      )}
    </>
  )
}

export default TestItem
