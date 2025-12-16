import React from "react";

const Button = ({ name, handleClick }) => {
  return (
    <>
      <button id={name} onClick={handleClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
