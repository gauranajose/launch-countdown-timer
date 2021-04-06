import React, { Component } from 'react';
import Unit from '../../components/Unit/Unit';

import classes from './Timer.css';

class Timer extends Component {
  state = {
    timeLeft: 691199,
  };

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    if (this.state.timeLeft > 0) {
      setInterval(this.countDown, 1000);
    }
  };

  countDown = () => {
    this.setState((prevState) => {
      return { timeLeft: prevState.timeLeft - 1 };
    });
    
  };

  render() {
    const secToDay = 60 * 60 * 24;
    const days = Math.floor(this.state.timeLeft / secToDay);

    const hourDivisor = this.state.timeLeft % secToDay;
    const secToHour = 60 * 60;
    const hours = Math.floor(hourDivisor / secToHour);

    const minDivisor = hourDivisor % secToHour;
    const secToMin = 60;
    const mins = Math.floor(minDivisor / secToMin);

    const secDivisor = minDivisor % secToMin;
    const secs = Math.ceil(secDivisor);

    return (
      <div className={classes.Timer}>
        <Unit unit='DAYS' time={days.toString().padStart(2, '0')} />
        <Unit unit='HOURS' time={hours.toString().padStart(2, '0')} />
        <Unit unit='MINUTES' time={mins.toString().padStart(2, '0')} />
        <Unit unit='SECONDS' time={secs.toString().padStart(2, '0')} />
      </div>
    );
  }
}

export default Timer;
