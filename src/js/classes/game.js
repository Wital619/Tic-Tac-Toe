import Player from './player';
import {getEmptySquares, isWon, getBestBotMove, appendFigure} from '../utils';

export default class Game {
  constructor (humanSide, botSide, selectedGameMode) {
    this.$board = document.querySelector('.board');
    this.$pointsValues = document.querySelector('.points__values');
    this.$winner = document.querySelector('.winner');

    this.board = Array.from(Array(9).keys());
    this.isThereWinner = false;

    this.humanPlayer = new Player(humanSide);
    this.botPlayer = new Player(botSide);
    this.tieScore = 0;
    this.selectedGameMode = selectedGameMode;

    this.addElement = this.addElement.bind(this);

    this.$board.addEventListener('click', e => this.addElement(e));

    this.initButtons();
    this.handleMovesTurn();
  }

  isChangingGameMode () {
    return this.selectedGameMode === 'changing' ? true : false;
  }

  initButtons () {
    this.$btnLeave = document.querySelector('.btn--leave');
    this.$btnNew = document.querySelector('.btn--new');
    this.$btnResign = document.querySelector('.btn--resign');
    this.$btnReset = document.querySelector('.btn--reset');

    this.$btnResign.disabled = true;

    this.$btnNew.addEventListener('click', () => this.newGame());
    this.$btnReset.addEventListener('click', () => this.resetGameScore());
    this.$btnResign.addEventListener('click', () =>
      this.declareWinner(this.botPlayer.side)
    );
    this.$btnLeave.addEventListener('click', () =>
      this.leaveGame(this.botPlayer.side)
    );
  }

  resetGameScore () {
    this.humanPlayer.score = 0;
    this.botPlayer.score = 0;
    this.tieScore = 0;

    this.$pointsValues.children[0].textContent = 0;
    this.$pointsValues.children[2].textContent = 0;
    this.$pointsValues.children[1].textContent = 0;

    this.$btnReset.disabled = true;
  }

  leaveGame () {
    window.history.back();
  }

  handleMovesTurn () {
    if (this.humanPlayer.side === 'O') {
      this.makeMove(0, this.botPlayer.side);
    }
  }

  newGame () {
    this.board = Array.from(Array(9).keys());
    this.isThereWinner = false;
    this.resetSquares();
    this.handleMovesTurn();

    this.$btnNew.disabled = true;
    this.$btnResign.disabled = true;
    this.$btnReset.disabled = true;

    this.$board.style.display = 'table';
    this.$winner.style.display = 'none';
  }

  addElement (e) {
    const squareId = e.target.id.slice(7);

    if (typeof this.board[squareId] === 'number') {
      this.makeMove(squareId, this.humanPlayer.side);
      this.checkIfItFirstMove();

      const botSquareId = getBestBotMove(this.board, this.botPlayer.side);
      this.makeMove(botSquareId, this.botPlayer.side);
    }
  }

  makeMove (squareId, player) {
    if (!this.isThereWinner) {
      appendFigure(squareId, player);
      this.board[squareId] = player;

      this.checkIfThereIsResult(player);
    }
  }

  checkIfThereIsResult (player) {
    const winner = isWon(this.board, player);
    const tie = this.isTie();

    switch (winner || tie || true) {
      case winner: {
        this.isThereWinner = true;
        this.declareWinner(winner.player);
        break;
      }
      case tie: {
        this.isThereWinner = true;
        this.declareWinner('Tie!');
        break;
      }
    }
  }

  declareWinner (player) {
    const $winner = document.querySelector('.winner__result');

    if (player === this.humanPlayer.side) {
      this.humanPlayer.score++;
      this.$pointsValues.children[0].textContent = this.humanPlayer.score;
      $winner.textContent = 'YOU WON !';
    } else if (player === this.botPlayer.side) {
      this.botPlayer.score++;
      this.$pointsValues.children[2].textContent = this.botPlayer.score;
      $winner.textContent = 'YOU LOSE !';
    } else {
      this.tieScore++;
      this.$pointsValues.children[1].textContent = this.tieScore;
      $winner.textContent = 'TIE !';
    }

    this.$board.removeEventListener('click', this.addElement);

    this.$btnLeave.disabled = true;
    this.$btnResign.disabled = true;

    setTimeout(() => {
      this.$board.style.display = 'none';
      this.$winner.style.display = 'flex';

      this.$btnNew.disabled = false;
      this.$btnLeave.disabled = false;
      this.$btnReset.disabled = false;
    }, 500);
  }

  resetSquares () {
    const $squares = document.querySelectorAll('.board__item');

    $squares.forEach($square => {
      if ($square.firstElementChild) {
        $square.removeChild($square.firstElementChild);
      }
    });
  }

  checkIfItFirstMove () {
    const movesCount = this.board.filter(side => side === this.humanPlayer.side);

    if (movesCount.length === 1) {
      this.$btnResign.disabled = false;
      this.$btnLeave.disabled = true;
    }
  }

  isTie () {
    return getEmptySquares(this.board).length === 0;
  }
}
