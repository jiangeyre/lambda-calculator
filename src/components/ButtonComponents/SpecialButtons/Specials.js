import React, {useState} from "react";
import { specials } from '../../../data';
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const specialState = useState(specials)[0];

  return (
    <div>
      <div className="specials">
        {
          specialState.map((spec, ind) => {
            return <SpecialButton value={spec} key={spec} label={spec}/>
          })
        }
      </div>
    </div>
  );
};

export default Specials;