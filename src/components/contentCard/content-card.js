
import React, { Component } from 'react';
import ReactTable from 'react-table';

import ContentCardSC from './content-card.sc';
import fetchData from '../../utils/fetchData';

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

  async componentDidMount() {
    const titleLowered = this.props.title.toLowerCase();
    const fetchedData = await fetchData(titleLowered);

    this.setState(prevState => {
      return {
        ...prevState,
        incomes: fetchedData.incomes || [],
        expenses: fetchedData.expenses || [],
      }
    });
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
      </ContentCardSC>
    );
  }
}

export default ContentCard;
