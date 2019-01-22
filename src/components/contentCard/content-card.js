
import React, { Component } from 'react';
import ReactTable from 'react-table';

import ContentCardSC from './content-card.sc';

// import './content-card.css';
import "react-table/react-table.css";

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
        console.log(data);
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
    return `http://localhost:7777/${title}/get-all-${title}`;
  }

  render() {
    const titleLowered = this.props.title.toLowerCase();
    const columns = [
      { 
        Header: `${this.props.title}`,
        columns: [
          { Header: 'Value', accessor: 'value', maxWidth: 100 },
          { Header: 'Description', accessor: 'description', maxWidth: 300 }
        ]
      }
    ];
    const data = this.state[titleLowered].map(data => {
        const newData = { ...data };
        newData.value = `R$ ${data.value}`;

        return newData;
      }
    );

    return (
      <ContentCardSC
        marginRight={this.props.marginRight}
        marginLeft={this.props.marginLeft}
      >
        <ReactTable
          className='-striped'
          data={data}
          columns={columns}
          showPagination={false}
          showPaginationBottom={false}
          showPageSizeOptions={false}
          defaultPageSize={8} 
          sortable={false}
          noDataText=''
        />
        {/* <table>
          <thead><tr><th colSpan='2'>{this.props.title}</th></tr></thead>
          <tbody>
            <tr>
              <td>Value</td>
              <td>Description</td>
            </tr>
            {this.state[titleLowered].map(objValue => {
            return (<tr key={objValue.id}><td>R$ {objValue.value}</td><td>{objValue.description}</td></tr>);
            })}
          </tbody>
        </table> */}
      </ContentCardSC>
    );
  }
}

export default ContentCard;
