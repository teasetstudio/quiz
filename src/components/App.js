import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuizPage from './Page_Quiz';
import { QUIZ_ID_PATH } from '../res/PathNames'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`:${QUIZ_ID_PATH}`} element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
