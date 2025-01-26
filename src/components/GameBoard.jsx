import React, { useState } from "react";



function GameBoard({onSelectSquare,gameBoard}) {
  console.log("Game Board");
  

  // const [gameBoard,setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIdx,colIdx)=>{
  //   setGameBoard((prevGameBoard)=>{
  //   let updatedGameBoard = [...prevGameBoard.map(innerArr=> [...innerArr])];
  //   updatedGameBoard[rowIdx][colIdx] = activePlayer;
  //   return updatedGameBoard;
  //   });
  //   onSelectSquare();
    
  // }


  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
            <ol>
          {row.map((playerSymbol, colIdx) => (
            <li key={colIdx}>
                <button onClick={()=>onSelectSquare(rowIdx,colIdx)} disabled={playerSymbol!=null}>{playerSymbol}</button>
                </li>
          ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
