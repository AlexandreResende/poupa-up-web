
import React, { Component } from 'react';

import ContentCardSC from './content-card.sc';

class ContentCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      incomes: [],
      expenses: [],
    };
  }

  componentDidMount() {
    const titleLowered = this.props.title.toLowerCase();
    const endpoint = this.getEndoint(titleLowered);

    fetch(endpoint, { method: 'GET' })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState(prevState => {
          return {
            ...prevState,
            incomes: data.incomes || [],
            expenses: data.expenses || [],
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getEndoint(title) {
    return `http://localhost:3000/${title}/get-all-${title}`;
  }

  render() {
    const titleLowered = this.props.title.toLowerCase();
    console.log('>>>>>>>>>');
    console.log(this.state);
    return (
      <ContentCardSC
        marginRight={this.props.marginRight}
        marginLeft={this.props.marginLeft}
      >
        <p>{this.props.title}</p>
        {this.state[titleLowered].map(objValue => {
          return (<span>Value: {objValue.value} | description: {objValue.description}</span>);
        })}
      </ContentCardSC>
    );
  }
}

export default ContentCard;
