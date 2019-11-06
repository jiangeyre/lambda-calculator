import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="button special-button">
      {props.label}
    </button>
  );
};

export default SpecialButton;