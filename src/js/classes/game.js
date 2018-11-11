import Player from './player';
import GameSide from './game-side';
import {appendFigure, hide, show} from '../utils';
import {getEmptySquares, isWon, getBestBotMove, getWinCombo} from '../algorithm';

export default class Game {
  constructor (humanSide, botSide, selectedGameMode) {
    this.$board = document.querySelector('.board');
    this.$squares = document.querySelectorAll('.board__item');
    this.$pointsValues = document.querySelector('.points__values');
    this.$winner = document.querySelector('.winner');
    this.$mainGame = document.querySelector('.main-game');

    this.humanPlayer = new Player(humanSide);
    this.botPlayer = new Player(botSide);
    this.tieScore = 0;
    this.isItChangingMode = selectedGameMode === 'changing';

    this.addElement = this.addElement.bind(this);
    show(this.$mainGame);

    this.initialize();
    this.initButtons();
    this.handleWhenBotMovesFirst();
  }

  initialize () {
    this.board = Array.from(Array(9).keys());
    this.isThereWinner = false;

    this.$board.addEventListener('click', this.addElement);
  }

  initButtons () {
    this.$btnLeave = document.querySelector('.btn--leave');
    this.$btnNew = document.querySelector('.btn--new');
    this.$btnResign = document.querySelector('.btn--resign');
    this.$btnReset = document.querySelector('.btn--reset');

    this.$btnResign.disabled = true;

    this.$btnNew.addEventListener('click', () => this.handleNewGame());
    this.$btnReset.addEventListener('click', () => this.resetGameScore());
    this.$btnLeave.addEventListener('click', () => location.reload());
    this.$btnResign.addEventListener('click', 
      () => this.declareWinner({ player: this.botPlayer.side })
    );
  }

  handleWhenBotMovesFirst () {
    if (this.humanPlayer.side === 'O') {
      const correctFirstMoves = [0, 2, 6, 8];
      const randomIndex = Math.floor(Math.random() * 4);

      this.makeMove(correctFirstMoves[randomIndex], this.botPlayer.side);
    }
  }

  handleNewGame () {
    if (this.isItChangingMode) {
      const gameSide = new GameSide(true);
      
      hide(this.$mainGame);

      gameSide.selectSideByPromise()
        .then(data => {
          this.humanPlayer.side = data.humanSide;
          this.botPlayer.side = data.botSide;
          
          show(this.$mainGame);
          this.newGame();
        });
    } else {
      this.newGame();
    }
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

  newGame () {
    this.initialize();
    this.resetSquares();
    this.handleWhenBotMovesFirst();

    this.$btnNew.disabled = true;
    this.$btnResign.disabled = true;
    this.$btnReset.disabled = true;

    show(this.$board, 'table');
    hide(this.$winner);
  }

  addElement (e) {
    const squareId = e.target.id.slice(7);

    if (typeof this.board[squareId] === 'number') {
      this.makeMove(squareId, this.humanPlayer.side);
      this.checkIfItFirstPlayerMove();

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
        this.declareWinner(winner);
        break;
      }
      case tie: {
        this.isThereWinner = true;
        this.declareWinner('');
        break;
      }
    }
  }

  declareWinner ({player, winArrayIndex}) {
    this.handleScore(player);

    if (player && typeof winArrayIndex !== 'undefined') {
      this.fillWonSquares(player, winArrayIndex);
    }

    this.resetToInitialSettings();
  }

  resetToInitialSettings () {
    this.$board.removeEventListener('click', this.addElement);

    this.$btnLeave.disabled = true;
    this.$btnResign.disabled = true;

    setTimeout(() => {
      hide(this.$board);
      show(this.$winner, 'flex');

      this.$btnNew.disabled = false;
      this.$btnLeave.disabled = false;
      this.$btnReset.disabled = false;
    }, 500);
  }

  handleScore (player) {
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
  }

  fillWonSquares (player, winArrayIndex) {
    const wonIndexes = getWinCombo(winArrayIndex);

    this.$squares.forEach($square => {
      const squareId = parseInt($square.id.slice(7), 10);

      if (wonIndexes.includes(squareId)) {
        $square.style.backgroundColor = player === this.humanPlayer.side ? 'green' : 'red';
      }
    });
  }

  resetSquares () {
    this.$squares.forEach($square => {
      if ($square.firstElementChild) {
        $square.removeChild($square.firstElementChild);
        $square.style.removeProperty('background-color');
      }
    });
  }

  checkIfItFirstPlayerMove () {
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
