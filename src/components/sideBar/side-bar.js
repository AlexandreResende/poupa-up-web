
import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

import SideBarSC from './side-bar.sc';
import SideBarHeader from '../sideBarHeader/side-bar-header';
import ContentSection from '../contentSection/content-section';
import ListData from '../listdata/list-data';

import './side-bar.css';

const SideBar = (props) => (
  <SideBarSC>
    <ul>
      <li>
        <NavLink to={'/incomes'} style={{textDecoration: 'none'}}>
          <SideBarHeader title={'Incomes'} marginTop={'7rem'} />
        </NavLink>
      </li>
      <li>
        <NavLink to='/expenses' style={{textDecoration: 'none'}}>
          <SideBarHeader title={'Expenses'} />
        </NavLink>
      </li>
      <li>
        <NavLink to='/search' style={{textDecoration: 'none'}}>
          <SideBarHeader title={'Search'} />
        </NavLink>
      </li>
      <li>
        <NavLink to='/graphs' style={{textDecoration: 'none'}}>
          <SideBarHeader title={'Graphs'} />
        </NavLink>
      </li>
      <li>
        <NavLink to='/import' style={{textDecoration: 'none'}}>
          <SideBarHeader title={'Import'} />
        </NavLink>
      </li>
    </ul>
    <Route path='/incomes' title={'Incomes'} component={ListData} />
    <Route path='/expenses' exact />
    <Route path='/search' exact />
    <Route path='/graphs' exact />
    <Route path='/import' exact />
    <Route path='/home' component={ContentSection}/>
    <Route path='/' exact component={ContentSection}/>
  </SideBarSC>
);

export default SideBar;