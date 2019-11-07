import React,{useState} from "react";
import { operators } from '../../../data';
import OperatorButton from "./OperatorButton"; 

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const operatorState = useState(operators)[0];

  return (
    <div>
      <div className="operators-div">
        {operatorState.map((oper, ind) => {
          return <OperatorButton value={oper.value} key={ind} label={oper.char}/>
        })
        }
      </div>
    </div>
  );
};

export default Operators;