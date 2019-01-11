
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header></Header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
