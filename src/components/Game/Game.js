import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import Guess from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    setGuesses([...guesses, { id: crypto.randomUUID(), guess: guess }]);
  }

  return (
    <>
      <Guess guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
