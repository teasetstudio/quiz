import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuizPage from './Page_Quiz';
import AddQuizPage from './Page_AddQuiz';
import { QUIZ_ID_PATH, ADD_QUIZ_PATH } from '../res/PathNames'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`:${QUIZ_ID_PATH}`} element={<QuizPage />} />
        <Route path={ADD_QUIZ_PATH} element={<AddQuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
