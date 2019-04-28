import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uniqueId } from "lodash";
import PersonRow from "./PersonRow";

export class PeopleList extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    selectPerson: PropTypes.func.isRequired
  };

  render() {
    const { people, selectPerson } = this.props;
    return (
      <ul>
        {people.map(person => {
          return (
            <PersonRow
              key={uniqueId()}
              person={person}
              onItemClick={selectPerson}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  people: state.searchReducer.people
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectPerson: person => {
        console.log("row clicked", person);
      }
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList);
