import React, { useEffect } from 'react'
import './App.css'

import { useContext } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './Components/Welcome/Welcome'
import Question from './Components/Question/Question'

const App = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    //embaralhar as perguntas
    dispatch({ type: 'REODER_QUESTIONS' })
  }, [])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
    </div>
  )
}

export default App
