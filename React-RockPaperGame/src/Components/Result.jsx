import React from "react";
import "../Components/result.module.css";

const Result = ({ playerChoice, computerChoice, result }) => {
  return (
    <div className="result">
      <h2>Result: </h2>
      <p>Your Choice: {playerChoice}</p>
      <p>Computer's choice: {computerChoice}</p>
      <h3>{result}</h3>
    </div>
  );
};

export default Result;
