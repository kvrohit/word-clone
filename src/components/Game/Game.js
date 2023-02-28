import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import Guess from "../Guess";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameWon, setGameWon] = React.useState(false);

  function handleGuess(guess) {
    setGuesses([...guesses, { id: crypto.randomUUID(), guess: guess }]);
    setGameWon(guess === answer ? true : false);
  }

  function restartGame() {
    setGameWon(false);
    setGuesses([]);
    answer = sample(WORDS);
    console.info({ answer });
  }

  return (
    <>
      <Guess guesses={guesses} answer={answer} />
      <GuessInput
        handleGuess={handleGuess}
        disabled={gameWon || guesses.length === NUM_OF_GUESSES_ALLOWED}
      />
      {gameWon ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
          <button className="restart-button" onClick={restartGame}>
            Restart
          </button>
        </div>
      ) : guesses.length === NUM_OF_GUESSES_ALLOWED ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button className="restart-button" onClick={restartGame}>
            Restart
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Game;
