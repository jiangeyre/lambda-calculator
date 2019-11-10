import React, {useState} from "react";
import { specials } from '../../../data';
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      <div className="specials">
        {specials.map((spec, ind) => <SpecialButton key={ind} text={spec}/>)}
      </div>
    </div>
  );
};

export default Specials;