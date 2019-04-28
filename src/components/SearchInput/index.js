import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search, setSearchData } from "../../store/actions";

export class SearchInput extends Component {
  constructor(props) {
    super(props);
    // this timer will be used to dispatch the
    // search only after stoping typing for a while
    this.inputDebouncer = null;
  }

  onChange = e => {
    if (this.inputDebouncer) {
      clearTimeout(this.inputDebouncer);
    }
    const searchTerm = e.target.value;
    const { search, setSearchData } = this.props;
    setSearchData({ searchTerm });
    if (searchTerm.length > 1) {
      this.inputDebouncer = setTimeout(() => {
        search(searchTerm);
      }, 400);
    } else {
      setSearchData({ people: [] });
    }
  };

  componentWillUnmount() {
    if (this.inputDebouncer) {
      clearTimeout(this.inputDebouncer);
    }
  }

  render() {
    return <input type="text" onChange={this.onChange} />;
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchReducer.searchTerm
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      search,
      setSearchData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
