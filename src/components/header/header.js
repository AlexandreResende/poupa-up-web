
import React from 'react';
import { Route, Link } from 'react-router-dom';

import HeaderSC from './header.sc';

const Header = (props) => (
    <div>
      <Link to={'/'} exact>
        <HeaderSC>
          Poupa-up
        </HeaderSC>
      </Link>
      <Route path='/' exact />
    </div>
);

export default Header;
