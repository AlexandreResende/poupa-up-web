
import React, { Component } from 'react';
import ReactTable from 'react-table';

import ListDataSC from './list-data.sc';

import './list-data.css';
import "react-table/react-table.css";

export default class ListData extends Component {
	constructor(props) {
		super(props);
		this.state = {
      incomes: [],
      expenses: [],
		};
	}

	componentDidMount() {
		const titleLowered = this.props.location.pathname.substring(1);
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
		const titleLowered = this.props.location.pathname.substring(1);
		const columns = [
			{ 
				Header: `${titleLowered.toUpperCase()}`,
				columns: [
					{ Header: 'Month', accessor: 'month', maxWidth: 200 },
					{ Header: 'Year', accessor: 'year', maxWidth: 200 },
					{ Header: 'Value', accessor: 'value', maxWidth: 200 },
					{ Header: 'Category', accessor: 'category', maxWidth: 200 },
					{ Header: 'Description', accessor: 'description', maxWidth: 800 }
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
			<ListDataSC>
				<p>{titleLowered.toUpperCase()}</p>
				<ReactTable
					className='-striped'
					data={data}
					columns={columns}
					showPagination={true}
					showPaginationBottom={true}
					showPageSizeOptions={false}
					defaultPageSize={20} 
					sortable={false}
					noDataText=''
				/>
			</ListDataSC>
		);
	}
}