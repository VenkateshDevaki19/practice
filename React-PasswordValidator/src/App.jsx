import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [message, setMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setMessage("Is Strong Password");
    } else {
      setMessage("Is not Strong Password");
    }
  };
  return (
    <div>
      <pre>
        <h1>Checking Password Strength in React</h1>
        <span>Enter Your Password: </span>
        <input type="text" onChange={(e) => validate(e.target.value)} />
        <br />
        {message === "" ? null : (
          <span style={{ fontWeight: "bold", color: "red" }}>{message}</span>
        )}
      </pre>
    </div>
  );
};

export default App;
