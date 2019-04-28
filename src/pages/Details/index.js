import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Details extends Component {
  static propTypes = {
    person: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const {
      person: { name }
    } = this.props;
    return <h1>{name}</h1>;
  }
}
