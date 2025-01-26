const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

export function checkGameOver(gameBoard, players) {
  let rowCount = gameBoard.length;
  let colCount = gameBoard[0].length;
  let rowSum = new Array(rowCount).fill(0);
  let colSum = new Array(rowCount).fill(0);
  let diagonalSum = 0;
  let adiagonalSum = 0;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (gameBoard[i][j] === "X") {
        rowSum[i] += 1;
        colSum[j] += 1;
        if (i == j) {
          diagonalSum++;
        }

        if (i + j == 2) {
          adiagonalSum++;
        }
      } else if (gameBoard[i][j] === "O") {
        rowSum[i] -= 1;
        colSum[j] -= 1;

        if (i == j) {
          diagonalSum--;
        }

        if (i + j == 2) {
          adiagonalSum--;
        }
      }
    }
  }

  //Check if any player has won
  const winningValue = 3;
  if (
    rowSum.includes(winningValue) ||
    colSum.includes(winningValue) ||
    diagonalSum === winningValue ||
    adiagonalSum === winningValue
  ) {
    return players.X;
  } else if (
    rowSum.includes(-winningValue) ||
    colSum.includes(-winningValue) ||
    diagonalSum === -winningValue ||
    adiagonalSum === -winningValue
  ) {
    return players.O;
  }
  return undefined;
}

export function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

export function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((innerArr) => [...innerArr])];

  for (const turn of gameTurns) {
    const { position, player } = turn;
    const { row, col } = position;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
