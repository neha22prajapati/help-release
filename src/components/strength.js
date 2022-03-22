import React from "react";
import { connect } from "react-redux";

class Strength extends React.Component {
  strength() {
    let strength = 0;
    this.props.heroes.map((h) => (strength += h.strength));
    return strength;
  }

  intelligence() {
    let intelligence = 0;
    this.props.heroes.map((h) => (intelligence += h.intelligence));
    return intelligence;
  }

  render() {
    return (
      <div>
        <h4>Strength of Heroes</h4>
        <p>Overall Strength is: {this.strength()}</p>
        <p>Overall Intelligence is: {this.intelligence()}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.Heroes,
  };
}

export default connect(mapStateToProps, null)(Strength);
