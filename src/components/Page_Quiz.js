import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Quiz from './Quiz';
// import quizRes from './quiz.json'
import ModalLoading from './Modal_Loading'
import { QUIZ_ID_PATH } from '../res/PathNames'
// import { addItem } from '../api/config'
// import { QUIZES_COLL } from '../res/CollectionNames';
import { getQuizById } from '../api/config'

const QuizPage = () => {
  const params = useParams()
  const [quiz, setQuiz] = useState(null)
  const [loading, setLoading] = useState(true)

  // const onClick = () => {
  //   addItem({
  //     collectionName: QUIZES_COLL,
  //     item: quizRes
  //   })
  // }

  useEffect(() => {
    const getQuiz = async () => {
      const data = await getQuizById({
        id: params[QUIZ_ID_PATH]
      })

      setQuiz(data);
      setLoading(false)
    }

    getQuiz()
  }, [])

  if (loading || !quiz) {
    return (
      <>
        {/* <button onClick={onClick}>add</button> */}
        <ModalLoading isOpen={loading} />
      </>
    )
  }

  return (
    <div>
      <Header />
      <Quiz className='mt-8 mx-2 max-w-2xl sm:mx-auto' quiz={quiz} />
    </div>
  )
}

export default QuizPage
