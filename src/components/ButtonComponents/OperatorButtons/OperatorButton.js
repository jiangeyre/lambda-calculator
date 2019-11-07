import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="button operator-button">
      {props.label}
    </button>  
  );
};

export default OperatorButton;