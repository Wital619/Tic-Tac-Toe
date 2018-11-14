let humanPlayer = 'X';
let botPlayer = 'O';

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
];

export function getWinCombo (index) {
  return winCombos[index];
}

export function checkWinner (board, playerSide) {
  const playerMoves = board.reduce((a, e, i) => {
    return e === playerSide ? a.concat(i) : a;
  }, []);

  let gameWon = null;

  for (const [winArrayIndex, winArray] of winCombos.entries()) {
    if (winArray.every(elem => playerMoves.includes(elem))) {
      gameWon = { winArrayIndex, playerSide };
      break;
    }
  }

  return gameWon;
}

export function getEmptySquares (board) {
  return board.filter(s => typeof s === 'number');
}

export function getBestBotMove (board, player) {
  if (player === 'O') {
    humanPlayer = 'X';
    botPlayer = 'O';
  } else {
    humanPlayer = 'O';
    botPlayer = 'X';
  }

  return minimax(board, botPlayer).index;
}

function minimax (board, player) {
  const emptySquares = getEmptySquares(board);
  const moves = [];

  if (checkWinner(board, humanPlayer)) {
    return { score: -10 };
  } else if (checkWinner(board, botPlayer)) {
    return { score: 10 };
  } else if (emptySquares.length === 0) {
    return { score: 0 };
  }

  for (let i = 0; i < emptySquares.length; i++) {
    const move = {};
    let result;

    move.index = board[emptySquares[i]];
    board[emptySquares[i]] = player;

    if (player === humanPlayer) {
      result = minimax(board, botPlayer);
      move.score = result.score;
    } else {
      result = minimax(board, humanPlayer);
      move.score = result.score;
    }

    board[emptySquares[i]] = move.index;

    moves.push(move);
  }

  let bestMove;
  let bestScore;

  if (player === botPlayer) {
    bestScore = -10000;

    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    bestScore = 10000;

    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}
