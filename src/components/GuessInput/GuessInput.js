import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  function handleGuess(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
