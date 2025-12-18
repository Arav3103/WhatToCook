import React from "react";
import PropTypes from "prop-types";

const DisplayRecipes = ({ srcList }) => {
  return (
    <ul>
      {srcList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

DisplayRecipes.propTypes = {
  srcList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DisplayRecipes.defaultProps = {
  srcList: [],
};

export default DisplayRecipes;
