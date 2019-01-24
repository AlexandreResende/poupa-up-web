
import React, { Component } from 'react';

import ListDataSC from './list-data.sc';

export default class ListData extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ListDataSC>
				<p>Some data here!!!!</p>
			</ListDataSC>
		);
	}
}