import React from "react";
import PropTypes from "prop-types";

const DisplayItems = ({ srcList }) => {
  return (
    <ul>
      {srcList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

DisplayItems.propTypes = {
  srcList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DisplayItems.defaultProps = {
  srcList: [],
};

export default DisplayItems;
