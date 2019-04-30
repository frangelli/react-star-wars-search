import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFilmsByPerson, setSearchData } from "store/actions";

export class Details extends Component {
  static propTypes = {
    person: PropTypes.shape({
      name: PropTypes.string
    })
  };

  componentDidMount() {
    if (!this.props.person) {
      this.props.history.push("/");
    }
    this.props.getFilmsByPerson(this.props.person);
  }

  componentWillUnmount() {
    this.props.setSearchData({ selectedPersonFilms: [] });
  }

  renderFilmList = () => {
    return this.props.selectedPersonFilms.map(f => {
      return (
        <tr key={f.episode_id}>
          <td>{f.episode_id}</td>
          <td>{f.title}</td>
          <td>{f.release_date}</td>
        </tr>
      );
    });
  };

  render() {
    if (!this.props.person) {
      return null;
    }
    const {
      person: {
        name,
        height,
        birth_year,
        mass,
        gender,
        eye_color,
        hair_color,
        skin_color,
        films
      }
    } = this.props;
    return (
      <div className="col col-xs-12 card">
        <h2 className="card-title">{name}</h2>
        <div className="card-body">
          <table className="table table-striped table-condensed">
            <tbody>
              <tr>
                <th>Birth:</th>
                <td>{birth_year}</td>
                <th>Gender:</th>
                <td>{gender}</td>
              </tr>
              <tr>
                <th>Height:</th>
                <td>{height}</td>
                <th>Mass:</th>
                <td>{mass}</td>
              </tr>
              <tr>
                <th>Skin Color:</th>
                <td>{skin_color}</td>
                <th>Eye Color:</th>
                <td>{eye_color}</td>
              </tr>
            </tbody>
          </table>
          {this.props.selectedPersonFilms && (
            <Fragment>
              <h3>Films</h3>
              <table className="table table-striped table-condensed">
                <tbody>
                  <tr>
                    <th>Episode ID</th>
                    <th>Title</th>
                    <th>Released on</th>
                  </tr>
                  {this.renderFilmList()}
                </tbody>
              </table>
            </Fragment>
          )}
          <Link id="back-btn" to="/" className="btn btn-primary">
            <i className="fa fa-chevron-left" /> Back
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  person: state.searchReducer.person,
  selectedPersonFilms: state.searchReducer.selectedPersonFilms
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFilmsByPerson,
      setSearchData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Details));
