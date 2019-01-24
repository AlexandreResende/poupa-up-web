
import React from 'react';
import { Link, Route } from 'react-router-dom';

import SideBarSC from './side-bar.sc';
import SideBarHeader from '../sideBarHeader/side-bar-header';
import ContentSection from '../contentSection/content-section';
import ListData from '../listdata/list-data';

import './side-bar.css';

const SideBar = (props) => (
  <SideBarSC>
    <ul>
      <Link to={'/incomes'} style={{textDecoration: 'none'}}>
        <li><SideBarHeader title={'Incomes'} marginTop={'7rem'} /></li>
      </Link>
      <Link to={'/expenses'} style={{textDecoration: 'none'}}>
        <li><SideBarHeader title={'Expenses'} /></li>
      </Link>
      <Link to={'/search'} style={{textDecoration: 'none'}}>
        <li><SideBarHeader title={'Search'} /></li>
      </Link>
      <Link to={'/graphs'} style={{textDecoration: 'none'}}>
        <li><SideBarHeader title={'Graphs'} /></li>
      </Link>
      <Link to={'/import'} style={{textDecoration: 'none'}}>
        <li><SideBarHeader title={'Import'} /></li>
      </Link>
    </ul>
    <Route to={'/incomes'} title={'Incomes'} exact component={ListData} />
    <Route to={'/expenses'} exact />
    <Route to={'/search'} exact />
    <Route to={'/graphs'} exact />
    <Route to={'/import'} exact />
    <Route to={'/'} exact component={ContentSection}/>
  </SideBarSC>
);

export default SideBar;