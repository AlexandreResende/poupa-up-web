
import React from 'react';
import { Route, Link } from 'react-router-dom';

import HeaderSC from './header.sc';

const Header = (props) => (
    <div>
      <Link to={'/'} exact={true} >
        <HeaderSC>Poupa-up</HeaderSC>
      </Link>
      <Route path='/' exact={true} />
    </div>
);

export default Header;
