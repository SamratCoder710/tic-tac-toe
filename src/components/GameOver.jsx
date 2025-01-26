import React from "react";

function GameOver({ onReset,winner }) {
  return (
    <div id="game-over">
      <h2>Game Over !</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>Match Drawn</p>}
      <button onClick={onReset}>Rematch</button>
    </div>
  );
}

export default GameOver;
