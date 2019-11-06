import React from "react";

const NumberButton = (props) => {
  return (
    <button className="button number-button">
      {props.label}
    </button>
  );
};

export default NumberButton;