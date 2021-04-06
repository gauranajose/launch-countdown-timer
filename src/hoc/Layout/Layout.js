import React from 'react';

import classes from './Layout.css'
import starsImage from '../../assets/images/bg-stars.svg';

const layout = (props) => (
  <div className={classes.Layout} style={{ backgroundImage: `url(${starsImage})` }}>
      {props.children}
  </div>
);

export default layout;