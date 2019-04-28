import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uniqueId } from "lodash";
import { setSearchData } from "store/actions";
import PersonRow from "./PersonRow";

export class PeopleList extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    setSearchData: PropTypes.func.isRequired
  };

  onItemClick = person => {
    const { history, setSearchData } = this.props;
    setSearchData({ person });
    history.push("/details");
  };

  render() {
    const { people } = this.props;
    return (
      <ul>
        {people.map(person => {
          return (
            <PersonRow
              key={uniqueId()}
              person={person}
              onItemClick={this.onItemClick}
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
      setSearchData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PeopleList));
