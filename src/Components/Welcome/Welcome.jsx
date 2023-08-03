import Quiz from '../../img/quiz.svg'
import styles from './Welcome.module.css'

import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className={styles.welcome}>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome
