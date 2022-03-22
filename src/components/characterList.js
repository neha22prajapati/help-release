import React from "react";
//import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getDataByID } from "../actions";

class CharacterList extends React.Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {this.props.characters.map((c) => {
            return (
              <li key={c.id}>
                {c.name}
                <span onClick={() => this.props.getDataByID(c.id)}>+</span>
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
    characters: state.TestReducer,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getDataByID }, dispatch);
// }

export default connect(mapStateToProps, { getDataByID })(CharacterList);
