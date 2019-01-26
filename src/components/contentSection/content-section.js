
import React, { PureComponent } from 'react';

import ContentSectionSC from './content-section.sc';
import ContentCard from '../contentCard/content-card';

import './content-section.css';

class ContentSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ContentSectionSC>
        <p>
          This is an application that will help you have control of your money.
        </p>
        <ContentCard title={'Incomes'} marginLeft={'-30vw'}></ContentCard>
        <ContentCard title={'Expenses'} marginLeft={'10vw'} marginRight={'10vw'}></ContentCard>
      </ContentSectionSC>
    );
  }
}

export default ContentSection;
