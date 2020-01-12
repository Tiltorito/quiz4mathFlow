import React from 'react';
import { ListItemSelectedListener } from '../../Handlers/ListItemSelectedListener';
import { Chip } from '@rmwc/chip'
import styles from './TagComponent.module.scss'

interface Props {
  id?: string
  listener?: ListItemSelectedListener
  label: string
  link?: string
}

export default class TagComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(id?: string) {
    if (id && this.props.listener) {
      this.props.listener.didSelectItemWithKey(id);
    }
  }

  render() {
    return (
      <a href={this.props.link ?? '#'} className={styles.anchorLink}>
        <Chip
          label={this.props.label}
          onInteraction={(e) => {
            this.onClick(this.props.id)
          }}
        />
      </a>
    )
  }
}