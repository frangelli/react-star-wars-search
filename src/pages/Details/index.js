import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class Details extends Component {
  static propTypes = {
    person: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const {
      person: { name }
    } = this.props;
    return (
      <Fragment>
        <h1>{name}</h1>
        <Link to="/">Back</Link>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  person: state.searchReducer.person
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Details));
