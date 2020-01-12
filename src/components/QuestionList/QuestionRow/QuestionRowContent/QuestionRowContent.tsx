import React from 'react'
import Question from '../../../../models/Question';
import { Typography } from '@rmwc/typography';
import styles from './QuestionRowContent.module.scss';
import TagListComponent from '../../../TagListComponent/TagListComponent';

interface Props {
  question: Question
}

export default class QuestionRowContent extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <a href="#" className={styles.questionTitle}> 
          <Typography use="headline6">
            {this.props.question.title}
          </Typography>
        </a>

        <p className={styles.questionBody}>
          <Typography use="body2">
            {this.props.question.body}
          </Typography>
        </p>

        <div className={styles.tagWrapper}>
          <TagListComponent tags={this.props.question.tags} />
        </div>
      </React.Fragment>
    )
  }
}