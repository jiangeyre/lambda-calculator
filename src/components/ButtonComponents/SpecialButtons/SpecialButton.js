import React from "react";

const SpecialButton = (props) => {
  console.log("seocial", props);
  
  return (
    <button className="specialButt">
      {props.text}
    </button>
  );
};

export default SpecialButton;