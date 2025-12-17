import React from "react";
import PropTypes from "prop-types";



const Button = ({ label, handleClick, disabled }) => {

  return (
    <>
      <button label={label} onClick={handleClick} disabled={disabled}>
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    disabled: false
}

export default Button;
