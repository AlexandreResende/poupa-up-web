
import React, { Component } from 'react';

import ContentCardSC from './content-card.sc';

class ContentCard extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <ContentCardSC
        marginRight={this.props.marginRight}
        marginLeft={this.props.marginLeft}
      >{this.props.title}</ContentCardSC>
    );
  }
}

export default ContentCard;
