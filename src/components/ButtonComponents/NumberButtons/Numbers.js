import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttNumbers, setButtNumbers] = useState(numbers);
  console.log("Numbers", props);
  return (
    <div>
      <div className="numbers">
        {buttNumbers.map((num, index) => {
          return <NumberButton className="buttNum" key={index} text={num} addNumber={props.addNumber}/>
        })}
      </div>
    </div>
  );
};

export default Numbers;