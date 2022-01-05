import { addItem } from '../api/config'
import { QUIZES_COLL } from '../res/CollectionNames';
import quiz from './quiz.json'

const AddQuizPage = () => {

  const onClick = () => {
    addItem({
      collectionName: QUIZES_COLL,
      item: quiz
    })
  }

  return (
    <div>
      <button onClick={onClick} className='bg-gray-300 p-4'>add</button>
    </div>
  )
}

export default AddQuizPage
