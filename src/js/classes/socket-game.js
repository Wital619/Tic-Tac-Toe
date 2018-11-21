import {appendFigure, hide, show, replacePlayerSide} from '../utils';
import {getEmptySquares, checkWinner} from '../algorithm';

export default class SocketGame {
  constructor ({roomId, player, socket, isGameStarted}) {
    this.$board = document.querySelector('.board');
    this.$squares = document.querySelectorAll('.board__item');
    this.$info = document.querySelector('.info');
    this.$winner = document.querySelector('.winner');
    this.$mainGame = document.querySelector('.main-game');

    this.roomId = roomId;
    this.player = player;
    this.socket = socket;
    this.isGameStarted = isGameStarted;
    this.opponentSide = replacePlayerSide(this.player.side);

    this.handleSquareClick = this.handleSquareClick.bind(this);

    show(this.$mainGame);
    show(this.$info);

    this.initialize();
    this.initSocketButtons();
  }

  initialize () {
    this.board = Array.from(Array(9).keys());
    this.$board.addEventListener('click', this.handleSquareClick);
  }

  initSocketButtons () {
    const $btnNew = document.querySelector('.btn--new');
    const $btnResign = document.querySelector('.btn--resign');
    const $btnReset = document.querySelector('.btn--reset');
    const $btnLeave = document.querySelector('.btn--leave');
    
    hide($btnReset);
    hide($btnResign);
    hide($btnNew);
    hide($btnLeave);
  }

  handleSquareClick (e) {
    const squareId = e.target.id.slice(7);

    if (!this.player.getCurrentTurn()) {
      alert('Its not your turn!');

      return;
    }

    if (!this.isGameStarted) {
      alert('There is no second player!');

      return;
    }

    if (typeof this.board[squareId] === 'number') {
      this.makeMove(squareId, this.player.side);
      this.setInfoText('Waiting for the opponent');
      this.player.setCurrentTurn(false);

      this.socket.emit('playTurn', {
        square: squareId,
        room: this.roomId
      });
    } else {
      alert('This square has already been played on!');
    }
  }

  makeMove (squareId, player) {
    appendFigure(squareId, player);
    this.board[squareId] = player;
    this.checkIfThereIsResult();
  }

  checkIfThereIsResult () {
    const winner = checkWinner(this.board, this.player.side);
    const tie = getEmptySquares(this.board).length === 0;

    switch (winner || tie || true) {
      case winner: {
        this.declareWinner('YOU WON !');
        this.socket.emit('gameEnded', {
          room: this.roomId,
          result: 'YOU LOSE !'
        });     
        break;
      }
      case tie: {
        this.declareWinner('TIE !');
        this.socket.emit('gameEnded', {
          room: this.roomId,
          result: 'TIE !'
        });    

        break;
      }
    }
  }

  declareWinner (resultsMessage) {
    hide(this.$info);

    this.showResultOverTime(resultsMessage);

    return setTimeout(() => {
      this.socket.disconnect();
      location.reload();
    }, 1500);
  }

  emitAnotherPlayer (result) {
    this.socket.emit('gameEnded', {
      room: this.roomId,
      result
    });
  }

  showResultOverTime (result) {
    return setTimeout(() => {
      const $winnerResult = document.querySelector('.winner__result');
      $winnerResult.innerText = result; 

      hide(this.$board);
      show(this.$winner, 'flex');

      this.$winner.style.marginBottom = '0';
    }, 500);
  }

  setInfoText (text) {
    this.$info.innerText = text;
  }
}
