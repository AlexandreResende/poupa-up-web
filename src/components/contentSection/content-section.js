
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
        <ContentCard title={'Incomes'} marginLeft={'15rem'} marginRight={'10rem'}></ContentCard>
        <ContentCard title={'Expenses'} marginLeft={'60rem'} marginRight={'5rem'}></ContentCard>
      </ContentSectionSC>
    );
  }
}

export default ContentSection;
