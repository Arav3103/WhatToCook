import React from "react";

const DisplayItems = ({ srcList }) => {
  return (
    <>
      {srcList.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
};

export default DisplayItems;
