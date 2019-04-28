import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchInput from "../../components/SearchInput";
import PeopleList from "../../components/PeopleList";

export class Home extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired
  };

  render() {
    return (
      <Fragment>
        <SearchInput />
        <PeopleList people={this.props.people} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  people: state.searchReducer.people
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
