import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.counterValue}</h2>
        <button
          onClick={() => this.props.incrementCounter(this.props.counterValue)}
        >
          +
        </button>
        <button
          onClick={() => this.props.decrementCounter(this.props.counterValue)}
        >
          -
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counterValue: state.CounterSlice,
  };
}

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(
  Counter
);
