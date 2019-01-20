
import React, { Component } from 'react';

import ContentCardSC from './content-card.sc';

import './content-card.css';

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

    return (
      <ContentCardSC
        marginRight={this.props.marginRight}
        marginLeft={this.props.marginLeft}
      >
        <table>
          <thead><tr><th colSpan='2'>{this.props.title}</th></tr></thead>
          <tbody>
            <tr>
              <td>Value</td>
              <td>Description</td>
            </tr>
            {this.state[titleLowered].map(objValue => {
            return (<tr><td>{objValue.value}</td><td>{objValue.description}</td></tr>);
            })}
          </tbody>
        </table>
      </ContentCardSC>
    );
  }
}

export default ContentCard;
