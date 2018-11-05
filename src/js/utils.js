const playerX = 'X';
const playerO = 'O';
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

export function appendFigure (squareId, player) {
  const $element = createFigure(player);
  const $square = document.getElementById(`square-${squareId}`);

  $square.appendChild($element);
}

function createFigure (player) {
  const $el = document.createElement('div');
  $el.className = player === playerX ? 'board__cross' : 'board__circle';

  return $el;
}

export function isWon (board, player) {
  const plays = board.reduce((a, e, i) => {
    return e === player ? a.concat(i) : a;
  }, []);

  let gameWon = null;

  for (const [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }
  }

  return gameWon;
}

export function getEmptySquares (board) {
  return board.filter(s => typeof s === 'number');
}

export function getBestBotMove (newBoard) {
  return minimax(newBoard, playerO).index;
}

function minimax (newBoard, player) {
  const emptySquares = getEmptySquares(newBoard);
  const moves = [];

  if (isWon(newBoard, playerX)) {
    return { score: -10 };
  } else if (isWon(newBoard, playerO)) {
    return { score: 10 };
  } else if (emptySquares.length === 0) {
    return { score: 0 };
  }

  for (let i = 0; i < emptySquares.length; i++) {
    const move = {};
    let result;

    move.index = newBoard[emptySquares[i]];
    newBoard[emptySquares[i]] = player;

    if (player === playerO) {
      result = minimax(newBoard, playerX);
      move.score = result.score;
    } else {
      result = minimax(newBoard, playerO);
      move.score = result.score;
    }

    newBoard[emptySquares[i]] = move.index;

    moves.push(move);
  }

  let bestMove;
  let bestScore;

  if (player === playerO) {
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
