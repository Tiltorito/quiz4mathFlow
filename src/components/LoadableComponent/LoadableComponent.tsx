import styles from './LoadableComponent.module.scss';

import React from 'react';


export enum LoadableComponentState { IDLE, LOADING }

interface Props {
  state: LoadableComponentState
}

export default class LoadableComponent extends React.Component<Props> {
  
  className(forState: LoadableComponentState): string {
    switch (forState) {
      case LoadableComponentState.IDLE:
        return styles.idle
      case LoadableComponentState.LOADING:
        return styles.loading
    }
  }

  render() {
    return (
      <div>
        <div className={styles.content}>
          {this.props.children}
        </div>
        <div className={[styles.loadable, this.className(this.props.state)].join(' ')}></div>
      </div>
    );
  }
}

