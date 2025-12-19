import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, handleClick, disabled, type }) => {
  return (
    <>
      <button
        type={type}
        label={label}
        onClick={handleClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: "submit",
};

export default Button;
