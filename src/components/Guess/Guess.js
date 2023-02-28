import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer }) {
  function maxLen() {
    return guesses.length < NUM_OF_GUESSES_ALLOWED
      ? guesses.length
      : NUM_OF_GUESSES_ALLOWED;
  }

  function generateCells(word) {
    return checkGuess(word, answer).map((result, index) => (
      <span
        key={index}
        className={`cell ${result.letter === " " ? null : result.status}`}
      >
        {result.letter}
      </span>
    ));
  }

  return (
    <div className="guess-results">
      {range(0, maxLen()).map((index) => {
        const { id, guess } = guesses[index];
        return (
          <p key={id} className="guess">
            {generateCells(guess)}
          </p>
        );
      })}
      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map(() => (
        <p key={crypto.randomUUID()} className="guess">
          {generateCells("     ")}
        </p>
      ))}
    </div>
  );
}

export default Guess;
