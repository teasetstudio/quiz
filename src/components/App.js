import { useEffect } from "react";
import { getQuiz } from "../api/config";

const App = () => {

  useEffect(()=>{
    getQuiz()
  }, [])

  return (
    <div className="App bg-gray-600">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
