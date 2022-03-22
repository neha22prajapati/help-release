import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>This is my clock</h1>
        <h3>Time is {this.state.date.toLocaleString()}</h3>
      </div>
    );
  }
}

export default Clock;
