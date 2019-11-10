import React,{useState} from "react";
import { operators } from '../../../data';
import OperatorButton from "./OperatorButton"; 

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      <div className="operators">
        {operators.map((op, index) => <OperatorButton key={index} operator={op} addOperator={props.addOperator}/>)}
      </div>
    </div>
  );
};

export default Operators;