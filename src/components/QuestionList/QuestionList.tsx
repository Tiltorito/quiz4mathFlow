import React from 'react'
import Question from '../../models/Question';
import QuestionRow from './QuestionRow/QuestionRow';
import styles from './QuestionList.module.scss';

interface Props {
  questions: Question[]
}

export default class QuestionList extends React.Component<Props> {

  render() {
    const rows = this.props.questions.map((q) => <QuestionRow key={q.id} question={q}></QuestionRow>)

    return (
      <div className={styles.questionList}>
        {rows}
      </div>
    )
  }
}