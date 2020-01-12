import React from 'react';
import { ListItemSelectedListener } from '../../Handlers/ListItemSelectedListener';
import Tag from '../../models/Tag';
import TagComponent from '../TagComponent/TagComponent';
import { ChipSet } from '@rmwc/chip'

interface Props {
  tags: Tag[]
  listener?: ListItemSelectedListener
}

export default class TagListComponent extends React.Component<Props> {

  render() {
    const chips = this.props.tags.map((tag) => {
      return (
        <TagComponent 
          key={tag.id}
          id={String(tag.id)} 
          label={tag.name}
          link={Tag.linkTo(tag)}
          listener={this.props.listener}
        />
      )
    })

    return (<ChipSet>{chips}</ChipSet>)
  }
}