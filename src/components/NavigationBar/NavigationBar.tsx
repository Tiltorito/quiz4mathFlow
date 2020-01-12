import React from 'react'
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust } from '@rmwc/top-app-bar'

export default class NavigationBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopAppBar dense>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>Quiz4mathFlow</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </React.Fragment>
    );
  }
}