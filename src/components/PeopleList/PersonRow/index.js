import React from "react";
import PropTypes from "prop-types";

const PersonRow = ({ onItemClick, person }) => {
  return (
    <li
      onClick={() => {
        onItemClick(person);
      }}
    >
      {person.name}
    </li>
  );
};

PersonRow.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PersonRow;
