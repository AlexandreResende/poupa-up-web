
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/header/header';
import SideBar from './components/sideBar/side-bar';
import ContentSection from './components/contentSection/content-section';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='relativePositioning'>
          <Header title={'Poupa-up'}></Header>
          <SideBar></SideBar>
          <ContentSection></ContentSection>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
