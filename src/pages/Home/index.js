import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFilms } from "store/actions";
import SearchInput from "../../components/SearchInput";
import PeopleList from "../../components/PeopleList";

export class Home extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchFilms();
  }

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchFilms
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
