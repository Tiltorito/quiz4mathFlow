import React from 'react';
import Question from '../../../models/Question';
import { Card } from '@rmwc/card';
import styles from './QuestionRow.module.scss';
import QuestionRowStats from './QuestionRowStats/QuestionRowStats';
import QuestionRowContent from './QuestionRowContent/QuestionRowContent';

interface Props {
  question: Question
}

export default class QuestionRow extends React.Component<Props> {
  render() {
    return(
      <Card className={styles.questionRow}>
        <div className="columns is-mobile">
            <div className="column is-1-desktop is-2-tablet is-2-mobile">
              <QuestionRowStats question={this.props.question}></QuestionRowStats>
            </div>
            <div className="column is-11-desktop is-10-tablet is-10-mobile">
              <QuestionRowContent question={this.props.question}></QuestionRowContent>
            </div>
        </div>

      </Card>
    )
  }
}