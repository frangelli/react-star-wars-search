import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { uniqueId } from "lodash";
import { setSearchData } from "store/actions";
import PersonRow from "./PersonRow";
const darth = require("../../assets/images/darth.png");
const yoda = require("../../assets/images/yoda.png");

require("./styles.scss");
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
    const { people, loading, searchMade } = this.props;
    return (
      <section id="people-list" className="row">
        {loading && (
          <div
            id="search-loading-indicator"
            className="col col-xs-12 text-center"
          >
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {people.length === 0 && searchMade && !loading && (
          <div id="search-no-results" className="col col-xs-12 text-center">
            <h5 className="text-center">
              I'm your father... and your search has no results!
            </h5>
            <img width="320" src={darth} />
          </div>
        )}
        {people.length === 0 && !searchMade && (
          <div id="search-instructions" className="col col-xs-12 text-center">
            <h5 className="text-center">Your search above make!</h5>
            <img width="320" src={yoda} />
          </div>
        )}
        {people.map(person => {
          return (
            <PersonRow
              key={uniqueId()}
              person={person}
              onItemClick={this.onItemClick}
            />
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  people: state.searchReducer.people,
  loading: state.searchReducer.loading,
  searchMade: state.searchReducer.searchMade
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
