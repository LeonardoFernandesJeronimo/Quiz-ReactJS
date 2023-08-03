import Quiz from '../../img/quiz.svg'
import styles from './Welcome.module.css'

import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'


const Welcome = () => {
  const quizState = useContext(QuizContext)
  console.log(quizState);

  return (
    <div className={styles.welcome}>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <img src={Quiz} alt="Início do Quiz" />
      <button>Iniciar</button>
    </div>
  )
}

export default Welcome
