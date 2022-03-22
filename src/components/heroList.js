import React from "react";
import { connect } from "react-redux";
import { removeDataByID } from "../actions";

class HeroList extends React.Component {
  render() {
    return (
      <div>
        <h4>Your Hero List:</h4>
        <ul>
          {this.props.heroes.map((h) => {
            return (
              <li key={h.id}>
                {h.name}{" "}
                <span onClick={() => this.props.removeDataByID(h.id)}>x</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.Heroes,
  };
}

export default connect(mapStateToProps, { removeDataByID })(HeroList);
