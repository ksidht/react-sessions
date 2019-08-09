import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends Component{
  constructor() {
    super();
    this.state = { date: new Date }
    }

  componentDidMount() {
    // console.log(this);
    setInterval(
      this.tick ,
      1000
    );
  }


  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    console.log(this.state);
    return( 
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}

export default Clock;
