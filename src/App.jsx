import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {checkGameOver,deriveActivePlayer,deriveGameBoard} from './helpers/gameLogic';


function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  console.log("App");
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const handlePlayerNameChange = (symbol,newName)=>{
    setPlayers((prevPlayers)=>{
      return {...prevPlayers, [symbol]: newName};
    })
  }
  
  let activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = checkGameOver(gameBoard,players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIdx, colIdx) => {
    // setActivePlayer((prevActivePlayer) => {
    //   return prevActivePlayer === "X" ? "O" : "X";
    // });
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { position: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const resetGame = () => {
    setGameTurns([]);
  };

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" active={activePlayer === "X"} onChangeName ={handlePlayerNameChange} />
        <Player name="Player 2" symbol="O" active={activePlayer === "O"} onChangeName ={handlePlayerNameChange} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      <Log turns={gameTurns} />
      {(winner || hasDraw) && <GameOver onReset={resetGame} winner={winner} />}
    </main>
  );
}

export default App;
