import React, { useState } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import Result from "./Result";
import '../Components/Game.module.css';

const Game = () => {
  const choices = [
    { name: "Rock", icon: <FaHandRock /> },
    { name: "Paper", icon: <FaHandPaper /> },
    { name: "Scissors", icon: <FaHandScissors /> },
  ];

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a tie!";
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You Win!";
    } else {
      return "You Lose!";
    }
  };

  const playGame = (playerChoice) => {
    const computerChoice =
      choices[Math.floor(Math.random() * choices.length)].name;
    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    const result = determineWinner(playerChoice, computerChoice);
    setResult(result);
  };
  return (
    <div className="game">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice.name} onClick={() => playGame(choice.name)}>
            {choice.icon}
          </button>
        ))}
      </div>
      {result && (
        <Result
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      )}
    </div>
  );
};

export default Game;
