import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Quiz from './Quiz';
import ModalLoading from './Modal_Loading'
import { QUIZ_ID_PATH } from '../res/PathNames'
import { getQuizById } from '../api/config'

const QuizPage = () => {
  const params = useParams()
  const [quiz, setQuiz] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getQuiz = async () => {
      const data = await getQuizById({
        id: params[QUIZ_ID_PATH]
      })

      setQuiz(data);
      setLoading(false)
    }

    getQuiz()
  }, [params])

  if (loading || !quiz) {
    return (
      <ModalLoading isOpen={loading} />
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
