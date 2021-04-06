import React, { Component } from 'react';

import classes from './Unit.css';

class Unit extends Component {

  render() {
    return (
      <div className={classes.Unit}>
        <div className={classes.UnitUI}>
          <h2>{this.props.time}</h2>
        </div>
        <p>{this.props.unit}</p>
      </div>
    );
  }
}

export default Unit;