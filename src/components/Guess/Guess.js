import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guesses }) {
  function maxLen() {
    return guesses.length < NUM_OF_GUESSES_ALLOWED
      ? guesses.length
      : NUM_OF_GUESSES_ALLOWED;
  }

  function generateCells(word) {
    return word.split("").map((char, index) => (
      <span key={index} className="cell">
        {char}
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
