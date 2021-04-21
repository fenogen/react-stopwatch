import React, { Component } from 'react';
import Button from './Button/Button';

export default class Stopwatcher extends Component {
  state = {
    hh: 0,
    mm: 0,
    ss: 0,
    pause: null,
    buttonDisabled: false,
  };

  fnStart = () => {
    console.log('start');
    this.intervalID = setInterval(this.timer, 1000);
    this.setState({
      pause: true,
      buttonDisabled: true,
    });
  };

  fnStop = () => {
    console.log('stop');
    clearInterval(this.intervalID);
    this.setState({
      ss: 0,
      mm: 0,
      hh: 0,
      pause: false,
      buttonDisabled: false,
    });
  };

  fnWait = () => {
    console.log('Wait');
    if (this.state.pause) {
      clearInterval(this.intervalID);
    }
        this.setState({
      buttonDisabled: false,
    });
  };

  fnReset = () => {
    console.log('reset');
    clearInterval(this.intervalID);
    this.setState({
      ss: 0,
      mm: 0,
      hh: 0,
      pause: true,
    });
    this.intervalID = setInterval(this.timer, 1000);
  };

  timer = () => {
    if (this.state.ss < 59)
      this.setState(prev => ({
        ss: prev.ss + 1,
      }));
    if (this.state.ss === 59)
      this.setState(prev => ({
        ss: 0,
        mm: prev.mm + 1,
      }));
    if (this.state.mm === 59)
      this.setState(prev => ({
        ss: 0,
        mm: 0,
        hh: prev.hh + 1,
      }));
  };

  render() {
    let hours = this.state.hh.toString().padStart(2,"0")
    let minutes = this.state.mm.toString().padStart(2,"0")
    let seconds = this.state.ss.toString().padStart(2,"0")
    return (
      <div>
        <h1>Stopwatcher</h1>
        <Button title="Start" fnTimer={this.fnStart} buttonStatus={this.state.buttonDisabled}/>
        <Button title="Stop" fnTimer={this.fnStop} />
        <Button title="Wait" fnTimer={this.fnWait} />
        <Button title="Reset" fnTimer={this.fnReset} buttonStatus={!this.state.buttonDisabled}/>
        <div className="box">
          <p>
            <span className="value" data-value="hours">
              {hours}
            </span>{' '}
            :{' '}
            <span className="value" data-value="mins">
              {minutes}
            </span>{' '}
            :{' '}
            <span className="value" data-value="secs">
              {seconds}
            </span>
          </p>
        </div>
      </div>
    );
  }
}
