import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, disabled, type }) => {
  return (
    <>
      <button
        type={type}
        id={label}
        label={label}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: "submit",
};

export default Button;
