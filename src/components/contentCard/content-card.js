
import React, { Component } from 'react';

import ContentCardSC from './content-card.sc';

class ContentCard extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    const titleLowered = this.props.title.toLowerCase();
    const endpoint = this.getEndoint(titleLowered);

    fetch(endpoint, { method: 'GET' })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getEndoint(title) {
    return `http://localhost:3000/${title}/get-all-${title}`;
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
