import React from 'react';
import styles from './CounterLabel.module.scss';
import { Typography } from '@rmwc/typography';

interface Props {
  count: number
  label: string
  className?: string
}

export default class CounterLabel extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className ?? ""}>
        <Typography use="body1" className={styles.counter}>
          {this.props.count}
        </Typography>
        <Typography use="body2" className={styles.countLabel}>
          {this.props.label}
        </Typography>
      </div>
    )
  }
}