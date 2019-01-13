
import React, { PureComponent } from 'react';

import ContentSectionSC from './content-section.sc';

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
      </ContentSectionSC>
    );
  }
}

export default ContentSection;
