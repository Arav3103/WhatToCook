import PropTypes from "prop-types";
import React from "react";

const AlertPopup = ({ textContent }) => {
  return (
    <>
      <p>{textContent}</p>
    </>
  );
};

AlertPopup.propTypes = {
  textContent: PropTypes.string.isRequired,
};

export default AlertPopup;
