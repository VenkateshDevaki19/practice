import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.callAPI}>Click to generate a joke</button>

    </div>
  );
};

export default Button;
