import React from "react";
import PropTypes from "prop-types";

const PersonRow = ({ onItemClick, person }) => {
  return (
    <div className="person-row col col-xs-12 col-sm-12 col-md-6">
      <article
        className="card person"
        onClick={() => {
          onItemClick(person);
        }}
      >
        <div className="card-body">
          <h5 className="card-title">
            {person.name} - <i className={`fa fa-${person.gender_symbol}`} />
          </h5>
          <table className="table">
            <tbody>
              <tr>
                <th>
                  <i className="fa fa-calendar" />
                </th>
                <td>{person.birth_year}</td>
                <th>
                  <i className="fa fa-palette" />
                </th>
                <td>{person.skin_color}</td>
              </tr>
              <tr>
                <th>
                  <i className="fa fa-eye" />
                </th>
                <td>{person.eye_color}</td>
                <th>
                  <i className="fa ">hair</i>
                </th>
                <td>{person.hair_color}</td>
              </tr>
              <tr>
                <th>
                  <i className="fa fa-arrows-alt-v" />
                </th>
                <td>{person.height}</td>

                <th>
                  <i className="fa fa-weight" />
                </th>
                <td>{person.mass}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

PersonRow.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PersonRow;
