import styles from './Welcome.module.css'

import Quiz from '../../img/quiz.svg'

const Welcome = () => {
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
