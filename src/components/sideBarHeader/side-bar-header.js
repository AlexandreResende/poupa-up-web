
import React from 'react';

import SideBarHeaderSC from './side-bar-header.sc';

const SideBarHeader = (props) => (
  <SideBarHeaderSC marginTop={props.marginTop}>
    {props.title}
  </SideBarHeaderSC>
);

export default SideBarHeader;
