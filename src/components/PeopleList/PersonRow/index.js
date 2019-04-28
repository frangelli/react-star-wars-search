import React from "react";

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

export default PersonRow;
