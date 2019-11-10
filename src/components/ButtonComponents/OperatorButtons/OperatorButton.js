import React from "react";

const OperatorButton = (props) => {
  console.log(props);

  return (
    <button className="operatorButt" onClick={() => props.addOperator(props.operator.value)}>
      {props.operator.char}
    </button>  
  );
};

export default OperatorButton;