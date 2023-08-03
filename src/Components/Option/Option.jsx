import styles from './Option.module.css'

import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext)  

  return (
    <div 
        className={styles.option} 
        onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  )
}

export default Option
