import React from 'react'
import Question from '../../../../models/Question';
import CounterLabel from '../../../CounterLabel/CounterLabel';
import { Typography } from '@rmwc/typography';
import styles from './QuestionRowStats.module.scss';

interface Props {
  question: Question
}

export default class QuestionRowStats extends React.Component<Props> {

  render() {
    return (
      <React.Fragment>
        <CounterLabel count={5} label="Votes" className={styles.counterLabel} />
        <CounterLabel count={10} label="Answers" className={styles.counterLabel} />
        <Typography use="body2" className={styles.viewsLabel}>
            7 Views
        </Typography>
      </React.Fragment>
    )
  }
}