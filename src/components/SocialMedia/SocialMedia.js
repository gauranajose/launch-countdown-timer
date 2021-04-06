import React from 'react';

import classes from './SocialMedia.css'
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';

const socialMedia = () => (
  <div className={classes.SocialMedia}>
    <img src={facebook} alt="facebook" />
    <img src={instagram} alt="instagram" />
    <img src={pinterest} alt="pinterest" />
  </div>
);

export default socialMedia;