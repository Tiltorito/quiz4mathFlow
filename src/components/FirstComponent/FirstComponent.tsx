import React from 'react';

interface Props {
  name?: string
}

export default class FirstComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
      </div>
    )
  }
}