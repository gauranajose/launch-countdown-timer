import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';

import classes from './Footer.css';
import hillPattern from '../../assets/images/pattern-hills.svg';

const footer = (props) => (
  <div className={classes.Footer} style={{ background: `url(${hillPattern})` }}>
    <SocialMedia />
    <div className={classes.Attribution}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. &nbsp; 
      Coded by <a href="https://github.com/gauranajose">Jose Gaurana</a>.
  </div>
  </div>
);

export default footer;